import { LoginContainer, LoginBackLeft, LoginOverlay, LoginBox, LoginBoxTitle, LoginArrowBack, LoginForm, LoginInput, LoginBtn, SocialContainer } from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __loginMember } from "../../redux/modules/registerSlice";
import { useState } from "react";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    
        <LoginBox>
          <LoginBoxTitle>
            <h4>Login</h4><LoginArrowBack onClick={() => navigate("/")}/>
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
            }}>Login</LoginBtn>
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
      </LoginContainer>
    </>
  )
};

export default Login;
