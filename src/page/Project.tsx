import React, { ReactNode } from "react";
import tw from "tailwind-styled-components";
import ProjectContent from "./ProjectContent";

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
      <div>
        {img && JSON.parse(img).map((src: string) => <img src={src} alt={src} key={src} />)}
      </div>
      <div className="Container">
        <h2>{title}</h2>
        <div>{date}</div>
        <div>{children}</div>
        <div className="ModalDesc">
          <div className="modalContainer">modalContent={modalContent}</div>
        </div>
        <hr />
        <div className="descTitle">간단 설명</div>
        <div className="descContent">{desc}</div>
        <div className="repo">
          <a href={repository}>{repository}</a>
        </div>
        {posting && (
          <>
            <div className="descTItle">회고</div>
            <div className="descContent">
              <a href={posting}>{posting}</a>
            </div>
          </>
        )}
        <div className="descTitle">FE Skill</div>
        <div className="descContent">{frontend}</div>
        {backend && (
          <>
            <div className="descTitle">BE Skill</div>
            <div className="descContent">{backend}</div>
          </>
        )}
      </div>
    </div>
  );
}
