import React, { useEffect } from "react";
import { Collapse } from "flowbite";
import tw from "tailwind-styled-components";

export default function Navbar() {
  const ProtFolioSite = "http://naver.com";

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
    aboutComponent = document.getElementById("about")!;
    projectComponent = document.getElementById("project")!;
    skillComponent = document.getElementById("skill")!;
    // educationComponent = document.getElementById("education")!;
  }, []);

  return (
    <Nav className="menunav">
      <NavContainer className="container">
        <a href={ProtFolioSite} className="flex items-center">
          <PageTitle>Portfolio</PageTitle>
        </a>
        <div className="flex md:order-2">
          <MainButton
            id="triggerEl"
            data-collapse-toggle="navbar-sticky"
            type="button"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            {" "}
            button
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
        <div
          className="rounded-md w-full md:block md:w-auto"
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
sm:px-4  
dark:bg-gray-900 dark:border-gray-600
`;

const NavContainer = tw.div`
max-w-[70rem] flex flex-wrap items-center justify-between mx-auto
`;

const PageTitle = tw.span`
self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white
`;

const MenuContainer = tw.ul`
flex flex-col
p-4 mt-4  
md:flex-row md:space-x-8 md:mt-0 md:text-sm md:ml-[40%] md:font-medium md:border-0
dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
`;

const MenuTag = tw.a`
block cursor-pointer  
py-2 px-auto border-solid border-Nomal border-b-2 outline-none
text-Main text-lg font-bold bg-white
md:hover:bg-transparent md:hover:text-Hightlight md:p-0 
md:dark:hover:text-white md:dark:hover:bg-transparent
dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700`;

const MainButton = tw.button`
inline-flex items-center p-2 
text-sm text-Nomal
rounded-lg md:hidden 
hover:bg-gray-100 hover:text-Main 
focus:outline-none focus:ring-2 focus:ring-gray-200
dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
`;
