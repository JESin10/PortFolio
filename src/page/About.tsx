import React from "react";
import { FaGithubSquare, FaEnvelope } from "react-icons/fa";

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
        <div className="contact">
          {/* <button className="Resume" href="/resume.pdf" target="_blank" aria-label="resume-button">
            Resume
          </button> */}
          <div className="ButtonContainer">
            <button aria-label="email-button">
              <a href="mailto:shinej1029@gmail.com" target="_blank" aria-label="email-link">
                <FaEnvelope size="50px" />
              </a>
            </button>
            <button aria-label="github-button">
              <a href="https://github.com/JESin10" target="_blank" aria-label="github-link">
                <FaGithubSquare size="50px" />
              </a>
            </button>
            <button aria-label="blog-button">
              <a href="https://velog.io/@jin_s/" target="_blank" aria-label="blog-link">
                <img src="src/img/velog.svg" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
