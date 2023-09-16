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
          <img className=" w-[-web-kit-fit] h-16 mx-2 p-2 sm:h-10" src={loadImg.Favicon} alt="icon" />
          <p className="sm:hidden">Jin's Portfolio</p>
          <p className="mtoxl:hidden stom:visibility text-2xl">Jin's</p>
        </PageTitle>

        {/* md~ : Menu */}
        <div className="sm:hidden">
          <div className="rounded-md w-fit sm:block flex justify-end" id="navbar-sticky">
            <MenuContainer id="triggerEl">
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
        </div>
        {/* ~sm : Menu */}
        <div className="sm:visibility mtoxl:hidden">
          <MainButton onClick={() => MenuOpenHandler()}>
            <BsList className="font-extrabold text-3xl" />
          </MainButton>
          <>
            {isopen ? (
              <div className="bg-Main/90 rounded-md w-40 flex flex-col items-center absolute z-99 right-6">
                <MenuContainer id="triggerEl">
                  <li className="w-full hover:bg-Gray_Light/20">
                    <MenuTag aria-current="page" onClick={() => aboutComponent?.scrollIntoView({ behavior: "smooth" })}>
                      About
                    </MenuTag>
                  </li>
                  <li className="w-full hover:bg-Gray_Light/20">
                    <MenuTag aria-current="page" onClick={() => projectComponent?.scrollIntoView({ behavior: "smooth" })}>
                      Project
                    </MenuTag>
                  </li>
                  <li className="w-full hover:bg-Gray_Light/20">
                    <MenuTag onClick={() => skillComponent?.scrollIntoView({ behavior: "smooth" })}>Skill</MenuTag>
                  </li>
                </MenuContainer>
              </div>
            ) : null}
          </>
        </div>
      </NavContainer>
    </Nav>
  );
}

const Nav = tw.nav`
font-bold text-white 
text-center text-3xl
w-full h-fit z-50 py-4 fixed
bg-Main shadow-md shadow-black/40
`;

const NavContainer = tw.div`
w-2/3 md:w-full h-fit
flex flex-wrap items-center justify-between mx-auto
`;

const PageTitle = tw.div`
text-3xl font-semibold whitespace-nowrap
flex justify-between cursor-pointer items-center 
hover:text-Highlight 
`;

const MenuContainer = tw.ul`
flex flex-row space-x-4
sm:w-full sm:space-x-0
sm:flex-col sm:my-4 sm:mx-auto 
items-center 
sm:h-full
`;

const MenuTag = tw.a`
block cursor-pointer text-lg font-bold
md:w-24 sm:w-full p-4
py-2 mx-auto 
text-white hover:text-Highlight bg-transparent
sm:px-auto sm:py-2
hover:bg-Gray_Light/40
border-solid border-Gray_Light border-b-2 outline-none
sm:hover:bg-transparent
`;

const MainButton = tw.button`
inline-flex items-center p-2
text-sm text-Gray_Light
rounded-lg  
hover:bg-gray-100 hover:text-Main 
focus:outline-none focus:ring-2 focus:ring-gray-200
sticky
`;
