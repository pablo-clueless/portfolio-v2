import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	server: {
		hmr: { overlay: false },
	},
	build: {
		minify: false,
	},
	root: "",
})
