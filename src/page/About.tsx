import React from "react";
import { loadImg } from "../assets/images";
import tw from "tailwind-styled-components";

export default function About() {
  return (
    <>
      <AboutMainConatiner className="About" id="about">
        <ProfileImg src={loadImg.Profile} alt="ProfilePic" />
        <div className="IntroduceConatiner">
          <InfoContainer className="Introduce">
            <div className="text-3xl font-bold border-b-2 p-2 border-solid w-fit border-Main my-5">
              신은진
            </div>
            <div className="Comment my-2">
              <p className="text-lg">
                안녕하세요! <b>끊임없이 걸어가는 프론트엔드 개발자</b> 신은진입니다.
              </p>
              {/* <p>ㅇㅇㅇ하고 있습니다</p> */}
            </div>
            <div className="DescriptionContainer">
              <div className="DescList my-4">
                ✔️ 트렌드를 파악하는 개발자로서{" "}
                <B>새로운 과제를 흥미롭게 받아들이며, 배움에 열려있는</B> 개발자가 되고자 합니다.
                <P />
                ✔️ 혼자 일하지 않습니다. 그렇기 때문에 팀으로 함께 일하는 동료들이{" "}
                <B>협업하고 싶어하는 사람</B>이 되고자 합니다.
                <P />
                ✔️ 끊임없이 <B>학습하고</B>, 끊임없이 <B>받아들이며</B>, 끊임없이{" "}
                <B>노력하겠습니다</B>.
                <P />
                ✔️ 다양한 사회경험을 바탕으로 <B>원활한 커뮤니케이션</B>에 자신있습니다. <P />
                {/* &nbsp; ~~에서 ~~한 경험이 있습니다 <b>강조</b>~~하는 것을 배웠습니다 */}
              </div>
            </div>
          </InfoContainer>
          <ContactConatiner className="contact">
            <button aria-label="resume-button">
              <a
                href="https://jin29.notion.site/JIN-65989559a37b476a87c7da0d0690d840?pvs=4"
                target="_blank"
                rel="noreferrer"
                aria-label="resume-link"
              >
                <BtnImg src={loadImg.Resume} alt="Resume" />
              </a>
            </button>
            <button aria-label="email-button">
              <a
                href="mailto:shinej1029@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="email-link"
              >
                {/* <FaEnvelope size="50px" /> */}
                <BtnImg src={loadImg.Email} alt="Mail" />
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
                <BtnImg src={loadImg.Github} alt="Github" />
              </a>
            </button>
            <button aria-label="blog-button">
              <a
                href="https://velog.io/@jin_s/"
                target="_blank"
                rel="noreferrer"
                aria-label="blog-link"
              >
                <BtnImg src={loadImg.Blog} alt="Velog" />
              </a>
            </button>
          </ContactConatiner>
        </div>
      </AboutMainConatiner>
    </>
  );
}

const AboutMainConatiner = tw.div`
w-3/4 h-auto mx-auto my-5 p-10 flex gap-5
`;

const ProfileImg = tw.img`
w-60 h-60 my-auto border-solid border-4 border-Main rounded-full`;

const ContactConatiner = tw.div`
text-right mt-5
`;

const BtnImg = tw.img`
w-16 h-16 bg-white p-2 rounded-md 
border-solid border shadow border-NomalD mx-2`;

const InfoContainer = tw.div`
w-fit h-auto ml-5`;

const P = tw.p`mb-2`;

const B = tw.span`font-bold bg-Hightlight`;
