import React from "react";
import { loadImg } from "../assets/images";
import tw from "tailwind-styled-components";

export default function About() {
  return (
    <>
      <AboutMainConatiner className="About" id="about">
        <MainProfile>
          <ProfileImg src={loadImg.Profile} alt="ProfilePic" />
          <div className="Introduce">
            <div className="text-3xl font-bold border-b-2 border-solid w-fit border-Main my-5">
              신은진
            </div>
            <div className="Comment my-2">
              <p>
                안녕하세요! <b>끊임없이 걸어가는 프론트엔드 개발자</b>{" "}
                신은진입니다.
              </p>
              {/* <p>ㅇㅇㅇ하고 있습니다</p> */}
            </div>
            <div className="DescriptionContainer">
              <div className="DescList">
                1️⃣ 트렌드를 파악하는 개발자로서{" "}
                <b>새로운 과제를 흥미롭게 받아들이며, 배움에 열려있는</b>{" "}
                개발자가 되고자 합니다.
                <P />
                2️⃣ 혼자 일하지 않습니다. 그렇기 때문에 팀으로 함께 일하는
                동료들이
                <b>협업하고 싶어하는 사람</b>이 되고자 합니다.
                <P />
                3️⃣ 끊임없이 <b>학습하고</b>, 끊임없이 <b>받아들이며</b>,
                끊임없이 <b>노력하겠습니다</b>.
                <P />
                {/* &nbsp; ~~에서 ~~한 경험이 있습니다 <b>강조</b>~~하는 것을 배웠습니다 */}
              </div>
            </div>
          </div>
        </MainProfile>
        <ContactConatiner className="contact">
          {/* <button className="Resume" href="/resume.pdf" target="_blank" aria-label="resume-button">
            Resume
          </button> */}
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
        </ContactConatiner>
      </AboutMainConatiner>
    </>
  );
}

const AboutMainConatiner = tw.div`
w-3/4 h-auto mx-auto my-5 p-10  bg-gray-300 
`;

const ProfileImg = tw.img`
w-60 h-60 bg-yellow-100 
`;

const MainProfile = tw.div` 
flex gap-5`;

const ContactConatiner = tw.div`
text-right mr-40
`;

const ImgBtn = tw.img`
w-16 h-16 bg-white p-2 rounded-md 
border-solid border shadow border-NomalD mx-2`;

const P = tw.p`
mb-2`;
