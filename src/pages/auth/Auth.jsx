import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postRegist1 } from "../../reducers/Slice/registrationsSlice";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../auth/Auth.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Link } from "react-router-dom";

function Auth() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRegist1());
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
    dispatch(postRegist1({ text1, text2 }));
    console.log(text1, text2);
    setText1("");
    setText2("");
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Авторизация</h2>
              <hr className="my-2" />
              <p className="text-black mb-4">Введите свой логин и пароль!</p>

              <MDBInput
                value={text1}
                onChange={handleSetText1}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-gray"
                label="Электронная почта"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                value={text2}
                onChange={handleSetText2}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-gray"
                label="Пароль"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <p className="small mb-3 pb-lg-2">
                <a class="text-black" href="#!">
                  Забыли пароль?
                </a>
              </p>
              <Link to="/">
                <MDBBtn onClick={() => handleChangeButton()} outline className="mx-2 px-5" color="white" size="lg">
                  Войти
                </MDBBtn>
              </Link>

              <div>
                <p className="mb-0">
                  У вас нет аккаунта?{" "}
                  <Link to="/adduser" class="text-black fw-bold">
                    Создать
                  </Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Auth;
