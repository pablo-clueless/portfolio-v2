import { NextFunction, Request, Response } from "express"

/**@GET route /api/ */
module.exports = {
	api: (_req: Request, res: Response, next: NextFunction) => {
		try {
			return res.status(200).json({ message: "Hello Vite SSR!" })
		} catch (error) {
			console.log(error)
			next(error)
		}
	},
}
