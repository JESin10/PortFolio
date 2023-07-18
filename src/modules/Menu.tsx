import React, { useEffect } from "react";
import { Collapse } from "flowbite";
import tw from "tailwind-styled-components";

export default function Navbar() {
  const ProtFolioSite = "https://portfolio-topaz-phi-92.vercel.app/";

  let aboutComponent: HTMLElement;
  let projectComponent: HTMLElement;
  let skillComponent: HTMLElement;
  // let educationComponent: HTMLElement;

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
    <Nav className="menunav">
      <NavContainer className="container">
        <a href={ProtFolioSite} className="flex items-center">
          <PageTitle>EunJin's</PageTitle>
        </a>
        {/* responsive */}
        <div className="flex sm:order-2">
          <MainButton
            id="triggerEl"
            data-collapse-toggle="navbar-sticky"
            type="button"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </MainButton>
        </div>
        <div className="rounded-md w-full sm:block sm:w-auto flex justify-end" id="navbar-sticky">
          <MenuContainer>
            <li>
              <MenuTag
                aria-current="page"
                onClick={() => aboutComponent?.scrollIntoView({ behavior: "smooth" })}
              >
                About
              </MenuTag>
            </li>
            <li>
              <MenuTag
                aria-current="page"
                onClick={() => projectComponent?.scrollIntoView({ behavior: "smooth" })}
              >
                Project
              </MenuTag>
            </li>
            <li>
              <MenuTag onClick={() => skillComponent?.scrollIntoView({ behavior: "smooth" })}>
                Skill
              </MenuTag>
            </li>
            {/* <li>
              <MenuTag
                onClick={() =>
                  educationComponent?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Education
              </MenuTag>
            </li> */}
          </MenuContainer>
        </div>
      </NavContainer>
    </Nav>
  );
}

const Nav = tw.nav`
w-full h-TabH bg-Main font-bold text-white text-3xl
text-center border-b border-gray-200
px-2 py-2.5 fixed z-10
`;

const NavContainer = tw.div`
w-full h-auto my-5
max-w-[70rem] inline-flex flex-wrap items-center justify-between mx-auto
`;

const PageTitle = tw.span`
self-center text-xl font-semibold whitespace-nowrap
sm:text-3xl hover:text-Hightlight ml-5
`;

const MenuContainer = tw.ul`
flex flex-col p-4
sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:ml-[40%] sm:font-medium sm:border-0
`;

const MenuTag = tw.a`
block cursor-pointer  
md:w-24 sm:w-fit p-1
py-2 px-auto border-solid border-Nomal border-b-2 outline-none
sm:text-white sm:bg-transparent
text-lg font-bold bg-white
text-Main 
sm:hover:bg-transparent sm:hover:text-Hightlight sm:p-0 
`;

const MainButton = tw.button`
inline-flex items-center p-2
text-sm text-Nomal
rounded-lg sm:hidden 
hover:bg-gray-100 hover:text-Main 
focus:outline-none focus:ring-2 focus:ring-gray-200
`;
