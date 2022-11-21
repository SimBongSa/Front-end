import { InputContainer, InputForm, InputBox } from "./Individual.styled";
import Input from "../../common/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __registerMember } from "../../../redux/modules/registerSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProcessBar from "../ProcessBar/ProcessBar";
import { BtnContainer } from "../Organization/Organization";

const Individual = () => {
  const init = {
    authority: "ROLE_MEMBER",
    username: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
    email: "",
    phoneNumber: "",
    name: "",
    gender: "",
    birthdate: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__registerMember(input));
    console.log(input);
    setInput(init);
  };

  const [step, setStep] = useState(0);

  return (
    <InputContainer>
      <h1>You are almost done!</h1>
      <ProcessBar step={step} />
      <InputForm>
        <InputBox>
          <form onSubmit={onSubmitHandler}>
          {
              step === 0 ? (
                <>
                  <StLegend>Your Basic Info</StLegend>
                  <Input 
                  placeholder="Username"
                  dupleCheck={true}
                  type="text"
                  name="username"
                  value={input.username}
                  onChange={onChangeHandler}
                  />
                  <Input 
                    placeholder="Nickname"
                    dupleCheck={true}
                    type="text"
                    name="nickname"
                    value={input.nickname}
                    onChange={onChangeHandler}
                  />
                  <Input 
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={onChangeHandler}
                  />
                  <Input 
                    placeholder="Confirm Password"
                    type="password"
                    name="passwordConfirm"
                    value={input.passwordConfirm}
                    onChange={onChangeHandler}
                  />
                </>
              ) : null
            }
            {
              step === 1 ? (
                <>
                  <Input
                    placeholder="Email"
                    dupleCheck={true}
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={onChangeHandler}
                  />
                  <Input
                    placeholder="PhoneNumber"
                    type="tel"
                    name="phoneNumber"
                    value={input.phoneNumber}
                    onChange={onChangeHandler}
                  />
                </>
              ) : null
            }

            {
              step === 2 ? (
                <>
                  <Input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={onChangeHandler}
                  />
                  <Input
                    placeholder="Birth Date"
                    type="date"
                    name="birthdate"
                    value={input.birthdate}
                    onChange={onChangeHandler}
                  />
                  <Input
                    id="male"
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={onChangeHandler}
                  />
                  <Input
                    id="female"
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={onChangeHandler}
                  />
                </>
              ) : null
            }

            {
              step === 3 ? (
                <>
                  <h4>추카합니당 이제 봉사활동 해보셈</h4>
                  <button type="submit">로구인</button>
                </>
              ) : null
            }
          </form>
          <BtnContainer>
            {
              step === 3 ? <button>.</button> : (
                <button onClick={() => {
                  setStep(step + 1)
                }}>다음</button>
              )
            }
            {
              step === 0 
                ? <button>.</button> : <button onClick={() => {setStep(step - 1)}}>이전</button>
            }
          </BtnContainer>
        </InputBox>
        <span onClick={() => navigate("/login")}>
          You are already member? Log in Now
        </span>
      </InputForm>
    </InputContainer>
  );
};

export default Individual;

export const Gender = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
`

export const StLegend = styled.legend`
  font-size: 1.4em;
  margin-bottom: 10px;
  text-align: left;
`