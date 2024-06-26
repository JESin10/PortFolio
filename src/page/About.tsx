import { loadImg } from "../assets/images";
import tw from "tailwind-styled-components";
import { IoDocumentAttach, IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";

export default function About() {
  return (
    <AboutMain id="about">
      <Title className="Title">About</Title>
      <FullContainer className="About">
        {/* <div className="IntroduceContainer mx-auto"> */}
        <InfoContainer className="Introduce">
          <div className="flex justify-between ">
            <ProfileImg src={loadImg.Profile} alt="ProfilePic" />
            <div className="flex-col w-full px-2 h-full my-auto">
              <Namediv>신은진</Namediv>
              <ContactContainer className="contact">
                <div className="flex-col w-2/3 space-y-4">
                  <InformationBtn
                    aria-label="resume-button"
                    title="Notion-Resume"
                  >
                    <a
                      className="flex space-x-3"
                      href="https://jin29.notion.site/JIN-42b3553e77554948b564f2f93e62a4cb?pvs=4"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="resume-link"
                    >
                      <IoDocumentAttach size={"22px"} />
                      <p>이력서</p>
                      {/* <BtnImg src={loadImg.Resume} alt="Resume" /> */}
                    </a>
                  </InformationBtn>
                  {/* <div>내의 요소인 title을 활용하면 마우스 오버시 title이 나타나게 된다 */}
                  <InformationBtn aria-label="email-button" title="Mail">
                    <a
                      className="flex space-x-3"
                      href="mailto:shinej1029@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="email-link"
                    >
                      {/* <FaEnvelope size="50px" /> */}
                      <IoMail size={"22px"} />
                      <p className="sm:hidden inline-flex flex-wrap">
                        shinej1029@gmail.com
                      </p>
                      <p className="mtoxl:hidden sm:visible">Mail </p>

                      {/* <BtnImg src={loadImg.Email} alt="Mail" /> */}
                    </a>
                  </InformationBtn>
                </div>
                <div className="flex-col w-1/2 space-y-4">
                  <InformationBtn aria-label="github-button">
                    <a
                      className="flex space-x-3"
                      href="https://github.com/JESin10"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="github-link"
                    >
                      {/* <FaGithubSquare size="50px" /> */}
                      <IoLogoGithub size={"22px"} />
                      <p>@JESin10</p>
                      {/* <BtnImg src={loadImg.Github} alt="Github" title="Github" /> */}
                    </a>
                  </InformationBtn>
                  <InformationBtn aria-label="blog-button">
                    <a
                      className="flex space-x-3"
                      href="https://velog.io/@jin_s/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="blog-link"
                    >
                      <SiVelog size={"22px"} />
                      <p>@jin_s</p>
                      {/* <BtnImg src={loadImg.Blog} alt="Velog" title="Velog" /> */}
                    </a>
                  </InformationBtn>
                </div>
              </ContactContainer>
            </div>
          </div>
          <div>
            <div className="Comment my-2 sm:hidden">
              <P className="text-base sm:text-md">
                끊임없이 걸어가는 프론트엔드 개발자 신은진입니다.
              </P>
            </div>
            <div className="Comment my-2 mtoxl:hidden sm:visibility">
              <P className="text-base">
                끊임없이 걸어가는 프론트엔드 개발자 신은진입니다.
              </P>
            </div>
            <div className="DescriptionContainer">
              <div className="DescList my-4 text-sm flex-col space-y-4">
                <p>
                  트렌드를 파악하는 개발자로서 새로운 과제를 흥미롭게
                  받아들이며, 문제 해결을 두려워하지 않는 개발자가 되고자
                  합니다.
                </p>
                <p>
                  함께 일하는 동료들에게 의지가 될 수 있고, 협업하고 싶어하는
                  사람이 되고자 합니다.
                </p>
                <p>
                  꾸준하게 학습하고, 받아들이는 자세를 항상 지니며 , 끊임없이
                  노력하겠습니다.
                </p>
                <p>
                  다양한 사회경험을 바탕으로 원활한 커뮤니케이션에 자신
                  있습니다.
                </p>
                {/* &nbsp; ~~에서 ~~한 경험이 있습니다 <b>강조</b>~~하는 것을 배웠습니다 */}
              </div>
            </div>
          </div>
        </InfoContainer>
        {/* </div> */}
      </FullContainer>
    </AboutMain>
  );
}

const AboutMain = tw.div`
  w-full md:w-11/12
  mt-TabH mx-auto px-2
  
  dark:text-white
`;

const Title = tw.div`
  font-bold text-3xl w-full mb-4 p-2
  border-solid border-b-4 border-primary-Navy

  dark:border-secondary-LightGray
`;

const FullContainer = tw.div` 
  w-full h-auto flex mx-auto
  sm:flex-col md:gap-2 py-10
  items-center shadow-lg
  bg-white my-14 rounded-[70px]
  
  dark:bg-transparent
`;

const Namediv = tw.div`
  border-solid border-b-2 border-primary-Navy 
  text-xl font-bold 
  my-4 p-2 w-full h-full
  md:hidden

  dark:border-secondary-LightGray

`;

const ProfileImg = tw.img`
  w-40 h-40 m-10 
  lg:w-32 lg:h-32 lg:m-6 sm:hidden

  dark:bg-white dark:rounded-full
`;

const ContactContainer = tw.div`
  my-5 justify-between flex w-full 
`;

const InfoContainer = tw.div`
  w-10/12 mx-auto my-4 flex-col 
`;

// const BtnImg = tw.img`
//   w-full h-full p-2 mx-auto cursor-alias
//   sm:w-10 sm:h-10
// `;

const InformationBtn = tw.div`
  w-full h-8 sm:w-full sm:h-8
  flex px-4 items-center
  cursor-pointer hover:font-bold hover:underline
  dark:hover:text-primary-Yellow_Highlight
`;

const P = tw.p`font-bold`;
const B = tw.span`font-bold bg-primary-Yellow_Highlight dark:text-black`;
