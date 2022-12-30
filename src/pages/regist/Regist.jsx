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
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "../regist/Regist.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import { Link } from "react-router-dom";
import Regist2 from "./Regist2";

function Regist() {
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

  const [regist, setRegist] = useState(false);
  const handleClickWindow = () => {
    setRegist(!regist);
  };

  return (
    <div>
      <div className="div">
        {regist ? (
          <Regist2
            regist={regist}
            setRegist={setRegist}
            text1={text1}
            setText1={setText1}
            text2={text2}
            setText2={setText2}
          />
        ) : null}
      </div>

      <div className="div2">
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <div className="d">
                    <div className="12">1/2</div>
                  </div>
                  <h2 className="fw-bold mb-2 text-center">Регистрация</h2>
                  <hr className="my-4" />
                  <p className="text-#666666 mb-3">
                    Пожалуйста, введите свои данные!
                  </p>

                  <form onSubmit={handleChangeButton} type="submit">
                    <MDBInput
                      value={text1}
                      onChange={handleSetText1}
                      wrapperClass="mb-3 w-100"
                      label="Электронная почта"
                      id="formControlLg"
                      type="email"
                      size="lg"
                    />
                    <MDBInput
                      value={text2}
                      onChange={handleSetText2}
                      wrapperClass="mb-3 w-100"
                      label="Пароль"
                      id="formControlLg"
                      type="password"
                      size="lg"
                    />

                    <MDBCheckbox
                      name="flexCheck"
                      id="flexCheckDefault"
                      className="mb-4"
                      label="Запомнить пароль"
                    />
                  </form>

                  {/* <Link to="/updateuser"> */}
                  <MDBBtn
                    onClick={() => handleClickWindow()}
                    className="linkRent1"
                    size="lg"
                  >
                    Далее
                  </MDBBtn>
                  {/* </Link> */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Regist;
