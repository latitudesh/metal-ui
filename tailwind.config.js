const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"]
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
