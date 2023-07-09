import React from "react";
import tw from "tailwind-styled-components";

export default function Footer() {
  return <FooterContainer>© 2023. JIN. All rights reserved.</FooterContainer>;
}

const FooterContainer = tw.div`
w-full h-FooterH bg-Nomal text-lg
text-center `;
