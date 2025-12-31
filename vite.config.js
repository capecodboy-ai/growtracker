
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon-192.png", "icon-512.png"],
      manifest: {
        name: "GrowTracker",
        short_name: "GrowTracker",
        theme_color: "#16a34a",
        background_color: "#18181b",
        display: "standalone"
      }
    })
  ]
});
