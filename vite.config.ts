import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Custom SSR entry at src/server.ts (error wrapper). Cloudflare builds from this via the plugin below.
export default defineConfig({
  plugins: [
    // Only use Cloudflare plugin when NOT deploying to Vercel
    ...(process.env.VERCEL ? [] : [cloudflare({ viteEnvironment: { name: "ssr" } })]),
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
  ],
});
