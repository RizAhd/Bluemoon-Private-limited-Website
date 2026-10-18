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
      { src: `${BASE_PATH}/favicon.png`, sizes: "256x256", type: "image/png" },
      { src: `${BASE_PATH}/logo-icon.png`, sizes: "491x493", type: "image/png" },
    ],
  };
}
