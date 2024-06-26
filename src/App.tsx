import React, { useState } from "react";
import About from "./page/About";
import Footer from "./page/Footer";
import Menu from "./modules/Menu";
import tw from "tailwind-styled-components";
import Skills from "./page/Skills";
import Project from "./page/Project";
import { CiLight, CiDark } from "react-icons/ci";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (mode: boolean) => {
    if (mode) {
      document.documentElement.classList.add("dark"); // dark 모드 활성화
    } else {
      document.documentElement.classList.remove("dark"); // dark 모드 비활성화
    }
    setIsDarkMode(mode); // 상태 업데이트
  };

  return (
    <>
      <PageContainer>
        <Menu />
        <ContentContainer>
          <About />
          <Project />
          <Skills />
        </ContentContainer>
        <DarkModeButton>
          <div className="flex flex-col h-[90%] space-y-3 p-2 justify-between">
            <CiLight
              className="hover:bg-white/20 rounded-full hover:fill-primary-Yellow_Highlight  "
              onClick={() => toggleDarkMode(false)}
            />
            <CiDark
              className="hover:bg-white/20 rounded-full hover:fill-primary-Yellow_Highlight"
              onClick={() => toggleDarkMode(true)}
            />
          </div>
          {/* {isDarkMode ? <CiDark /> : <CiLight />} */}
        </DarkModeButton>
      </PageContainer>
      <Footer />
    </>
  );
}

export default App;

const ContentContainer = tw.div`
  space-y-10 mx-auto h-auto
  md:w-full w-8/12
`;

const PageContainer = tw.div`
  flex row-auto w-screen h-auto flex-col
  bg-primary-Navy/10
  dark:bg-[#2b2b2b]
`;

const DarkModeButton = tw.button`
  fixed bottom-10 lgtoxl:bottom-20 lgtoxl:right-20 p-2 right-10
  bg-secondary-LightNavy text-white
  rounded-full 

  focus:outline-none focus:ring-2 focus:ring-gray-500

`;
