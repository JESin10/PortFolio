import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Carousel from "../modules/Carousel";
import { loadImg } from "../assets/images";
import { FaTools } from "react-icons/fa";
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
            <CategoryTitle className="title my-4">
              # {data.projectscale}
            </CategoryTitle>
            <ProjectsContainer className="Container">
              <Carousel>
                {data.img &&
                  data.img.map(
                    (images: string | undefined, imgageIndex: any) => (
                      <ProjectImg
                        key={imgageIndex}
                        className="proImg"
                        src={images}
                      />
                    )
                  )}
              </Carousel>
              <div className="MainDesc mtoxl:ml-10 my-auto">
                <div key={index} className="font-bold text-2xl mt-3 mr-3">
                  {data.title}
                </div>
                <div key={data.date} className="ProjectDate mt-1 mb-8 sm:mb-5">
                  {data.date}
                </div>
                <div className="sm:flex sm:gap-3 sm:w-fit">
                  <Linkdiv id="repo">
                    <a href={data.link.github} target="_blank" rel="noreferrer">
                      <div className="flex items-center">
                        <Emphasis>
                          <PostIcon src={loadImg.Github} alt="Github" />
                          Github ⏎
                        </Emphasis>
                      </div>
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
                          <div className="flex items-center">
                            <Emphasis>
                              <PostIcon src={loadImg.Blog} alt="Velog" />
                              Blog ⏎
                            </Emphasis>
                          </div>
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
                          <div className="flex items-center">
                            <Emphasis>
                              <PostIcon src={loadImg.Depo} alt="Depoloyment" />
                              Depo ⏎
                            </Emphasis>
                          </div>
                        </a>
                      </Linkdiv>
                    </>
                  )}
                </div>
                <div className="FeatureContainer inline-flex items-center mb-2">
                  <FaTools />
                  <div key={data.id} className="featureConatiner ml-2 w-fit">
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
`;

const ComponentTitle = tw.div`
  font-bold text-3xl w-fit mb-4 p-2
  border-solid border-b-4 border-primary-Navy
`;

const CategoryTitle = tw.div`
  font-bold text-2xl bg-Main text-white w-fit p-2 rounded-2xl`;

const Title = tw.div`
  font-bold text-lg mt-3 mr-3 p-1
  bg-primary-Navy/80 text-white w-fit
`;

const Emphasis = tw.div`
  font-bold inline-flex items-center mr-2 text-primary-Navy
`;

const ProjectImg = tw.img`
object-contain z-40 items-center
  h-ImgBoxH
  lg:h-[200px] lg:w-[250px]
  md:h-[200px] md:w-[300px]
  sm:h-[100px]
  bg-secondary-LightGray/50
`;

const ProjectsContainer = tw.div`
  flex items-start flex-row
  sm:flex sm:flex-col
`;

const PostIcon = tw.img`w-4 h-4 mr-2`;
const Linkdiv = tw.div`mb-2 hover:underline text-lg sm:text-sm`;

const ProjectContainer = tw.div`
  rounded-md p-6 border-black border-2 border-solid my-6
  bg-white
  hover:shadow-lg
`;
