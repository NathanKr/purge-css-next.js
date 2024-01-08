
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  css: ["./node_modules/bootstrap/dist/css/bootstrap.css"],
  output: "./node_modules/bootstrap/dist/css/bootstrap-with-purgecss.css",
};
