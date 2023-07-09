import React from "react";
import tw from "tailwind-styled-components";

export default function Menu() {
  return (
    <MenuContainer>
      <MenuBtn>About</MenuBtn>
      <MenuBtn>Project</MenuBtn>
      <MenuBtn>Skills</MenuBtn>
    </MenuContainer>
  );
}

const MenuContainer = tw.div`
w-MenuW h-onePage bg-Sub1 text-white flex flex-col
items-start cursor-pointer
`;

const MenuBtn = tw.button`
w-BtnW h-BtnH font-bold text-xl text-NomalD
hover:text-white
`;
