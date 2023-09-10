import React, { useEffect, useState } from "react";
import { Collapse } from "flowbite";
import tw from "tailwind-styled-components";
import { loadImg } from "../assets/images";
import { BsList } from "react-icons/bs";

export default function Navbar() {
  let aboutComponent: HTMLElement;
  let projectComponent: HTMLElement;
  let skillComponent: HTMLElement;
  // let educationComponent: HTMLElement;

  const [isopen, setIsOpen] = useState<boolean>(false);

  const PageReloadHandler = () => {
    window.location.reload();
  };

  const MenuOpenHandler = () => {
    setIsOpen(!isopen);
  };

  useEffect(() => {
    // navbar 기능
    const targetEl: HTMLElement = document.getElementById("targetEl") as HTMLElement;
    const triggerEl: HTMLElement = document.getElementById("triggerEl") as HTMLElement;

    if (targetEl && triggerEl) {
      const collapse = new Collapse(targetEl, triggerEl);
    }
    // 선언한 변수에 엘리먼트 할당
    aboutComponent = document.getElementById("about")!;
    projectComponent = document.getElementById("project")!;
    skillComponent = document.getElementById("skill")!;
    // educationComponent = document.getElementById("education")!;
  }, []);

  return (
    <Nav className="MenuNav">
      <NavContainer className="container">
        <PageTitle onClick={() => PageReloadHandler()}>
          <img className="w-fit h-16 mx-2 p-2" src={loadImg.Favicon} alt="icon" />
          <p className="sm:hidden">Jin's Portfolio</p>
          <p className="mtoxl:hidden stom:visibility">Jin's</p>
        </PageTitle>
        {/* <MainButton
          id="triggerEl"
          data-collapse-toggle="navbar-sticky"
          type="button"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        > */}
        <ul>
          <MainButton onClick={() => MenuOpenHandler()}>
            <BsList className="font-extrabold text-3xl" />
          </MainButton>
        </ul>
        <>
          {isopen ? (
            <div className="bg-yellow-400 rounded-md w-fit sm:block flex justify-end" id="navbar-sticky">
              <MenuContainer>
                <li>
                  <MenuTag aria-current="page" onClick={() => aboutComponent?.scrollIntoView({ behavior: "smooth" })}>
                    About
                  </MenuTag>
                </li>
                <li>
                  <MenuTag aria-current="page" onClick={() => projectComponent?.scrollIntoView({ behavior: "smooth" })}>
                    Project
                  </MenuTag>
                </li>
                <li>
                  <MenuTag onClick={() => skillComponent?.scrollIntoView({ behavior: "smooth" })}>Skill</MenuTag>
                </li>
              </MenuContainer>
            </div>
          ) : null}
        </>
      </NavContainer>
    </Nav>
  );
}

const Nav = tw.nav`
w-screen h-fit bg-Main font-bold text-white text-3xl
text-center border-b border-gray-200
z-10 py-4
`;

const NavContainer = tw.div`
w-2/3 md:w-full h-fit
flex flex-wrap items-center justify-between mx-auto
border-red-500 border-2 border-solid
`;

const PageTitle = tw.div`
text-3xl font-semibold whitespace-nowrap
flex justify-between cursor-pointer items-center 
hover:text-Highlight 
`;

const MenuContainer = tw.ul`
flex flex-col p-4
sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:ml-[40%] sm:font-medium sm:border-0
`;

const MenuTag = tw.a`
block cursor-pointer  
md:w-24 sm:w-fit p-1
py-2 px-auto border-solid border-Gray_Light border-b-2 outline-none
sm:text-white sm:bg-transparent
text-lg font-bold bg-white
text-Main 
sm:hover:bg-transparent sm:hover:text-Highlight sm:p-0 
`;

const MainButton = tw.button`
inline-flex items-center p-2
text-sm text-Gray_Light
rounded-lg sm:hidden 
hover:bg-gray-100 hover:text-Main 
focus:outline-none focus:ring-2 focus:ring-gray-200
sticky
`;
