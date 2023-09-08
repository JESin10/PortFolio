import React from "react";
import About from "./page/About";
import Footer from "./page/Footer";
import Menu from "./modules/Menu";
import tw from "tailwind-styled-components";
import Skills from "./page/Skills";
import ProjectContent from "./page/ProjectContent";
import Project from "./page/Project";
import { loadImg } from "./assets/images";

function App() {
  return (
    <>
      <PageContainer>
        <Menu />
        <ContentContainer>
          <About />
          <Project />
          {/* <ProjectContent /> */}
          <Skills />
        </ContentContainer>
      </PageContainer>
      {/* <Footer /> */}
    </>
  );
}

export default App;

const ContentContainer = tw.div`
space-y-10 mt-TabH w-2/3 mx-auto h-screen
md:w-full
`;

const PageContainer = tw.div`
flex row-auto w-screen h-screen
`;

const WaveImg = tw.img`
w-screen h-fit bg-transparent

`;
