import { defineConfig } from "vite";

export default defineConfig({
	build: {
		outDir: "build/app",
		emptyOutDir: true,
	},
	test: {
		globals: true,
		environment: "jsdom",
	},
});
