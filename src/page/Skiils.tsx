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
            <li> ◻︎ 1</li>
            <li> ◻︎ 2</li>
            <li> ◻︎ 3</li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox">
          <SkillTitle className="JS">JavaScript</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ 1</li>
            <li> ◻︎ 2</li>
            <li> ◻︎ 3</li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox">
          <SkillTitle className="TS">TypeScript</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ 1</li>
            <li> ◻︎ 2</li>
            <li> ◻︎ 3</li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
      </SkillWrapper>
      <SkillWrapper className="SkillWrapper">
        <SkillBox className="SkillBox">
          <SkillTitle className="Redux">Redux</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ 1</li>
            <li> ◻︎ 2</li>
            <li> ◻︎ 3</li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox">
          <SkillTitle className="React-query">React-query</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ 1</li>
            <li> ◻︎ 2</li>
            <li> ◻︎ 3</li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox ">
          <SkillTitle className="Css">Css</SkillTitle>
          <SkillContentBox>
            <li> ◻︎ 1</li>
            <li> ◻︎ 2</li>
            <li> ◻︎ 3</li>
          </SkillContentBox>
        </SkillBox>
        {/* - - - - - - - */}
      </SkillWrapper>
    </Skill>
  );
}

const Skill = tw.div`
p-10 w-3/4 mx-auto bg-green-100
`;

const Title = tw.div`
font-bold text-3xl
`;

const SubTitle = tw.div`
w-fit h-auto p-3 rounded-2xl my-2
bg-Main text-Hightlight font-bold
`;

const SkillWrapper = tw.div`
grid grid-cols-3 gap-3
mb-4
`;

// grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]  sm:gap-7 md:gap-7 lg:gap-7

const SkillBox = tw.div`
w-SkillBoxW h-SkillBoxH border-2 rounded-md border-gray-300 border-solid 
hover:border-Main hover:bg-gray-100 p-6
`;

const SkillTitle = tw.div`
font-bold text-xl text-Main
`;

const SkillContentBox = tw.ul`
mt-3
`;
