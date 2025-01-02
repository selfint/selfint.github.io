import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Tom Selfin | Blog",
    description: "My personal blog",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/posts/*.md")),
    customData: `<language>en-us</language>`,
  });
}
