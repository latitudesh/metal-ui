const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: "#f4f5f7",
      foreground: "#000000",
      white: "#FFFFFF",
      selection: "#79FFE1",
      secondary: "#666666",
      link: "#0070F3",
      border: "#EAEAEA",
      code: "#F81CE5",
      cyan: "#50E3C2",
      purple: "#F81CE5",
      alert: "#FF0080",
      violet: "#7928CA",
      accents: {
        DEFAULT: "#FAFAFA",
        two: "#f9fafb",
        three: "#e5e7eb",
        four: "#888888",
        five: "#666666",
        six: "#444444",
        seven: "#333333",
        eight: "#111111",
      },
      success: {
        DEFAULT: "#6359f9",
        dark: "#2b223d",
      },
      error: {
        light: "#FF1A1A",
        DEFAULT: "#EE0000",
        dark: "#C50000",
      },
      warning: {
        light: "#F7B955",
        DEFAULT: "#F5A623",
        dark: "#AB570A",
      },
    },
  },
  variants: {},
  plugins: [],
};
