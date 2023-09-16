# 개인 포트폴리오 사이트

23.07.09 - 23.07.18

🦋 포트폴리오 URL : <https://jin-portfolio-drab.vercel.app/>

📎 회고 URL : <https://velog.io/@jin_s/WIL-23.09.17>

## 📌 서비스 소개

개인 포트폴리오 용도로 제작된 사이트입니다.

스크롤 다운 형태로 진행하였으며, TypeScript를 기반으로 하였으며, Tailwind CSS framework를 사용하였습니다.

## 📌 기술 스택

FrontEnd: React, Typescript, TailwindCss

Deployment : Vercel

#### 📌 서비스 예시

<details><summary> Desktop Version </summary>

<img width="40%" alt="Portfolio_about" src="https://github.com/JESin10/PortFolio/assets/119720123/ad3197d3-2a24-4a3f-a4b5-3b891645f8eb">
<img width="40%" alt="Portfolio_project" src="https://github.com/JESin10/PortFolio/assets/119720123/cb1c9c4a-4ac1-46b9-a0d6-a4f469e6c418">
<img width="40%" alt="Portfolio_skill" src="https://github.com/JESin10/PortFolio/assets/119720123/20387672-80a6-4b33-9ea6-24914d738992">

</details>

<details><summary> Mobile Version </summary>

<img width="25%" alt="Portfolio_mobile_about" src="https://github.com/JESin10/PortFolio/assets/119720123/f2a47790-6615-4e25-92d8-adc4ad248f3b">
<img width="25%" alt="Portfolio_mobile_project" src="https://github.com/JESin10/PortFolio/assets/119720123/5721ad5f-3c08-4995-a2cb-d729e57375b5">
<img width="25%" alt="Portfolio_mobile_project_2" src="https://github.com/JESin10/PortFolio/assets/119720123/08ace3e3-035a-4c9c-a8c6-f63b361edbac">
<img width="25%" alt="Portfolio_mobile_skill" src="https://github.com/JESin10/PortFolio/assets/119720123/04a06934-2232-4ef5-9f93-7feaf9dddd57">
<img width="25%" alt="Portfolio_mobile_skill2" src="https://github.com/JESin10/PortFolio/assets/119720123/f1775704-d13e-4b71-ba70-095a9765b190">

</details>

## 📌 서비스 구현 상세

✅ UX를 고려해 디자인한 UI

포트폴리오에 적절한 UX/UI를 고려하여 웹 페이지를 디자인하였습니다.

페이지 전환보다는 스크롤다운의 형식이 전체적인 프로젝트를 파악하기 좋다고 생각하였습니다.

또한, 스크롤 다운형식이므로 빠른 이동을 위해 상단에 Navigation Bar를 고정시켜 주제별로 이동이 용이하도록 하였습니다.

✅ Tailwind + Styled-component

스타일의 확장성 및 커스터마이징을 위해 기본적으로는 Tailwind를 사용하였습니다.

다만, 가독성과 컴포넌트 단위의 장점을 살리기위하여 styled-component를 함께 결합한 tailwind-styled-component를 사용했습니다.

✅ 반응형

접근성이 좋은 UX를 위해 반응형 웹사이트로 구현하였습니다.

화면의 크기에 따라 다른 스타일을 부여할 수 있도록 지정한 screen, color 속성을 사용하였습니다.

모바일, 웹은 물론 다양한 기기에 맞게 반응형으로 작용되는 사이트를 구현할 수 있었습니다.

✅ Vercel를 통한 배포

사용이 간편하고 용한 vercel을 이용하여 배포했습니다.

세팅부터 배포까지 진행하며 서비스를 구현하는 전체적인 사이클을 경험할 수 있었습니다.

✅ Typescript

처음으로 프로젝트에 적용해보며 문법에 익숙해질 수 있었습니다.

컴파일 단계에서 에러를 발견했기에 빠른 유지보수가 가능했고,

규모가 큰 서비스일수록 타입스크립트를 사용해야한다는 이유를 체감했습니다.
