import { LoginContainer, LoginBackLeft, LoginOverlay, LoginBox, LoginBoxTitle, LoginArrowBack, LoginForm, LoginInput, LoginBtn, SocialContainer, LoginTitle } from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __loginManager, __loginMember } from "../../redux/modules/registerSlice";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { getCookieToken } from "../../utils/cookie";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookieToken(['access-token']);

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
    console.log(input);
    setInput(init);
  }

  const isSuccess = useSelector(state => state.register.statusCode);

  useEffect(() => {
    if (token) {
      alert("올바른 접근이 아닙니다.")
      navigate("/")
    }
    if (isSuccess) {
      navigate("/")
    }
  });

  const [loginOption, setLoginOption] = useState("member");

  return(
    <>
      <LoginContainer>

        <LoginBackLeft>
          <LoginOverlay>
            <h1>Hello World.</h1>
            <p>암튼 여기 왼쪽은 이미지 들어갈거임</p>
            <p>글씨는 넣을까 말까 고민중</p>
          </LoginOverlay>
        </LoginBackLeft>
    
        {
          loginOption === "member" ? (
            <LoginBox>
              <LoginBoxTitle>
                <LoginTitle onClick={() => {
                  setLoginOption("manager")
                }}>Member Login</LoginTitle><LoginArrowBack onClick={() => navigate("/")}/>
              </LoginBoxTitle>
    
              <LoginForm onSubmit={onSubmitHandler}>
                <LoginInput 
                  placeholder="username" 
                  type="text"
                  name="username"
                  value={input.username}
                  onChange={onChangeHandler}
                />
                <LoginInput 
                  placeholder="password"
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={onChangeHandler}
                />
                <LoginBtn onClick={() => {
                  dispatch(__loginMember(input))
                }}>Member Login</LoginBtn>
              </LoginForm>
    
              <span>Forgot Your Password?</span>
    
              <span>or Continue With</span>
    
              <SocialContainer>
                <div onClick={() => {
                  navigate("/https://kauth.kakao.com/oauth/authorize?client_id=e0fa0a29b6f980a77e6cad8b0f96639d&redirect_uri=http://3.39.193.27:8080/user/kakao/callback&response_type=code")
                }}>ka</div>
                <div>소셜2</div>
                <div>소셜3</div>
              </SocialContainer>
              <span onClick={() => navigate("/register")}>Create an account</span>
            </LoginBox>
          ) : null
        }

        {
          loginOption === "manager" ? (
            <LoginBox>
              <LoginBoxTitle>
                <LoginTitle onClick={() => {
                  setLoginOption("member");
                }}>Manager Login</LoginTitle><LoginArrowBack onClick={() => navigate("/")}/>
              </LoginBoxTitle>
    
              <LoginForm onSubmit={onSubmitHandler}>
                <LoginInput 
                  placeholder="username" 
                  type="text"
                  name="username"
                  value={input.username}
                  onChange={onChangeHandler}
                />
                <LoginInput 
                  placeholder="password"
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={onChangeHandler}
                />
                <LoginBtn onClick={() => {
                  dispatch(__loginManager(input))
                }}>Manager Login</LoginBtn>
              </LoginForm>
    
              <span>Forgot Your Password?</span>
    
              <span onClick={() => navigate("/register")}>Create an account</span>
            </LoginBox>
          ) : null
        }

      </LoginContainer>
    </>
  )
};

export default Login;