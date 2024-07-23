import "./modify.css";
import { FaRegCircleUser } from "react-icons/fa6";

export const Modify = () => {
  return (
    <div className="modify">
      <header>
        <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
      </header>
      <body>
        <nav>
          <div className="container">
            <h1 className="nav-main">마음챙기기</h1>
            <div className="nav-name">
              <div className="nav-log">
                <h1>
                  마이페이지
                  <FaRegCircleUser />
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
                src={process.env.PUBLIC_URL + "./img/image.png"}
                alt="modify"
              ></img>
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
            <h2 className="sec-wrap">저장</h2>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Modify;
