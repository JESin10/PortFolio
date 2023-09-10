import { useState } from "react";
import tw from "tailwind-styled-components";

export default function Skiils() {
  return (
    <Skill className="SkillPage" id="skill">
      <Title className="Title">Skill</Title>
      <div className="flex gap-3">
        <SubTitleBtn>FrontEnd</SubTitleBtn>
        <SubTitleBtn>ETC</SubTitleBtn>
      </div>
      <SkillWrapper className="SkillWrapper">
        <SkillBox>
          <SkillTitle className="React">React</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ 컴포넌트 단위의 설계</li>
            <li> ◻︎ 성능 개선 경험</li>
            <li> ◻︎ CSR 방식의 SPA 구축 경험</li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox>
          <SkillTitle className="JS">JavaScript</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ JS를 사용한 개인, 팀 프로젝트 진행</li>
            <li> ◻︎ 기본 문법, ES6 문법을 활용한 개발 경험</li>
            <li> </li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox>
          <SkillTitle className="TS">TypeScript</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ TS를 사용한 개인 프로젝트 진행</li>
            <li> ◻︎ 타입 추론을 활용한 개발 경험</li>
            <li> </li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox>
          <SkillTitle className="Redux">Redux</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ thunk를 사용한 개인프로젝트 진행</li>
            <li> ◻︎ 전역상태관리, 모달 관리 경험</li>
            <li> </li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox>
          <SkillTitle className="React-query">React-query</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ Query를 사용한 팀 프로젝트 진행</li>
            <li> ◻︎ state 값에 따른 페이지네이션, 무한스크롤 관리 경험</li>
            <li> </li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox>
          <SkillTitle className="Css">Css FrameWork</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ TailWind</li>
            <li> ◻︎ Styled-components</li>
            <li> ◻︎ Bootstrap, Skeleton</li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
      </SkillWrapper>
    </Skill>
  );
}

const Skill = tw.div`
w-full md:w-11/12 mx-auto px-2
pb-10
`;

const Title = tw.div`
font-bold text-3xl w-fit mb-4 p-2
border-solid border-b-4 border-Main
`;

const SubTitleBtn = tw.button`
w-fit h-auto p-3 rounded-2xl my-2
bg-Main text-Highlight font-bold
cursor-pointer
`;

const SkillWrapper = tw.div`
grid
sm:flex sm:flex-col
md:grid-cols-2 md:gap-2
lg:grid-cols-2 lg:gap-2
grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-2
mb-4
`;

const SkillBox = tw.div`
w-full p-6 rounded-md
border-2 border-gray-300 border-solid 
hover:border-Main hover:bg-gray-100 
`;

const SkillTitle = tw.div`
font-bold text-xl text-Main
sm:text-sm
`;

const SkillContentBox = tw.ul`mt-3 sm:text-sm`;
