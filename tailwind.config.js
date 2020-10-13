// See https://tailwindcss.com/docs/configuration for details
// prettier-ignore
module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      width: {
        "3/25": "12%"
      },
      padding: {
        "80": "20rem",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
