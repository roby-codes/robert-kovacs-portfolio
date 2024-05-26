import { type Metadata, type Viewport } from "next";
import { appData } from "~/config/app.config";

export const getSeoTags = (params: Partial<AppData> = appData): Metadata => {
  const app = { ...appData, ...params };

  return {
    metadataBase: new URL(app.domain),
    applicationName: app.name,
    title: app.name,
    description: app.description,
    keywords: app.keywords,
    authors: { name: app.creator.name, url: app.creator.link },
    creator: app.creator.name,
    openGraph: {
      siteName: app.name,
      title: app.name,
      description: app.description,
      type: "website",
      locale: "en",
      url: new URL(app.domain),
      images: `${app.domain}/seo/image.jpg`,
    },
    twitter: {
      card: "summary_large_image",
      title: app.name,
      description: app.description,
      site: app.domain,
      images: `${app.domain}/seo/image.jpg`,
    },
  };
};

export const getViewport = (): Viewport => ({
  themeColor: appData.brandColor,
});
