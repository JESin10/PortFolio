module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkmode: [],
  // main color setting 가능
  theme: {
    extend: {
      colors: {
        Main: "#003366",
        Sub1: "#4C7093",
        Hightlight: "#FFFFFF",
        Nomal: "#d9d9d9",
        NomalD: "#B8B8B8",
      },
      spacing: {
        TabH: "125px",
        FooterH: "100px",
        MenuW: "250px",
        onePage: "1117px",
        Auto: "auto",
        BtnW: "170px",
        BtnH: "80px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
};
