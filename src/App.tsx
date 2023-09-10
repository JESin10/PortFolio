import React from "react";
import About from "./page/About";
import Footer from "./page/Footer";
import Menu from "./modules/Menu";
import tw from "tailwind-styled-components";
import Skills from "./page/Skills";
import Project from "./page/Project";

function App() {
  return (
    <>
      <PageContainer>
        <Menu />
        <ContentContainer>
          <About />
          <Project />
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
`;

const PageContainer = tw.div`
flex row-auto w-screen h-auto flex-col

`;
