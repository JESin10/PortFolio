import React from "react";
import tw from "tailwind-styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <div>dd</div>© 2023. Shin EunJin. All rights reserved.
    </FooterContainer>
  );
}

const FooterContainer = tw.div`
w-full h-FooterH bg-Nomal text-lg
text-center `;
