import s from "../pages/Registrations.module.scss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postRegistrations } from "../reducers/Slice/registrationsSlice";

function Registrations() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRegistrations());
  }, [dispatch]);

  const [text, setText] = useState("");
  const handleSetText = (e) => {
    setText(e.target.value);
  };
  const [text1, setText1] = useState("");
  const handleSetText1 = (e) => {
    setText1(e.target.value);
  };

  const [text2, setText2] = useState("");
  const handleSetText2 = (e) => {
    setText2(e.target.value);
  };

  const [text3, setText3] = useState("");
  const handleSetText3 = (e) => {
    setText3(e.target.value);
  };

  const handleChangeButton = (e) => {
    e.preventDefault();
    dispatch(postRegistrations({ text, text1, text2, text3 }));
    console.log(text, text1, text2, text3);
    setText("");
    setText1("");
    setText2("");
    setText3("");
  };

  return (
    <div className={s.Registrations}>
      <div className={s.divImg}></div>
      <div className={s.textRegistrations}>Регистрация</div>
      <form className={s.form} onSubmit={handleChangeButton} type="submit">
        <div className={s.divFIO}>
          <input
            className={s.inpFIO}
            value={text}
            type="text"
            onChange={handleSetText}
            placeholder="   ФИО"
          />
        </div>

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

        <div className={s.divOrganization}>
          <input
            className={s.inpOrganization}
            type="text"
            value={text3}
            onChange={handleSetText3}
            placeholder="   Название гос.органа"
          />
        </div>

        <div className={s.divBtnEntry}>
          <button className={s.btnEntry}>Зарегистрироваться</button>
        </div>
      </form>

      <div className={s.divAuth}>
        <div className={s.text}>Уже есть аккаунт?</div>
        <button className={s.btnAuth}>Войти</button>
      </div>
    </div>
  );
}

export default Registrations;