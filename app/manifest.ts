import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { BASE_PATH } from "@/lib/asset";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.companyName,
    short_name: siteConfig.brandName,
    description: siteConfig.tagline,
    start_url: `${BASE_PATH}/`,
    scope: `${BASE_PATH}/`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b1f4d",
    icons: [
      { src: `${BASE_PATH}/icon-48.png`, sizes: "48x48", type: "image/png" },
      { src: `${BASE_PATH}/icon-96.png`, sizes: "96x96", type: "image/png" },
      { src: `${BASE_PATH}/icon-192.png`, sizes: "192x192", type: "image/png" },
      { src: `${BASE_PATH}/icon-512.png`, sizes: "512x512", type: "image/png" },
      { src: `${BASE_PATH}/icon-maskable-512.png`, sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
