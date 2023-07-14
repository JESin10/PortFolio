import tw from "tailwind-styled-components";

export default function Skiils() {
  return (
    <Skill className="SkillPage" id="skill">
      <Title className="Title">Skill</Title>
      <div className="SubTitle">FrontEnd</div>
      <SkillWrapper className="SkillWrapper">
        <SkillBox className="SkillBox">
          <div className="React">React</div>
          <li> - 1</li>
          <li> - 2</li>
          <li> - 3</li>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox">
          <div className="JS">JavaScript</div>
          <li> - 1</li>
          <li> - 2</li>
          <li> - 3</li>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox">
          <div className="TS">TypeScript</div>
          <li> - 1</li>
          <li> - 2</li>
          <li> - 3</li>
        </SkillBox>
        {/* - - - - - - - */}
      </SkillWrapper>
      <SkillWrapper className="SkillWrapper">
        <SkillBox className="SkillBox">
          <div className="Redux">Redux</div>
          <li> - 1</li>
          <li> - 2</li>
          <li> - 3</li>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox">
          <div className="React-query">React-query</div>
          <li> - 1</li>
          <li> - 2</li>
          <li> - 3</li>
        </SkillBox>
        {/* - - - - - - - */}
        <SkillBox className="SkillBox ">
          <div className="Css">Css</div>
          <li> - 1</li>
          <li> - 2</li>
          <li> - 3</li>
        </SkillBox>
        {/* - - - - - - - */}
      </SkillWrapper>
    </Skill>
  );
}

const Skill = tw.div`

`;

const Title = tw.div`
font-bold text-3xl
`;

const SkillWrapper = tw.div`
grid grid-cols-3 gap-3 sm:gap-7 md:gap-7 lg:gap-7 
`;

// grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]

const SkillBox = tw.div`
w-SkillBoxW h-SkillBoxH border-2 rounded-md border-gray-300 border-solid 
hover:border-Main hover:bg-gray-100 p-6
`;
