import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            "react-native": "react-native-web",
        },
    },

    optimizeDeps: {
        include: ["react-native-web"],
    },

    build: {
        sourcemap: false,
        minify: "esbuild",
        target: "esnext",
        modulePreload: true,
    },
});
