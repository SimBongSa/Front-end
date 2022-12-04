import { LoginContainer, LoginBackLeft, LoginOverlay, LoginBox, LoginBoxTitle, LoginArrowBack, LoginForm, LoginInput, LoginBtn, SocialContainer, LoginTitle } from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __loginMember } from "../../redux/modules/registerSlice";
import { useState } from "react";
import { useEffect } from "react";
import { getCookieToken } from "../../utils/cookie";
import Input from "../common/input/Input";
import styled, { css } from "styled-components";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authority = getCookieToken(['username']);

  const init = {
    "username": "",
    "password": "",
  }

  const [input, setInput] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); 
    dispatch(__loginMember(input))
    setInput(init);
  }

  const isSuccess = useSelector(state => state.register.statusCode);

  useEffect(() => {
    if (authority) {
      alert(`${authority}님 환영합니다`)
      navigate('/')
    }
  }, [authority]);

  // useEffect(() => {
  //   if (token) {
  //     alert("올바른 접근이 아닙니다.")
  //     navigate("/")
  //   }
  // }, [token])

  const [loginOption, setLoginOption] = useState("member");

  return(
    <>
      <LoginContainer>
        {
          loginOption === "member" ? (
            <>
              <StLoginOptions>
                <span 
                  className={ loginOption === "member" ?  "selected" : "not-selected"}
                  onClick={() => {
                    setLoginOption("member");
                }}>봉사 지원자</span>
                <span 
                  className={ loginOption === "manager" ?  "selected" : "not-selected"}
                  onClick={() => {
                    setLoginOption("manager")
                  }}>봉사 기관</span>
              </StLoginOptions>

              <LoginBox>
                <LoginBoxTitle>
                  <LoginTitle>Member Login</LoginTitle><LoginArrowBack onClick={() => navigate("/")}/>
                </LoginBoxTitle>
      
                <LoginForm onSubmit={onSubmitHandler}>
                  <Input 
                    placeholder="username" 
                    type="text"
                    name="username"
                    value={input.username}
                    onChange={onChangeHandler}
                  />
                  <Input 
                    placeholder="password"
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={onChangeHandler}
                  />
                  <LoginBtn>Member Login</LoginBtn>
                </LoginForm>
              </LoginBox>
              <StToRegister>아직 봉골레 멤버가 아닌가요? <b onClick={() => navigate("/register")}>회원가입</b></StToRegister>
            </>
          ) : null
        }

        {
          loginOption === "manager" ? (
            <>
              <StLoginOptions>
                <span 
                  className={ loginOption === "member" ?  "selected" : "not-selected"}
                  onClick={() => {
                    setLoginOption("member");
                }}>봉사 지원자</span>
                <span 
                  className={ loginOption === "manager" ?  "selected" : "not-selected"}
                  onClick={() => {
                    setLoginOption("manager")
                  }}>봉사 기관</span>
              </StLoginOptions>

              <LoginBox>
                <LoginBoxTitle>
                  <LoginTitle>Manager Login</LoginTitle><LoginArrowBack onClick={() => navigate("/")}/>
                </LoginBoxTitle>
      
                <LoginForm onSubmit={onSubmitHandler}>
                  <Input 
                    placeholder="username" 
                    type="text"
                    name="username"
                    value={input.username}
                    onChange={onChangeHandler}
                  />
                  <Input 
                    placeholder="password"
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={onChangeHandler}
                  />
                  <LoginBtn onClick={() => {
                    dispatch(__loginMember(input))
                  }}>Manager Login</LoginBtn>
                </LoginForm>
              </LoginBox>
             <StToRegister>아직 봉골레 멤버가 아닌가요? <b onClick={() => navigate("/register")}>회원가입</b></StToRegister>
            </> 
          ) : null
        }
      </LoginContainer>
    </>
  )
};

export default Login;

export const StLoginOptions = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  justify-content: space-evenly;
  > .selected { 
      border-bottom: 4px solid ${(props) => props.theme.btnColor};
  }
  > .not-selected { 
      border-bottom: 4px solid ${(props) => props.theme.subTextColor};
  } 
  & span {
    cursor: pointer;
    min-width: 5rem;
    text-align: center;
    margin: 1rem;
    padding-bottom: 5px;
    transition: all 0.4s;
    &:hover {
      transform: translateY(-5%);
      border-bottom: 4px solid ${(props) => props.theme.btnColor};
    }
  }
`

export const StToRegister = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 15rem;
  & b {
    cursor: pointer;
    color: orange;
  }
`