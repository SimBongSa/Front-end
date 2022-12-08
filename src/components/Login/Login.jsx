import { LoginContainer, LoginBox, LoginBoxTitle, LoginArrowBack, LoginForm, LoginBtn, LoginTitle, StLoginOptions, StToRegister } from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __loginMember } from "../../redux/modules/registerSlice";
import { useState } from "react";
import { useEffect } from "react";
import { getCookieToken } from "../../utils/cookie";
import Input from "../common/input/Input";

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

  useEffect(() => {
    if (authority) {
      alert(`${authority}님 환영합니다`)
      navigate('/')
    }
  }, [authority]);

  const [loginOption, setLoginOption] = useState("member");

  return(
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
                <LoginBtn>로그인</LoginBtn>
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
                <LoginBtn>로그인</LoginBtn>
              </LoginForm>
            </LoginBox>
            <StToRegister>아직 봉골레 멤버가 아닌가요? <b onClick={() => navigate("/register")}>회원가입</b></StToRegister>
          </> 
        ) : null
      }
    </LoginContainer>
  )
};

export default Login;