import React from "react";
import Header from "./page/Header";
import About from "./page/About";
import Footer from "./page/Footer";
import Menu from "./page/Menu";
import tw from "tailwind-styled-components";
import Skiils from "./page/Skiils";
import ProjectContent from "./page/ProjectContent";

function App() {
  return (
    <>
      <Header />
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
space-y-10 p-6
`;

const PageContainer = tw.div`
flex row-auto
`;
