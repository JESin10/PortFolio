import React, { useEffect } from "react";
import { Collapse } from "flowbite";
import tw from "tailwind-styled-components";
import { loadImg } from "../assets/images";
import { BsList } from "react-icons/bs";

export default function Navbar() {
  const ProtFolioSite = "https://portfolio-topaz-phi-92.vercel.app/";

  let PageTop: HTMLElement;
  let aboutComponent: HTMLElement;
  let projectComponent: HTMLElement;
  let skillComponent: HTMLElement;
  // let educationComponent: HTMLElement;

  useEffect(() => {
    // navbar 기능
    const targetEl: HTMLElement = document.getElementById(
      "targetEl"
    ) as HTMLElement;
    const triggerEl: HTMLElement = document.getElementById(
      "triggerEl"
    ) as HTMLElement;

    if (targetEl && triggerEl) {
      const collapse = new Collapse(targetEl, triggerEl);
    }
    // 선언한 변수에 엘리먼트 할당
    PageTop = document.getElementById("")!;
    aboutComponent = document.getElementById("about")!;
    projectComponent = document.getElementById("project")!;
    skillComponent = document.getElementById("skill")!;
    // educationComponent = document.getElementById("education")!;
  }, []);

  return (
    <Nav className="MenuNav">
      <NavContainer className="container">
        {/* <a href={ProtFolioSite} className="flex items-center"> */}
        <PageTitle
          onClick={() => PageTop?.scrollIntoView({ behavior: "smooth" })}
        >
          <img
            className="inline-block w-10 mx-2"
            src={loadImg.Favicon}
            alt="icon"
          />
          <p className="sm:hidden">EunJin's</p>
        </PageTitle>
        {/* </a> */}
        {/* <MainButton
          id="triggerEl"
          data-collapse-toggle="navbar-sticky"
          type="button"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        > */}
        <MainButton>
          <BsList className="font-extrabold text-3xl" />
        </MainButton>
        <div
          className="bg-yellow-400 rounded-md w-fit sm:block flex justify-end"
          id="navbar-sticky"
        >
          <MenuContainer>
            <li>
              <MenuTag
                aria-current="page"
                onClick={() =>
                  aboutComponent?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </MenuTag>
            </li>
            <li>
              <MenuTag
                aria-current="page"
                onClick={() =>
                  projectComponent?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Project
              </MenuTag>
            </li>
            <li>
              <MenuTag
                onClick={() =>
                  skillComponent?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Skill
              </MenuTag>
            </li>
          </MenuContainer>
        </div>
      </NavContainer>
    </Nav>
  );
}

const Nav = tw.nav`
w-screen h-TabH bg-Main font-bold text-white text-3xl
text-center border-b border-gray-200
fixed z-10
`;

const NavContainer = tw.div`
w-full h-fit py-2
inline-flex flex-wrap items-center justify-between mx-auto
border-red-500 border-2 border-solid
`;

const PageTitle = tw.div`
self-center text-xl font-semibold whitespace-nowrap
sm:text-3xl hover:text-Highlight ml-5
flex 
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
