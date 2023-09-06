import React, { ReactNode } from "react";
import tw from "tailwind-styled-components";
import Carousel from "../modules/Carousel";
import { loadImg } from "../assets/images";
import { FaInfoCircle, FaTools } from "react-icons/fa";

interface ProjectProps {
  img: string;
  title: string;
  date: string;
  desc: string;
  frontend: string;
  backend: string | null;
  repository: string;
  deployment: string | null;
  posting: string | null;
  children?: ReactNode;
  modalContent: string | null;
  feature: string;
}

export default function Project({
  img,
  title,
  date,
  desc,
  frontend,
  backend,
  repository,
  deployment,
  posting,
  children,
  modalContent,
  feature,
}: ProjectProps) {
  return (
    <div>
      <ProjectContainer className="Container">
        <Carousel>
          {img &&
            JSON.parse(img).map((src: string) => (
              <ProjectImg className="proImg" src={src} alt={src} key={src} />
            ))}
        </Carousel>
        <div className="MainDesc ml-10 my-auto">
          <div className="font-bold text-2xl mt-3 mr-3">{title}</div>
          <div className="ProjectDate mb-8">{date}</div>
          {/* - - - - - - - - - - - - - - */}
          <div className="repo mb-2">
            <a href={repository} target="_blank" rel="noreferrer">
              <div className="flex items-center">
                <Emphasis>
                  <PostIcon src={loadImg.Github} alt="Github" />
                  Github ⏎
                </Emphasis>
              </div>
            </a>
          </div>
          {posting && (
            <>
              <div className="posting mb-2">
                <a href={posting} target="_blank" rel="noreferrer">
                  <div className="flex items-center">
                    <Emphasis>
                      <PostIcon src={loadImg.Blog} alt="Velog" />
                      Blog ⏎
                    </Emphasis>
                  </div>
                </a>
              </div>
            </>
          )}
          {deployment && (
            <>
              <div className="posting mb-2">
                <a href={deployment} target="_blank" rel="noreferrer">
                  <div className="flex items-center">
                    <Emphasis>
                      <PostIcon src={loadImg.Depo} alt="Depoloyment" />
                      Depo ⏎
                    </Emphasis>
                  </div>
                </a>
              </div>
            </>
          )}
          <div className="FeatureContainer inline-flex items-center mb-2">
            <FaTools />
            <div className="featureConatiner ml-2 w-fit">{feature}</div>
          </div>
          <div>{children}</div>
          {modalContent && (
            <div className="ModalDesc inline-flex items-center">
              <FaInfoCircle />
              <div className="modalContainer ml-2">{modalContent}</div>
            </div>
          )}
        </div>
      </ProjectContainer>
      <br />
      <div className="Container">
        <Title className="descTitle">FE Skill</Title>
        <span className="descContent font-semibold">{frontend}</span>
        <br />
        {backend && (
          <>
            <Title className="descTitle">BE Skill</Title>
            <span className="descContent mb-3 font-semibold">{backend}</span>
            <br />
          </>
        )}
        <Title className="descTitle">Description</Title>
        <div className="descContent mb-2">{desc}</div>
      </div>
    </div>
  );
}

const Title = tw.div`
font-bold text-lg mt-3 mr-3 p-1
bg-Main/80 text-white w-fit
`;
const Emphasis = tw.div`
font-bold inline-flex items-center mr-2 text-Main
`;

const ProjectImg = tw.img`
md:w-ImgBoxW md:h-ImgBoxH object-contain
w-auto h-44
`;
// border-solid border-2 rounded-md border-Nomal

const ProjectContainer = tw.div`
flex items-start
`;

const PostIcon = tw.img`w-4 h-4 mr-2`;
