import React from "react";
import tw from "tailwind-styled-components";
import { loadImg } from "../assets/images";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="ButtonContainer">
        <button aria-label="email-button">
          <a
            href="mailto:shinej1029@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="email-link"
          >
            {/* <FaEnvelope size="50px" /> */}
            <ImgBtn src={loadImg.Email} alt="Mail" />
          </a>
        </button>
        <button aria-label="github-button">
          <a
            href="https://github.com/JESin10"
            target="_blank"
            rel="noreferrer"
            aria-label="github-link"
          >
            {/* <FaGithubSquare size="50px" /> */}
            <ImgBtn src={loadImg.Github} alt="Github" />
          </a>
        </button>
        <button aria-label="blog-button">
          <a
            href="https://velog.io/@jin_s/"
            target="_blank"
            rel="noreferrer"
            aria-label="blog-link"
          >
            <ImgBtn src={loadImg.Blog} alt="Velog" />
          </a>
        </button>
      </div>
      © 2023. ShinEunJin. All rights reserved.
    </FooterContainer>
  );
}

const FooterContainer = tw.div`
w-full h-FooterH bg-Nomal text-lg
text-center font-bold `;

const ImgBtn = tw.img`
w-11 h-11 bg-Nomal p-2 rounded-md 
border-none m-2 `;
