import React from "react";
import tw from "tailwind-styled-components";
import Project from "./Project";
import { loadImg } from "../assets/images";

export default function ProjectContent() {
  return (
    <ProjectPage className="Projects" id="project">
      <Title className="Title">Project</Title>
      <CategoryTitle className="title my-2"># 개인프로젝트 </CategoryTitle>
      <Project
        img={JSON.stringify([loadImg.PF1, loadImg.PF2, loadImg.PF3])}
        title="개인포트폴리오 사이트"
        date="2023.07.09 - 2023.07.16"
        desc="개인 포트폴리오사이트입니다."
        frontend="React, TypeScript Tailwind, Styled-components"
        backend={null}
        repository="https://github.com/JESin10/PortFolio"
        deployment="https://portfolio-topaz-phi-92.vercel.app"
        posting="https://velog.io/@jin_s/WIL-23.07.16"
        modalContent={null}
        feature="개인정보제공, 프로젝트 내역, 스킬"
      />
      <DescriptionConatiner>
        ◻︎ 보여주고자 하는 단락별로 컴포넌트로 분리하여 구성하였으며
        <Em> typescript와 tailwind</Em> 사용에 익숙해지기 위한 목적으로
        구현하였습니다.
        <P />
        ◻︎ 다양한 기기에서도 접근성을 높이고자
        <Em> 반응형을 적용</Em>하였으며, <Em>dark mode에 대한 설정을 추가</Em>
        하여 사용자의 UX를 높이고자 하였습니다.
        <P />
        ◻︎ <Em>Customizing과 유지보수</Em>를 위해 Tailwind를 사용,
        Styled-components를 함께 사용해 <Em>가독성을 향상</Em>시키고
        <Em> 재사용성</Em>을 살려 구성하였습니다.
        <P />
        {/* ◻︎ 초기렌더링에 많은 정보가 들어오는 페이지이므로 제공하고자하는 정보를
        <Em> Data 파일로 작성 후, 해당 데이터를 호출</Em>하는 방식으로
        수정하였습니다. */}
      </DescriptionConatiner>
      {/* - - - - - - - - - - - - - */}
      <hr />
      <CategoryTitle className="title my-2"> # 팀프로젝트</CategoryTitle>
      <Project
        img={JSON.stringify([
          loadImg.PP1,
          loadImg.PP2,
          loadImg.PP3,
          loadImg.PP4,
        ])}
        title="PetPlace"
        date="2023.03.10 - 2023.04.20"
        desc="유저는 검색, 필터링하여 정보를 얻고 사업자는 반려동물에 관한 업체(병원,미용,카페)를 등록하여 관리하는 웹페이지 (위치기반정보제공 서비스)"
        frontend="React, JavaScript, React-query, SSE, Axois, Styled-components, js/react-cookie, Skeleton"
        backend="Java, SpringBoot, SpringSecurity, MySQL, EC2, AS3, Linux, Ubuntu"
        repository="https://github.com/TeamPetPlace/FE"
        deployment="https://fe-fawn.vercel.app"
        posting="https://velog.io/@jin_s/WIL-23.04.21"
        modalContent={null}
        feature="위치정보제공, 키워드검색, 근거리순/후기순/인기순 정렬, 사업체등록/수정/삭제, 댓글작성/수정/삭제, 댓글알림"
      />
      <DescriptionConatiner>
        ◻︎ 유저관리의 경우 <Em>소셜로그인</Em>은 물론, 보안을 위해{" "}
        <Em>JWT Token</Em>을 기반으로 유저를 관리 하였습니다.
        <P />
        ◻︎ 위치기반 서비스임에 중점을 두고, <Em>kakaoMap</Em>을 사용해
        위치정보를 불러온 후, 직선거리 계산을 이용해 근거리순을 제공하였습니다.
        <P />
        ◻︎ 사업자와 유저의 소통을 위해 <Em>단방향 통신인 SSE</Em>를 활용해
        실시간 알림기능을 제공하였습니다.
        <P />
        ◻︎ <Em>웹 사이트 성능 최적화</Em>를 통해 Lighthouse Perfomance점수를
        73점에서 97점으로, Accessability 점수를 68점에서 87점으로
        향상시켰습니다.
        <p /> 또한 <Em>React.lazy와 Suspense를 활용해</Em> 초기 렌더링 속도를
        28.5% 감소 시켰습니다.(0.7s → 0.5s)
      </DescriptionConatiner>
    </ProjectPage>
  );
}

const ProjectPage = tw.div`
w-3/4 h-auto p-10 mx-auto
`;
const Em = tw.span`
  font-bold text-blue-700
`;

const P = tw.p`
  mb-2
`;

const Title = tw.div`
font-bold text-3xl
`;

const CategoryTitle = tw.div`
font-bold text-2xl bg-Main text-white w-fit p-2 rounded-2xl`;

const DescriptionConatiner = tw.div`mb-5`;
