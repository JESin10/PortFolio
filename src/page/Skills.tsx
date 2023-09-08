import tw from "tailwind-styled-components";

export default function Skiils() {
  return (
    <Skill className="SkillPage" id="skill">
      <Title className="Title">Skill</Title>
      <div className="flex gap-3">
        <SubTitle className="SubTitle">FrontEnd</SubTitle>
        <SubTitle className="SubTitle">ETC</SubTitle>
      </div>
      <SkillWrapper className="SkillWrapper">
        <SkillBox className="SkillBox">
          <SkillTitle className="React">React</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ 컴포넌트 단위의 설계</li>
            <li> ◻︎ 성능 개선 경험</li>
            <li> ◻︎ CSR 방식의 SPA 구축 경험</li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox">
          <SkillTitle className="JS">JavaScript</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ JS를 사용한 개인, 팀 프로젝트 진행</li>
            <li> ◻︎ 기본 문법, ES6 문법을 활용한 개발 경험</li>
            <li> </li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox">
          <SkillTitle className="TS">TypeScript</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ TS를 사용한 개인 프로젝트 진행</li>
            <li> ◻︎ 타입 추론을 활용한 개발 경험</li>
            <li> </li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        {/* </SkillWrapper> */}
        {/* <SkillWrapper className="SkillWrapper"> */}
        <SkillBox className="SkillBox">
          <SkillTitle className="Redux">Redux</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ thunk를 사용한 개인프로젝트 진행</li>
            <li> ◻︎ 전역상태관리, 모달 관리 경험</li>
            <li> </li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox">
          <SkillTitle className="React-query">React-query</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ Query를 사용한 팀 프로젝트 진행</li>
            <li> ◻︎ state 값에 따른 페이지네이션, 무한스크롤 관리 경험</li>
            <li> </li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox ">
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
px-10 w-3/4 mx-auto pb-10
`;

const Title = tw.div`
font-bold text-3xl w-fit mb-4 p-2
border-solid border-b-4 border-Main
`;

const SubTitle = tw.div`
w-fit h-auto p-3 rounded-2xl my-2
bg-Main text-Highlight font-bold
`;

const SkillWrapper = tw.div`
grid gap-2 
md:grid-cols-2 md:gap-2
lg:grid-cols-2 lg:gap-2
xl:grid-cols-3
xxl:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] xxl:gap-2
mb-4
`;

// grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]  sm:gap-7 md:gap-7 lg:gap-7

const SkillBox = tw.div`
md:w-SkillBoxW2 md:h-auto
lg:w-SkillBoxW1 lg:h-SkillBoxH1
xl:w-SkillBoxW2 xl:h-auto
xxl:w-[20rem]
border-2 rounded-md border-gray-300 border-solid 
hover:border-Main hover:bg-gray-100 p-6
`;

const SkillTitle = tw.div`
font-bold text-xl text-Main
`;

const SkillContentBox = tw.ul`mt-3`;
