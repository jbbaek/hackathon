import React from "react";
import "./modify.css";
import { FaRegCircleUser } from "react-icons/fa6";

export const Modify = () => {
  return (
    <div className="modify">
      <body>
        <nav>
          <div className="container">
            <h1 className="nav-main">마음챙기기</h1>
            <div className="nav-name">
              <div className="nav-log">
                <h1>
                  마이페이지
                  <FaRegCircleUser /> {/*리액트 아이콘 */}
                </h1>
              </div>
              <div className="navname">
                <h4>일기쓰기</h4>
                <h4>무드 트래커</h4>
              </div>
            </div>
          </div>
        </nav>
        <hr></hr>
        <section className="sec">
          <div className="sec-box">
            <h1 className="sec-main">Change my page</h1>
            <div className="sec-img">
              <img
                src={process.env.PUBLIC_URL + "./img/modify.png"}
                alt="modify"
              ></img>
              {/* public 파일에 img폴더에 있는 사진 삽입*/}
            </div>
            <table>
              <tbody>
                <tr>
                  <th className="name">이름</th>
                  <td>이하늘</td>
                </tr>
                <tr>
                  <th className="name">아이디</th>
                  <td>skyblue</td>
                </tr>
                <tr>
                  <th className="name">비밀번호</th>
                  <td>
                    <input
                      id="pw"
                      name="pw"
                      type="text"
                      className="text"
                      placeholder="비밀번호를 입력하세요"
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 className="fin-wrap">저장</h2>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Modify;
