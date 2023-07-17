module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkmode: "class",
  // main color setting 가능
  theme: {
    extend: {
      colors: {
        Main: "#003366",
        Sub1: "#4C7093",
        Nomal: "#d9d9d9",
        NomalD: "#B8B8B8",
        Hightlight: "#F5F085",
      },
      spacing: {
        TabH: "125px",
        FooterH: "100px",
        MenuW: "250px",
        onePage: "1117px",
        BtnW: "170px",
        BtnH: "80px",
        SkillBoxW: "330px",
        SkillBoxH: "200px",
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
