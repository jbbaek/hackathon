/*eslint-disable*/
import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Mainpage } from "./page/mainpage";
import { Mypage } from "./page/mypage";
import { Modify } from "./page/modify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/modify" element={<Modify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
