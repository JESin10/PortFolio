import { useEffect } from "react";
import { Collapse } from "flowbite";
import tw from "tailwind-styled-components";
import { loadImg } from "../assets/images";

export default function Navbar() {
  let aboutComponent: HTMLElement;
  let projectComponent: HTMLElement;
  let skillComponent: HTMLElement;
  // let educationComponent: HTMLElement;

  const PageReloadHandler = () => {
    window.location.reload();
  };

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
    <Nav className="MenuNav">
      <NavContainer className="container">
        <PageTitle onClick={() => PageReloadHandler()}>
          <img
            className=" w-[-web-kit-fit] h-16 mx-2 p-2 sm:h-10"
            src={loadImg.Favicon}
            alt="icon"
          />
          <p className="sm:hidden">Jin's Portfolio</p>
          <p className="mtoxl:hidden stom:visibility text-2xl">Jin's</p>
        </PageTitle>

        {/* md~ : Menu */}
        <div className="">
          <div
            className="rounded-md w-fit sm:block flex justify-end"
            id="navbar-sticky"
          >
            <MenuContainer id="triggerEl">
              <li>
                <MenuTag
                  aria-current="page"
                  onClick={() =>
                    aboutComponent?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <p className="sm:hidden">About</p>
                  <MobileTag id="about_menu">👤</MobileTag>
                </MenuTag>
              </li>
              <li>
                <MenuTag
                  aria-current="page"
                  onClick={() =>
                    projectComponent?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <p className="sm:hidden">Project</p>
                  <MobileTag id="project_menu">💻</MobileTag>
                </MenuTag>
              </li>
              <li>
                <MenuTag
                  onClick={() =>
                    skillComponent?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <p className="sm:hidden">Skill</p>
                  <MobileTag id="skill_menu">⚙️</MobileTag>
                </MenuTag>
              </li>
            </MenuContainer>
          </div>
        </div>
      </NavContainer>
    </Nav>
  );
}

const Nav = tw.nav`
  font-bold text-white 
  text-center text-3xl
  w-full h-fit z-50 py-4 fixed
  bg-primary-Navy shadow-md shadow-black/40
`;

const NavContainer = tw.div`
  w-2/3 md:w-full h-fit
  flex flex-wrap items-center justify-between mx-auto
`;

const PageTitle = tw.div`
  text-3xl font-semibold whitespace-nowrap
  flex justify-between cursor-pointer items-center 
  hover:text-primary-Yellow_Highlight 
`;

const MenuContainer = tw.ul`
  flex flex-row space-x-4 items-center 
  sm:w-fit sm:space-x-4
  sm:my-2 sm:mx-auto sm:h-full 
`;

const MenuTag = tw.a`
  block cursor-pointer text-lg font-bold
  mtoxl:w-24 p-4 py-2 mx-auto 
  text-white hover:text-primary-Yellow_Highlight bg-transparent
  hover:bg-secondary-LightGray/40
  border-solid border-Gray_Light border-b-2 outline-none

  sm:w-12 sm:px-0 sm:py-2
  sm:border-none sm:bg-white/70 sm:rounded-xl
  sm:hover:bg-primary-Yellow_Highlight
  sm:text-xl 
`;

const MobileTag = tw.p`
  sm:visibility mtoxl:hidden
  shadow-i
`;

// const MainButton = tw.button`
// inline-flex items-center p-2
// text-sm text-Gray_Light
// rounded-lg
// hover:bg-gray-100 hover:text-Main
// focus:outline-none focus:ring-2 focus:ring-gray-200
// sticky
// `;
