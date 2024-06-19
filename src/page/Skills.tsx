import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { MySkillData } from "../assets/Rtd";
import { Skills } from "../assets/interface";
import HtmlStyle from "../modules/HtmlStyle";

export default function Skiils() {
  const [skillData, setSkillData] = useState<Skills[]>([]);
  const [typeCheck, setTypeCheck] = useState({
    SkillType: "ALL",
  });
  const [buttonActive, setButtonActive] = useState<string>("ALL");

  useEffect(() => {
    SkillDatafetch();
  }, []);

  const SkillDatafetch = async () => {
    const res = await MySkillData();
    // console.log(res);
    setSkillData(res);
    return res;
  };

  const SkillDividingHandler = (
    SkillType: "ALL" | "FE" | "ETC",
    SkillId: "ALL" | "FE" | "ETC"
  ): void => {
    setTypeCheck({ SkillType: SkillType });
    setButtonActive(SkillId);
  };

  console.log(skillData);

  return (
    <Skill className="SkillPage" id="skill">
      <Title className="Title">Skill</Title>
      <div className="flex gap-3">
        <SubTitleBtn
          className="ALL"
          onClick={() => SkillDividingHandler("ALL", "ALL")}
        >
          ALL
        </SubTitleBtn>
        <SubTitleBtn
          className="FE"
          onClick={() => SkillDividingHandler("FE", "FE")}
        >
          FrontEnd
        </SubTitleBtn>
        <SubTitleBtn
          className="ETC"
          onClick={() => SkillDividingHandler("ETC", "ETC")}
        >
          ETC
        </SubTitleBtn>
      </div>
      <SkillWrapper className="SkillWrapper">
        {skillData.length > 0 &&
          skillData.map((item: Skills, index: number) => (
            <SkillBox
              key={index}
              $active={buttonActive === `${item.skillType}`}
            >
              <SkillTitle className={item.skillType}>{item.skill}</SkillTitle>
              <SkillContentBox>
                {item.desc.map((list, ListIndex: number) => (
                  <li className="flex space-x-2" key={ListIndex}>
                    <p>◻︎</p>
                    {/* HtmlStyle이 <div>로 return되기 때문에 해당 스타일의 경우 <p>가 아닌 <span>을 사용해 주어야 한다 */}
                    <span>{HtmlStyle(list)}</span>
                  </li>
                ))}
              </SkillContentBox>
            </SkillBox>
          ))}
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
  border-solid border-b-4 border-primary-Navy
`;

const SubTitleBtn = tw.button`
  w-fit h-auto p-3 rounded-2xl my-2
  font-bold text-primary-Yellow_Highlight bg-primary-Navy
  cursor-pointer
  hover:border-primary-Navy hover:bg-primary-Navy/80
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
  w-full p-6 rounded-md cursor-default bg-white
  border-2 border-secondary-LightGray border-solid 
  hover:border-primary-Navy hover:bg-gray-100 
    ${(props: { $active: boolean }) =>
      props.$active ? "border-4 border-primary-Navy" : ""}
`;

const SkillTitle = tw.div`
  font-bold text-xl text-primary-Navy
  sm:text-sm 
`;

const SkillContentBox = tw.ul`mt-3 sm:text-sm`;
