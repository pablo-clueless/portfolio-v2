import { fileURLToPath } from "node:url"
import path from "node:path"
import fs from "node:fs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p: string) => path.resolve(__dirname, p)
const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8")
const { render } = await import("./dist/server/entry-server.js")

const routesToPrerender = fs.readdirSync(toAbsolute("/src/pages")).map((file) => {
	const name = file.replace(/\.jsx$/, "").toLowerCase()
	return name === "home" ? `/` : `/${name}`
})
;async () => {
	for (const url of routesToPrerender) {
		const context = {}
		const appHtml = render(url, context)

		const html = template.replace(`<!--app-html-->`, appHtml)
		const filePath = `dist/static${url === "/" ? "/index" : url}.html`
		fs.writeFileSync(toAbsolute(filePath), html)
		console.log("pre-rendered:", filePath)
	}
}
