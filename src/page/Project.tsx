import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Carousel from "../modules/Carousel";
import { loadImg } from "../assets/images";
import { FaTools } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { ProjectProps } from "../assets/interface";
import { MyProjectData } from "../assets/Rtd";
import HtmlStyle from "../modules/HtmlStyle";

export default function Project() {
  // const { Projects } = MyData;
  const [projectData, setProjectData] = useState<ProjectProps[]>([]);

  useEffect(() => {
    ProjectDatafetch();
  }, []);

  const ProjectDatafetch = async () => {
    const res = await MyProjectData();
    // console.log(res);
    setProjectData(res);
    return res;
  };

  return (
    <ProjectComponent id="project">
      <ComponentTitle className="Title">Project</ComponentTitle>
      {projectData.length > 0 &&
        projectData.map((data: ProjectProps, index: number) => (
          <ProjectContainer key={index}>
            <CategoryTitle className="title">
              # {data.projectscale}
            </CategoryTitle>
            <ProjectsContainer className="Container">
              <Carousel>
                {data.img &&
                  data.img.map(
                    (images: string | undefined, imageIndex: any) => (
                      <ProjectImg
                        key={imageIndex}
                        className="proImg"
                        src={images}
                      />
                    )
                  )}
              </Carousel>
              <div className="MainDesc stom:ml-0 mtoxl:ml-10 my-auto">
                <div key={index} className="font-bold text-2xl mt-3 mr-3">
                  {data.title}
                </div>
                <div
                  key={data.date}
                  className="ProjectDate mt-1 mb-8 sm:mb-5 sm:text-xs"
                >
                  {data.date}
                </div>
                <div className="sm:flex sm:gap-3 sm:w-fit">
                  <Linkdiv id="repo">
                    <a href={data.link.github} target="_blank" rel="noreferrer">
                      <LinkContainer>
                        <IoLogoGithub />
                        <Emphasis>Github ⏎</Emphasis>
                      </LinkContainer>
                    </a>
                  </Linkdiv>
                  {data.link.blog && (
                    <>
                      <Linkdiv id="posting">
                        <a
                          href={data.link.blog}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <LinkContainer>
                            <SiVelog />
                            <Emphasis>Blog ⏎</Emphasis>
                          </LinkContainer>
                        </a>
                      </Linkdiv>
                    </>
                  )}
                  {data.link.depo && (
                    <>
                      <Linkdiv id="posting">
                        <a
                          href={data.link.depo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <LinkContainer>
                            <TbWorld />
                            <Emphasis>Depo ⏎</Emphasis>
                          </LinkContainer>
                        </a>
                      </Linkdiv>
                    </>
                  )}
                </div>
                <div className="FeatureContainer inline-flex items-center mb-2">
                  <FaTools />
                  <div
                    key={data.id}
                    className="featureContainer ml-2 w-fit sm:text-sm"
                  >
                    {data.summary}
                  </div>
                </div>
                {/* <div>{children}</div>
                {modalContent && (
                  <div className="ModalDesc inline-flex items-center">
                    <FaInfoCircle />
                    <div className="modalContainer ml-2">{modalContent}</div>
                  </div>
                )}*/}
              </div>
            </ProjectsContainer>
            <div className="Container">
              <Title className="descTitle">FE Skill</Title>
              <span className="descContent font-semibold">
                {data.skill.fe_skill}
              </span>
              <br />
              {data.skill.be_skill && (
                <>
                  <Title className="descTitle">BE Skill</Title>
                  <span className="descContent mb-3 font-semibold">
                    {data.skill.be_skill}
                  </span>
                  <br />
                </>
              )}
              <Title className="descTitle">Description</Title>
              <div className="my-2">
                {data.desc.map((descItem: any, descIndex: number) => (
                  <div key={descIndex} className="mb-2 text-lg sm:text-sm">
                    {HtmlStyle(descItem.content)}
                  </div>
                ))}
                <div className="sm:h-2 h-4" id="space" />
              </div>
            </div>
          </ProjectContainer>
        ))}
    </ProjectComponent>
  );
}

const ProjectComponent = tw.div`
  w-full md:w-11/12 mx-auto px-2

  dark:text-white
`;

const ProjectContainer = tw.div`
  rounded-md p-6 border-black border-2 border-solid my-6
  bg-white hover:shadow-lg

  dark:bg-[#373737]
`;

const ComponentTitle = tw.div`
  font-bold text-3xl w-fit mb-4 p-2
  border-solid border-b-4 border-primary-Navy
  
  dark:border-secondary-LightGray
`;

const CategoryTitle = tw.div`
  w-fit p-2 my-4
  font-bold text-2xl bg-primary-Navy text-white rounded-2xl
  sm:text-base sm:my-2

  dark:bg-primary-Yellow_Highlight dark:text-secondary-DarkNavy
  `;

const Title = tw.div`
  font-bold text-lg mt-3 mr-3 p-1
  bg-primary-Navy/80 text-white w-fit

    dark:bg-secondary-LightNavy dark:text-white

`;

const Emphasis = tw.div`
  font-bold inline-flex items-center mr-2 text-primary-Navy
  dark:text-white dark:hover:text-primary-Yellow_Highlight
`;

const ProjectImg = tw.img`
  object-contain z-40 items-center
  h-ImgBoxH 
  lg:h-[200px] lg:w-[250px]
  md:h-auto md:w-fit
  sm:h-auto sm:w-fit
  bg-secondary-LightGray/50

  dark:bg-primary-Gray
`;

const ProjectsContainer = tw.div`
  flex items-start flex-row
  sm:flex sm:flex-col 
`;

const LinkContainer = tw.div`flex items-center space-x-2 dark:text-white dark:hover:text-primary-Yellow_Highlight`;
const Linkdiv = tw.div`mb-2 hover:underline text-lg sm:text-xs `;
