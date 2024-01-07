
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  css: ["./node_modules/bootstrap/dist/css/bootstrap.css"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: {
    standard: ["html", "body"],
  },
  output: "./node_modules/bootstrap/dist/css/bootstrap-with-purgecss.css",
};
