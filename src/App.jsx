import s from "../src/App.module.scss";

import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import WindowAuth from "./pages/WindowAuth";
import Registrations from "./pages/Registrations";
import News from "./pages/News/News";
import Footer from "./components/Footer";

import Auth from "./pages/auth/Auth";

import { Route, Routes } from "react-router-dom";
// import { useState } from "react";

function App() {

  return (
    <div className={s.app}>
      {/* <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage/>
          }
        />

        <Route path="/news" element={<News />} />
      </Routes>
      <Footer /> */}

      <Auth />
    </div>
  );
}

export default App;