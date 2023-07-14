import React, { ReactNode } from "react";
import tw from "tailwind-styled-components";

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
  modalContent: string;
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
}: ProjectProps) {
  return (
    <div>
      <div className="Container">
        <div>
          {img &&
            JSON.parse(img).map((src: string) => (
              <ProjectImg src={src} alt={src} key={src} />
            ))}
        </div>
        <Title>{title}</Title>
        <div>{date}</div>
        <div className="repo">
          <a href={repository}>
            <Emphasis>Github</Emphasis> {repository}
          </a>
        </div>
        {posting && (
          <>
            <div className="posting">
              <a href={posting}>
                {" "}
                <Emphasis>Blog</Emphasis> {posting}
              </a>
            </div>
          </>
        )}
        {deployment && (
          <>
            <div className="posting">
              <a href={deployment}>
                <Emphasis>Depo</Emphasis> {deployment}
              </a>
            </div>
          </>
        )}
      </div>
      <br></br>
      <div className="Container">
        <div>{children}</div>
        <div className="ModalDesc">
          <div className="modalContainer">{modalContent}</div>
        </div>
        <hr />
        <Title className="descTitle">FE Skill</Title>
        <div className="descContent">{frontend}</div>
        {backend && (
          <>
            <div className="descTitle">BE Skill</div>
            <div className="descContent">{backend}</div>
          </>
        )}
        <Title className="descTitle">Description</Title>
        <div className="descContent">{desc}</div>
      </div>
    </div>
  );
}

const Title = tw.div`
  font-bold text-xl
`;
const Emphasis = tw.span`
font-bold  
`;

const ProjectImg = tw.img`
w-ImgBoxW h-ImgBoxH object-contain
border-solid border-2 rounded-md border-gray-300

`;
