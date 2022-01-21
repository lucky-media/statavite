import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import { defineConfig } from "laravel-vite";
import { Plugin } from "vite";

const antlersReload = (): Plugin => ({
    name: "vite:laravel:antlers",
    handleHotUpdate({ file, server }) {
        // This might need more granular control. Maybe a configuration
        // option. Feel free to open an issue or a PR.
        if (file.endsWith(".antlers.html") || file.endsWith("vite.php")) {
            server.ws.send({
                type: "full-reload",
                path: "*",
            });
        }
    },
});

export default defineConfig()
    .withPlugins(antlersReload)
    .withPostCSS([tailwind, autoprefixer]);
