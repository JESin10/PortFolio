import React from "react";
import About from "./page/About";
import Footer from "./page/Footer";
import Menu from "./modules/Menu";
import tw from "tailwind-styled-components";
import Skills from "./page/Skills";
import ProjectContent from "./page/ProjectContent";
import Project from "./page/Project";

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
      <Footer />
    </>
  );
}

export default App;

const ContentContainer = tw.div`
space-y-10 mx-auto h-auto

md:w-full w-2/3
border-solid border-4 border-blue-500
`;

const PageContainer = tw.div`
flex row-auto w-screen h-auto flex-col
border-solid border-4 border-green-600
`;
