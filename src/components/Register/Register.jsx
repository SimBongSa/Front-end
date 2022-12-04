import { useEffect, useState } from "react";
import { RegisterContainer, RegisterCover, RegisterBtn, RegisterIndividual, RegisterOrganization, OptionProfile, OptionOrganization, StRegisterForm } from "./Register.styled";
import Individual from "../Register/Individual/Individual"
import Organization from "../Register/Organization/Organization"
import { useNavigate } from "react-router-dom";
import { getCookieToken } from "../../utils/cookie";

const Register = () => {

  const navigate = useNavigate();
  const token = getCookieToken(['access-token']);

  const [moveIndex, setMoveIndex] = useState(0);
  const moveLeft = () => {
    setMoveIndex((prev) => prev - 100);
  };
  const moveRight = () => {
    if (moveIndex === 0) {
      return;
    }
    setMoveIndex((prev) => prev + 100);
  };  

  const [option, setOption] = useState(null);

  useEffect(() => {
    if (token) {
      alert("올바른 접근이 아닙니다.")
      navigate("/")
    }
  });

  return (
    <>
      {
        option === null ? (
          <RegisterContainer>
            <RegisterCover className="cover" style={{ transform: `translateX(${moveIndex}%)` }}>
              {
                moveIndex === 0 ? (
                  <h1 className="individual" onClick={moveLeft}>봉사 단체입니다 ←</h1>
                ) : null
              }
              {
                moveIndex === -100 ? (
                    <h1 className="organization" onClick={moveRight}>→ 개인 봉사자입니다</h1>
                ) : null
              }
            </RegisterCover>
            <RegisterIndividual>
              <h1>봉사 지원자 가입</h1>
              <p>봉사활동을 하고싶어요</p>
              <OptionProfile/><br/>
              <RegisterBtn onClick={() => setOption("individual")}>가입하기</RegisterBtn>
            </RegisterIndividual>
            <RegisterOrganization>
              <h1>봉사 기관 가입</h1>
              <p>자원봉사자가 필요해요</p>
              <OptionOrganization/><br/>
              <RegisterBtn onClick={() => setOption("organization")}>가입하기</RegisterBtn>
            </RegisterOrganization>
          </RegisterContainer>    
        ) : null
      }

      {
        option === "individual" ? (
          <StRegisterForm>
            <Individual/>
          </StRegisterForm>
        ) : null
      }

      {
        option === "organization" ? (
          <StRegisterForm>
            <Organization/>
          </StRegisterForm>
        ) : null
      }
    </>
  )
};

export default Register;