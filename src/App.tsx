import React from "react";
import Header from "./page/Header";
import About from "./page/About";
import Footer from "./page/Footer";
import Menu from "./page/Menu";
import tw from "tailwind-styled-components";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Menu />
        <About />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;

const MainContainer = tw.div`
flex row-auto
`;
