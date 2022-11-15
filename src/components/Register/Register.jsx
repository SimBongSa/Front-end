import styled from "styled-components";
import { useState } from "react";
import { VscAccount, VscOrganization } from "react-icons/vsc";
import { RegisterContainer, RegisterCover, RegisterBtn, RegisterIndividual, RegisterOrganization, OptionProfile, OptionOrganization, RegisterFormContainer } from "./Register.styled";
import Individual from "../Register/Individual/Individual"
import Organization from "../Register/Organization/Organization"

const Register = () => {

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

  return (
    <>
      {
        option === null ? (
          <RegisterContainer>
            <RegisterCover className="cover" style={{ transform: `translateX(${moveIndex}%)` }}>
              {
                moveIndex === 0 ? (
                  <>
                    <h1 className="individual">Hello 개인</h1>
                    <p className="individual">봉사에 참여하고 싶어요</p>
                    <RegisterBtn onClick={moveLeft}>기관이에요</RegisterBtn>
                  </>
                ) : null
              }
      
              {
                moveIndex === -100 ? (
                  <>
                    <h1 className="organization">Hello 기관</h1>
                    <p className="organization">함께할 봉사자가 필요해요</p>
                    <RegisterBtn className="organization" onClick={moveRight}>개인이에요</RegisterBtn>
                  </>
                ) : null
              }
            </RegisterCover>
            <RegisterIndividual>
              <h1>봉사 지원자 가입</h1>
              <p>봉사활동을 하고싶어요</p>
              <OptionProfile/><br/>
              <RegisterBtn onClick={() => setOption("individual")}>Register</RegisterBtn>
            </RegisterIndividual>
            <RegisterOrganization>
              <h1>봉사 기관 가입</h1>
              <p>자원봉사자가 필요해요</p>
              <OptionOrganization/><br/>
              <RegisterBtn onClick={() => setOption("organization")}>Register</RegisterBtn>
            </RegisterOrganization>
          </RegisterContainer>    
        ) : null
      }

      {
        option === "individual" ? (
          <RegisterFormContainer>
            <Individual/>
          </RegisterFormContainer>
        ) : null
      }

      {
        option === "organization" ? (
          <RegisterFormContainer>
            <Organization/>
          </RegisterFormContainer>
        ) : null
      }
    </>
  )
};

export default Register;