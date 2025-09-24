import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "javascript",
  "typescript",
  "html5",
  "css",
  "react",
  "nodedotjs",
  "express",
  "python",
  "nextdotjs",
  "postgresql",
  "mongodb",
  "vercel",
  "netlify",
  "git",
  "github",
  "astro",
  "tailwindcss",
  "gsap",
  "wordpress",
  "eleventy",
  "jamstack",
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
