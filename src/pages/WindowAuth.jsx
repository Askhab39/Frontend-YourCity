import s from "../pages/WindowAuth.module.scss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postAuth } from "../reducers/Slice/authSlice";

function WindowAuth() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postAuth());
  }, [dispatch]);

  const [text1, setText1] = useState("");
  const handleSetText1 = (e) => {
    setText1(e.target.value);
  };

  const [text2, setText2] = useState("");
  const handleSetText2 = (e) => {
    setText2(e.target.value);
  };

  const handleChangeButton = (e) => {
    e.preventDefault();
    dispatch(postAuth({ text1, text2 }));
    console.log(text1, text2);
    setText1("");
    setText2("");
  };

  return (
    <div className={s.WindowAuth}>
      <div className={s.divImg}></div>
      <div className={s.textEntry}>Авторизация</div>
      <form className={s.form} onSubmit={handleChangeButton} type="submit" action="">
        <div className={s.divEmail}>
          <input
            className={s.inpEmail}
            type="email"
            value={text1}
            onChange={handleSetText1}
            placeholder="   Email..."
          />
        </div>

        <div className={s.divPassword}>
          <input
            className={s.inpPassword}
            type="password"
            value={text2}
            onChange={handleSetText2}
            placeholder="   Password..."
          />
        </div>

        <div className={s.divBtnEntry}>
          <button className={s.btnEntry}>Войти</button>
        </div>
      </form>

      <div className={s.divAuth}>
        <div className={s.text}>Нет аккаунта?</div>
        <button className={s.btnAuth}>Зарегистрироваться</button>
      </div>
    </div>
  );
}

export default WindowAuth;
