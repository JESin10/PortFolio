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
      <div className="w-full h-full my-8">
        {projectData.length > 0 &&
          projectData.map((data: ProjectProps, index: number) => (
            <ProjectContainer key={index}>
              <CategoryTitle>{data.projectscale}</CategoryTitle>
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
                <div id="MainDesc" className="my-auto w-[40%] sm:w-full ">
                  <div key={index} className="font-bold text-2xl mt-3 mr-3">
                    {data.title}
                  </div>
                  <div
                    key={data.date}
                    className="ProjectDate mt-1 mb-8 sm:mb-5 sm:text-xs text-sm"
                  >
                    {data.date}
                  </div>
                  <div className="sm:flex sm:gap-3 sm:w-fit">
                    <Linkdiv id="repo">
                      <a
                        href={data.link.github}
                        target="_blank"
                        rel="noreferrer"
                      >
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
                  <div className="FeatureContainer inline-flex mb-2">
                    <p className="my-2">
                      <FaTools />
                    </p>
                    <div
                      id="featureContainer"
                      key={data.id}
                      className="ml-2 w-fit sm:text-xs leading-[180%]"
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
              <div id="Contents-Container" className="mx-4 sm:mx-0">
                <SubTitle>FE Skill</SubTitle>
                <ContentTag id="FE-skill">{data.skill.fe_skill}</ContentTag>
                <br />
                {data.skill.be_skill && (
                  <>
                    <SubTitle>BE Skill</SubTitle>
                    <ContentTag id="BE-skill">{data.skill.be_skill}</ContentTag>
                    <br />
                  </>
                )}
                <SubTitle className="descTitle">Description</SubTitle>
                <div className="my-2">
                  {data.desc.map((descItem: any, descIndex: number) => (
                    <div
                      key={descIndex}
                      className="text-lg mx-8 my-4 sm:mx-2 sm:text-sm sm:my-2"
                    >
                      {HtmlStyle(descItem.content)}
                    </div>
                  ))}
                  <div className="sm:h-2 h-4" id="space" />
                </div>
              </div>
            </ProjectContainer>
          ))}
      </div>
    </ProjectComponent>
  );
}

const ProjectComponent = tw.div`
  w-full md:w-11/12 mx-auto px-2

  dark:text-white
`;

const ProjectContainer = tw.div`
  rounded-[70px] px-6 my-24 py-16
  bg-white hover:shadow-lg
  sm:my-10

  dark:bg-transparent
  dark:border-solid dark:border-2 dark-border-white
`;

const ComponentTitle = tw.div`
  font-bold text-3xl w-full mb-4 p-2
  border-solid border-b-4 border-primary-Navy
  dark:border-secondary-LightGray
  
`;

const CategoryTitle = tw.div`
  w-fit px-3 py-2 my-4 mx-4 
  font-bold text-base bg-primary-Navy/80 text-white rounded-3xl
  sm:text-base sm:my-2

  dark:bg-primary-Yellow_Highlight dark:text-secondary-DarkNavy
  `;

const SubTitle = tw.div`
  font-bold text-base px-3 py-2 my-8 rounded-3xl
  bg-primary-Navy/80 text-white w-fit
  sm:text-sm sm:my-3

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


`;

const ProjectsContainer = tw.div`
  flex items-start flex-row 
  sm:flex sm:flex-col
`;

const ContentTag = tw.span`
  my-3 mx-8 font-semibold inline-flex
  sm:mx-2 sm:text-sm sm:my-2
`;

const LinkContainer = tw.div`flex items-center space-x-2 dark:text-white dark:hover:text-primary-Yellow_Highlight`;
const Linkdiv = tw.div`mb-2 hover:underline text-lg sm:text-xs `;
