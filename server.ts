import express, { NextFunction, Request, Response } from "express"
import serveStatic from "serve-static"
import compression from "compression"
import { createServer } from "vite"
import fs from "node:fs/promises"
import path from "node:path"

const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD

const resolve = (p: string) => path.resolve(__dirname, p)

const createSsrServer = async (isProd = process.env.NODE_ENV === "production") => {
	const app = express()
	const vite = await createServer({
		server: { middlewareMode: true },
		appType: "custom",
		logLevel: isTest ? "error" : "info",
	})

	app.use(vite.middlewares)
	const requestHandler = express.static(resolve("assets"))
	app.use(requestHandler)
	app.use("/assets", requestHandler)

	if (isProd) {
		app.use(compression())
		app.use(
			serveStatic(resolve("dist/"), {
				index: false,
			})
		)
	}

	app.use("*", async (req: Request, res: Response, next: NextFunction) => {
		const url = req.originalUrl
		try {
			let template = await fs.readFile(
				isProd ? resolve("dist/index.html") : resolve("index.html"),
				"utf-8"
			)
			template = await vite.transformIndexHtml(url, template)
			const productionBuildPath = path.join(__dirname, "./dist/entry-server.mjs")
			const devBuildPath = path.join(__dirname, "./src/entry-server.tsx")
			const { render } = await vite.ssrLoadModule(isProd ? productionBuildPath : devBuildPath)
			const appHtml = await render(url)
			const html = template.replace(`<!--app-html-->`, appHtml)
			res.status(200).set({ "Content-Type": "text/html" }).end(html)
		} catch (e) {
			!isProd && vite.ssrFixStacktrace(e)
			console.log(e.stack)
			vite.ssrFixStacktrace(e)
			next(e)
		}
	})

	const port = process.env.PORT || 5175
	app.listen(Number(port), "0.0.0.0", () => {
		console.log(`App is listening on http://localhost:${port}`)
	})
}

createSsrServer()
