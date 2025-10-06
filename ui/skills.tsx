import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "cloudflare",
  "javascript",
  "typescript",
  "html5",
  "css",
  "react",
  "gsap",
  "nodedotjs",
  "express",
  "supabase",
  "nextdotjs",
  "postgresql",
  "mongodb",
  "netlify",
  "git",
  "github",
  "astro",
  "tailwindcss",
  "wordpress",
  "eleventy",
  "jamstack",
  "cloudflarepages",
  "cloudflareworkers",
  "webflow",
  "framer",
  "gimp",
];

export default function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
