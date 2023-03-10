module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        gray_600: "#757575",
        black_900_7f: "#0000007f",
        gray_601: "#7e7e7e",
        black_900_0a: "#0000000a",
        gray_901: "#222222",
        gray_602: "#707070",
        gray_900: "#111111",
        bluegray_100: "#d9d9d9",
        gray_300: "#e5e5e5",
        gray_50: "#faf9f8",
        gray_100: "#f5f5f5",
        bluegray_900: "#313131",
        black_900: "#000000",
        deep_orange_900: "#9e3500",
        bluegray_102: "#d0d0d0",
        bluegray_101: "#cccccc",
        deep_orange_500: "#f36b26",
        white_A700: "#ffffff",
        purple_600: "#8d429f",
      },
      boxShadow: {
        bs1: "0px 2px  1px 0px #0000000a",
        bs: "0px 2.94px  1px 0px #0000000a",
      },
      borderRadius: {
        radius3: "3px",
        radius4: "4px",
        radius16: "16px",
        radius19: "19px",
        radius20: "20px",
        radius23: "23px",
        radius24: "24px",
      },
      fontFamily: {
        helveticaneue: "Helvetica Neue",
        montserrat: "Montserrat",
        condiment: "Condiment",
        roboto: "Roboto",
        hiraginokakugothicpro: "Hiragino Kaku Gothic Pro",
      },
      letterSpacing: {
        ls1: "1px",
        ls05: "0.5px",
        ls12999999523162842: "1.2999999523162842px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
