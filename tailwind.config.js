// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      padding: {
        "80": "20rem",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
