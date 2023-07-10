import React from "react";

export default function About() {
  return (
    <>
      <div className="About">
        <img src="" alt="ProfilePic" />
        <div className="Introduce">
          <div> 이름 </div>
          <div className="Comment">
            <p>
              안녕하세요! <b>ㅇㅇ 개발자</b> ㅇㅇㅇ입니다.
            </p>
            <p>ㅇㅇㅇ하고 있습니다</p>
          </div>
          <div className="DescriptionContainer">
            <div className="DescList">
              &nbsp; ~~에서 ~~한 경험이 있습니다 <b>강조</b>~~하는 것을 배웠습니다
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
