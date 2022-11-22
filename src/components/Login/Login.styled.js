import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
		flex-flow:wrap;
		text-align: center;
		align-content: center;
		align-items: center;
	}
`

export const LoginBackLeft = styled.div`
  width: 50%;
  left: 0;
  height: 100%;
  background-color: #aaaaaa;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 980px) {
    width: 100%;
    height: 50%;
    margin-bottom: 3rem;
	}
`

export const LoginFrontRight = styled.div`
  width: 50%;
  right: 0;
  height: 100%;
`

export const LoginOverlay = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  & h1 {
    font-size: 7vmax;
    line-height: 1;
    font-weight: 900;
    margin-top: 150px;
    margin-bottom: 20px;
  }
  & p {
    margin-top: 30px; 
    font-weight: 900;
  }
`
// 오른쪽에 로그인 form 네모임
export const LoginBox = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 50px;
  max-width: 500px;
  min-width: 500px;
  height: 40vh;
  min-height: 600px;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-around;
  font-size: 3rem;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.btnColor};;
  transition: all 0.5s;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10rem;
  }
  & span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding-left: 10px;
    font-size: 1rem;
  }
`
export const LoginBoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid #aaaaaa;
`
export const LoginArrowBack = styled(BiArrowBack)`
  cursor: pointer;
  display: flex;
  font-size: 1.8rem;
  color: ${(props) => props.theme.textColor};;
  transition: all 0.3s;
  &:hover {
    transform: translateX(-10%);
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 25px;
  font-size: 16px;
  background-color: ${(props) => props.theme.ctrColor};
  color: ${(props) => props.theme.bgColor};
  border: none;
  outline: none;
  border-bottom: 2px solid #B0B3B9;
`
export const LoginBtn = styled.button`
  cursor: pointer;
  margin-top: 1.2rem;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  outline: none;
  padding: 15px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  transition: all 0.3s;
  &:hover {
    transform: translateY(-7%);
  }
`

export const SocialContainer = styled.div`
  display: flex;
  margin: 0 auto;
  & div {
    cursor: pointer;
    font-size: .8rem;
    border: 1px solid #DDDDDD;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 50px;
    width: 50px;
  }
`