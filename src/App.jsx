import s from "../src/App.module.scss";

import Header from "./components/Header";
import Panel from "./components/Panel/Panel";
import HomePage from "./pages/HomePage/HomePage";
import Auth from "./pages/auth/Auth";
import Regist from "./pages/regist/Regist";
import News from "./pages/News/News";
import Chat from "./pages/chat/Chat";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Panel />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/news" element={<News />} />

        <Route path="/Entry" element={<Auth />} />

        <Route path="/adduser" element={<Regist />} />

        <Route path="/chat" element={<Chat />} />

      </Routes>
    </div>
  );
}

export default App;
