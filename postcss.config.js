module.exports = {
  plugins: [
    // restore the Next.js default behavior
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./node_modules/react-bootstrap/**/*.js",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ["html", "body"],
          deep: [
            /^pagination/,
            /^col/,
            /^row/,
            /^container/,
            /^d-/,
            /^g-0/,
            /^text-/,
            /^align-items-/,
            /^justify-content-/,
            /^table/,
            /^mt-/,
            /^mb-/,
            /^basic-navbar-/,
            /^navbar-/,
            /^nav-/,
          ],
        },
      },
    ],
  ],
};
