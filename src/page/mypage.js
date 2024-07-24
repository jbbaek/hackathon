/*eslint-disable*/
import React from "react";
import "./mypage.css";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

export const Mypage = () => {
  return (
    <div className="mypage">
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
            <h1 className="sec-main">My Page</h1>
            <div className="sec-img">
              <img
                src={process.env.PUBLIC_URL + "./img/mypage.png"}
                alt="mypage"
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
                  <td>******</td>
                </tr>
                <tr>
                  <th className="name">내 코인</th>
                  <td>5000</td> {/* 임시로 삽입*/}
                </tr>
              </tbody>
            </table>
            <h2 className="sec-wrap">
              <Link to="modify" style={{ textDecoration: "none" }}>
                {/* link설정시 나오는 밑줄 없애줌*/}
                수정
              </Link>
            </h2>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Mypage;
