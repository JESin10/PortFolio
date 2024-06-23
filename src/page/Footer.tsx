import React from "react";
import tw from "tailwind-styled-components";
import { loadImg } from "../assets/images";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="flex-col w-full h-fit item-center ">
        <ButtonContainer>
          <FooterBtn aria-label="email-button" title="Mail">
            <a
              href="mailto:shinej1029@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="email-link"
            >
              <ImgBtn src={loadImg.Email} alt="Mail" />
            </a>
          </FooterBtn>
          <FooterBtn aria-label="github-button" title="Github">
            <a
              href="https://github.com/JESin10"
              target="_blank"
              rel="noreferrer"
              aria-label="github-link"
            >
              <ImgBtn src={loadImg.Github} alt="Github" />
            </a>
          </FooterBtn>
          <FooterBtn aria-label="blog-button" title="Velog">
            <a
              href="https://velog.io/@jin_s/"
              target="_blank"
              rel="noreferrer"
              aria-label="blog-link"
            >
              <ImgBtn src={loadImg.Blog} alt="Velog" />
            </a>
          </FooterBtn>
        </ButtonContainer>
        <p className="sm:text-sm">© 2023. ShinEunJin. All rights reserved.</p>
      </div>
    </FooterContainer>
  );
}

const ButtonContainer = tw.div`
  flex items-center w-fit mx-auto
`;

const FooterBtn = tw.div``;

const FooterContainer = tw.div`
  w-full h-FooterH bg-secondary-LightGray text-md
  text-center font-bold my-auto flex justify-center items-center
`;

const ImgBtn = tw.img`
  w-11 h-11 bg-secondary-LightGray p-2 rounded-md
  border-none m-2 
  sm:w-7 sm:h-7 sm:m-2 sm:p-1
  hover:bg-primary-Gray/50
`;
