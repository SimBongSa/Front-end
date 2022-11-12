import styled from "styled-components";
import { VscAccount, VscOrganization } from "react-icons/vsc";
import { useState } from "react";
import Individual from "./Individual/Individual";
import Organization from "./Organization/Organization";

const Register = () => {

  const [option, setOption] = useState(null);

  return (
    <RegisterContainer>
      
      {
        option === null ? (
          <>
            <RegisterTitle>
              <h1>What service are you looking for?</h1>
              <h4>Join as a volunteer or organizations</h4>
            </RegisterTitle>

            <RegisterOptionContainer>
                <RegisterOption onClick={() => {
                  setOption("individual");
                }}>
                  <h4>봉사에 참여하고 싶어요</h4>
                  <OptionProfile/>
                  <h1>봉사 지원자</h1>
                </RegisterOption>
                <RegisterOption onClick={() => {
                  setOption("organization");
                }}>
                  <h4>함께할 봉사자가 필요해요</h4>
                  <OptionOrganization/>
                  <h1>봉사 단체</h1>
                </RegisterOption>
            </RegisterOptionContainer>
          </>
        ) : null
      }

      {
        option === "individual" ? (<Individual/>) : null
      }

      {
        option === "organization" ? (<Organization/>) : null
      }

    </RegisterContainer>
  )
};

export default Register;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 10vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  transition: all 0.5s;
  & h1 {
    font-size: 4rem;
    padding: 2rem;
  }
  & h4 {
    font-size: 2rem;
    padding: 2rem;
    margin-top: 1.5rem;
  }
`

export const RegisterTitle = styled.div`
  background-color: ${(props) => props.theme.ctrColor};
  color: ${(props) => props.theme.bgColor};
`

export const RegisterOptionContainer = styled.div`
  display: grid;
  margin: 0;
  grid-template-columns: auto auto;
  place-content: center;
  background: ${(props) => props.theme.ctrColor};
  color: ${(props) => props.theme.bgColor};
`

export const RegisterOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`

export const RegisterOption = styled.button`
  cursor: pointer;
  width: 500px;
  height: 500px;
  border-radius: 25px;
  margin: 2rem;
  padding: 1rem;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  transition: all 0.5s;
  &:hover {
    transform: translateY(-3%);
  }
`

export const OptionProfile = styled(VscAccount)`
  font-size: 10rem;
`

export const OptionOrganization = styled(VscOrganization)`
  font-size: 10rem;
`

export const RegisterBtn = styled.button`
  display: flex;
  cursor: pointer;
	border-radius: 20px;
  border: none;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
  width: 30%;
  height: 80px;
  margin: 0 auto;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
	letter-spacing: 1px;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`