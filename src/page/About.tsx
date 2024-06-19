import { loadImg } from "../assets/images";
import tw from "tailwind-styled-components";

export default function About() {
  return (
    <AboutMain id="about">
      <Title className="Title">About</Title>
      <FullContainer className="About">
        <ProfileImg src={loadImg.Profile} alt="ProfilePic" />
        <div className="IntroduceContainer">
          <InfoContainer className="Introduce">
            <Namediv>신은진</Namediv>
            <div className="Comment my-2 sm:hidden">
              <p className="text-xl sm:text-md">안녕하세요!</p>
              <p>
                <b>끊임없이 걸어가는 프론트엔드 개발자</b> 신은진입니다.
              </p>
            </div>
            <div className="Comment my-2 mtoxl:hidden sm:visibility">
              <p className="text-lg">
                안녕하세요!
                <b> 끊임없이 걸어가는 프론트엔드 개발자</b> 신은진입니다.
              </p>
            </div>
            <div className="DescriptionContainer">
              <div className="DescList my-4">
                ✔️ 트렌드를 파악하는 개발자로서{" "}
                <B>
                  새로운 과제를 흥미롭게 받아들이며, 문제 해결을 두려워하지 않는
                </B>{" "}
                개발자가 되고자 합니다.
                <P />
                ✔️ 함께 일하는 동료들에게{" "}
                <B>의지가 될 수 있고, 협업하고 싶어하는 사람</B>이 되고자
                합니다.
                <P />
                ✔️ 꾸준하게 <B>학습하고</B>,{" "}
                <B>받아들이는 자세를 항상 지니며</B>, 끊임없이{" "}
                <B>노력하겠습니다</B>.
                <P />
                ✔️ 다양한 사회경험을 바탕으로 <B>원활한 커뮤니케이션</B>에 자신
                있습니다. <P />
                {/* &nbsp; ~~에서 ~~한 경험이 있습니다 <b>강조</b>~~하는 것을 배웠습니다 */}
              </div>
            </div>
          </InfoContainer>
          <ContactContainer className="contact">
            <InformationBtn aria-label="resume-button" title="Notion-Resume">
              <a
                href="https://jin29.notion.site/JIN-42b3553e77554948b564f2f93e62a4cb?pvs=4"
                target="_blank"
                rel="noreferrer"
                aria-label="resume-link"
              >
                <BtnImg src={loadImg.Resume} alt="Resume" />
              </a>
            </InformationBtn>
            {/* <div>내의 요소인 title을 활용하면 마우스 오버시 title이 나타나게 된다 */}
            <InformationBtn aria-label="email-button" title="Mail">
              <a
                href="mailto:shinej1029@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="email-link"
              >
                {/* <FaEnvelope size="50px" /> */}
                <BtnImg src={loadImg.Email} alt="Mail" />
              </a>
            </InformationBtn>
            <InformationBtn aria-label="github-button">
              <a
                href="https://github.com/JESin10"
                target="_blank"
                rel="noreferrer"
                aria-label="github-link"
              >
                {/* <FaGithubSquare size="50px" /> */}
                <BtnImg src={loadImg.Github} alt="Github" title="Github" />
              </a>
            </InformationBtn>
            <InformationBtn aria-label="blog-button">
              <a
                href="https://velog.io/@jin_s/"
                target="_blank"
                rel="noreferrer"
                aria-label="blog-link"
              >
                <BtnImg src={loadImg.Blog} alt="Velog" title="Velog" />
              </a>
            </InformationBtn>
          </ContactContainer>
        </div>
      </FullContainer>
    </AboutMain>
  );
}

const AboutMain = tw.div`
  w-full md:w-11/12
  mt-TabH mx-auto px-2
`;

const Title = tw.div`
  font-bold text-3xl w-fit mb-4 p-2
  border-solid border-b-4 border-Main
`;

const FullContainer = tw.div`
  w-full h-auto flex gap-4
  sm:flex-col md:gap-2
  items-center
`;

const Namediv = tw.div`
  border-solid border-b-2 border-primary-Navy 
  text-3xl font-bold 
  my-5 p-2 w-fit
  md:hidden
`;

const ProfileImg = tw.img`
  w-52 h-52 my-auto mx-2 bg-white
  border-solid border-4 border-primary-Navy rounded-full
  md:w-40 md:h-40
  sm:hidden
`;

const ContactContainer = tw.div`text-right mt-5 space-x-1 flex justify-end`;
const InfoContainer = tw.div`w-fit h-auto`;

const BtnImg = tw.img`
  w-14 h-14 p-2 mx-auto cursor-alias
  sm:w-10 sm:h-10
`;

const InformationBtn = tw.div`
  w-16 h-16 sm:w-12 sm:h-12 
  border-solid border shadow rounded-md 
  bg-white border-primary-Gray
  hover:bg-secondary-LightGray/50 flex justify-center items-center
`;

const P = tw.p`mb-2`;
const B = tw.span`font-bold bg-Highlight`;
