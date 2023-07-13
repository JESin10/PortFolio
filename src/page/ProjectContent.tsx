import React from "react";
import tw from "tailwind-styled-components";
import Project from "./Project";

export default function ProjectContent() {
  return (
    <div className="Projects">
      <Title className="Title">Project</Title>
      <div className="title"> 팀프로젝트</div>
      <Project
        img={JSON.stringify(["", ""])}
        title="개인포트폴리오 사이트"
        date="2023.00.00 - 2023.00.00"
        desc="개인포트폴리오사이트입니다"
        frontend="React, TypeScript Tailwind, Styled-components"
        backend={null}
        repository="https://github.com/JESin10/PortFolio"
        deployment="Vercel"
        posting="https://velog.io/@jin_s/WIL-23.07.16"
        modalContent="11"
      />
      <div>
        ㅇㅇ가 중요하기에 <Emphasis>ㅇㅇ</Emphasis>를 사용해 <Emphasis>SSR 페이지</Emphasis>를
        구현했습니다. <Emphasis>Typescript</Emphasis>를 사용하며 타입 삽입에 익숙해졌고, 컴파일
        단계에서 에러를 처리할 수 있었습니다.
        <Spaces />
        <Emphasis>웹 사이트 성능 최적화</Emphasis>를 통해 Lighthouse Perfomance점수를 00점에서
        00점으로, Accessability 점수를 00점에서 00점으로 향상시켰습니다. 또한{" "}
        <Emphasis>초기 렌더링 속도를 50% 감소</Emphasis>
        시켰습니다.
      </div>
      <div className="title"> 개인프로젝트</div>
    </div>
  );
}
const Emphasis = tw.span`
  text-red-500 font-bold  
`;

const Spaces = tw.p`
  mb-3
`;

const Title = tw.div`
font-bold text-3xl
`;
