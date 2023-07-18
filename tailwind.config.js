module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkmode: "class",
  // main color setting 가능
  theme: {
    screens: {
      sm: "640px", // => @media (min-width: 390px)
      md: "870px", // => @media (min-width: 640px)
      lg: "1024px", // => @media (min-width: 1024px)
      xl: "1280px", // => @media (min-width: 1280px)
      xxl: "1450px", // => @media (min-width: 1280px)
    },
    extend: {
      colors: {
        Main: "#003366",
        Sub1: "#4C7093",
        Nomal: "#d9d9d9",
        NomalD: "#B8B8B8",
        Hightlight: "#F5F085",
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
