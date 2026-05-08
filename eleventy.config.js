export default function (cfg) {
  cfg.addPassthroughCopy("src/assets");
  cfg.addPassthroughCopy("src/fonts");
  cfg.addPassthroughCopy("src/css");
  cfg.addPassthroughCopy("src/js");
  cfg.addPassthroughCopy("src/favicon.png");
  return { dir: { input: "src", output: "_site" } };
}
