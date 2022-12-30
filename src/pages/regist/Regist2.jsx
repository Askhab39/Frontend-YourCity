import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postRegist2 } from "../../reducers/Slice/registrationsSlice";
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
import { Link } from "react-router-dom";

function Regist2({ text1, setText1, text2, setText2 }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRegist2());
  }, [dispatch]);

  const handleSetText1 = (e) => {
    setText1(e.target.value);
  };
  const handleSetText2 = (e) => {
    setText2(e.target.value);
  };

  const [text3, setText3] = useState("");
  const handleSetText3 = (e) => {
    setText3(e.target.value);
  };

  const [text4, setText4] = useState("");
  const handleSetText4 = (e) => {
    setText4(e.target.value);
  };

  const [text5, setText5] = useState("");
  const handleSetText5 = (e) => {
    setText5(e.target.value);
  };

  const [text6, setText6] = useState("");
  const handleSetText6 = (e) => {
    setText6(e.target.value);
  };

  const handleChangeButton = (e) => {
    e.preventDefault();
    dispatch(postRegist2({ text1, text2, text3, text4, text5, text6 }));
    console.log(text1, text2, text3, text4, text5, text6);
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setText5("");
    setText6("");
  };

  return (
    <div className="div">
        <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <div className="d">
                <div className="12">2/2</div>
              </div>
              <h2 className="fw-bold mb-2 text-center">Регистрация</h2>
              <hr className="my-4" />

              <form onSubmit={handleChangeButton} type="submit">
                <MDBInput
                  value={text3}
                  onChange={handleSetText3}
                  wrapperClass="mb-3 w-100"
                  label="Фамилия"
                  id="formControlLg"
                  type="text"
                  size="lg"
                />
                <MDBInput
                  value={text4}
                  onChange={handleSetText4}
                  wrapperClass="mb-3 w-100"
                  label="Имя"
                  id="formControlLg"
                  type="text"
                  size="lg"
                />
                <MDBInput
                  value={text5}
                  onChange={handleSetText5}
                  wrapperClass="mb-3 w-100"
                  label="Адрес"
                  id="formControlLg"
                  type="text"
                  size="lg"
                />
                <MDBInput
                  value={text6}
                  onChange={handleSetText6}
                  wrapperClass="mb-3 w-100"
                  label="Номер телефона"
                  id="formControlLg"
                  type="text"
                  size="lg"
                />

                <hr className="my-4" />

                <Link to='/'>
                    <MDBBtn className="form" size="lg">Зарегистрироваться</MDBBtn>
                </Link>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}

export default Regist2;