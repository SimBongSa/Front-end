import styled from "styled-components";
import { VscAccount, VscOrganization } from "react-icons/vsc";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __register } from "../../redux/modules/registerSlice";

const Register = () => {

  const init = {
    username: "",
    password: "",
    passwordConfirm: ""
  }

  const dispatch = useDispatch();

  const [input, setInput] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__register(input))
    setInput(init);
  }

  console.log(input);

  return (
    <RegisterContainer>
      <h1>What service are you looking for?</h1>
      <h4>Join as a volunteer or organizations</h4>
      <RegisterOptions>
        <RegisterOption>
          <OptionProfile/>
        </RegisterOption>
        <RegisterOption>
          <OptionOrganization/>
        </RegisterOption>
      </RegisterOptions>
      {/* <form onSubmit={onSubmitHandler}>
        <input 
          placeholder="username"
          type="text"
          name="username"
          value={input.username}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          placeholder="password"
          type="text"
          name="password"
          value={input.password}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          placeholder="passwordConfirm"
          type="text"
          name="passwordConfirm"
          value={input.passwordConfirm}
          onChange={(e) => onChangeHandler(e)}
        />
        <button>회원가입</button>
      </form> */}
    </RegisterContainer>
  )
};

export default Register;

export const RegisterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;
  background-color: tomato;
  & h1 {
    font-size: 4rem;
    padding: 2rem;
  }
  & h4 {
    font-size: 2rem;
    padding: 2rem;
  }
`

export const RegisterOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #aaaaaa;
`

export const RegisterOption = styled.div`
  cursor: pointer;
  width: 500px;
  height: 500px;
  border-radius: 25px;
  margin: 1rem;
  padding: 1rem;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  transition: all 0.5s;
  &:hover {
    transform: translateY(-5%);
  }
`

export const OptionProfile = styled(VscAccount)`
  font-size: 10rem;
`

export const OptionOrganization = styled(VscOrganization)`
  font-size: 10rem;
`