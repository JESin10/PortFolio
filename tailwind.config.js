module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkmode: "class",
  // main color setting 가능
  theme: {
    screens: {
      sm: { max: "640px" }, // => @media (min-width: 390px)
      md: { max: "870px" }, // => @media (min-width: 640px)
      lg: { max: "1024px" }, // => @media (min-width: 1024px)
      xl: { max: "1280px" }, // => @media (min-width: 1280px)
      xxl: { min: "1281px" }, // => @media (min-width: 1280px)
      stom: { min: "350px", max: "640px" },
      mtoxl: { min: "641px" },
    },
    extend: {
      colors: {
        primary: {
          Navy: "#003366",
          Gray: "#B8B8B8",
          Yellow_Highlight: "#F5F085",
          Red: "#ce5353",
        },
        secondary: {
          LightNavy: "#4C7093",
          LightGray: "#d9d9d9",
          DarkerYellow: "#dfda5a",
        },
      },

      spacing: {
        SkillBoxW1: "350px",
        SkillBoxH1: "170px",
        SkillBoxW2: "300px",
        SkillBoxH2: "150px",
        TabH: "125px",
        FooterH: "100px",
        MenuW: "250px",
        onePage: "1117px",
        BtnW: "170px",
        BtnH: "80px",
        ImgBoxW: "500px",
        ImgBoxH: "320px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
};
