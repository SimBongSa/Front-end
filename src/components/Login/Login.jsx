import { LoginContainer, LoginBackLeft, LoginOverlay, LoginBox, LoginBoxTitle, LoginArrowBack, LoginForm, LoginInput, LoginBtn, SocialContainer } from "./Login.styled";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  return(
    <>
      <LoginContainer>

        <LoginBackLeft>
          <LoginOverlay>
            <h1>Hello World.</h1>
            <p>대충 로그인하고 봉사활동 시작해보라는 글귀</p>
            <p>암튼 여기 왼쪽은 이미지 들어갈거임</p>
            <p>글씨는 넣을까 말까 고민중</p>
          </LoginOverlay>
        </LoginBackLeft>
    
        <LoginBox>
          <LoginBoxTitle>
            <h4>Login</h4><LoginArrowBack onClick={() => navigate("/")}/>
          </LoginBoxTitle>

          <LoginForm>
            <LoginInput 
              placeholder="username" 
              type="text"
            />
            <LoginInput 
              placeholder="password"
              type="password"
            />
            <LoginBtn>Login</LoginBtn>
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
