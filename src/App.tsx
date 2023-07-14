import React from "react";
import About from "./page/About";
import Footer from "./page/Footer";
import Menu from "./modules/Menu";
import tw from "tailwind-styled-components";
import Skiils from "./page/Skiils";
import ProjectContent from "./page/ProjectContent";

function App() {
  return (
    <>
      <PageContainer>
        <Menu />
        <ContentContainer>
          <About />
          <ProjectContent />
          <Skiils />
        </ContentContainer>
      </PageContainer>
      <Footer />
    </>
  );
}

export default App;

const ContentContainer = tw.div`
space-y-10 mx-auto mt-TabH w-full
`;

const PageContainer = tw.div`
flex row-auto w-full
`;
