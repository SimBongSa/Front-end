import { InputContainer, InputForm, InputBox } from "./Individual.styled";
import Input from "../../common/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __registerMember } from "../../../redux/modules/registerSlice";
import { useNavigate } from "react-router-dom";

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

  return (
    <InputContainer>
      <h1>You are almost done!</h1>
      <InputForm>
        <InputBox>
          <form onSubmit={onSubmitHandler}>
            <Input
              dupleCheck={true}
              placeholder="Username"
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
            <Input
              placeholder="Name"
              type="text"
              name="name"
              value={input.name}
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
            <Input
              placeholder="Birth Date"
              type="date"
              name="birthdate"
              value={input.birthdate}
              onChange={onChangeHandler}
            />
            <button type="submit">로구인</button>
          </form>
        </InputBox>
        <span onClick={() => navigate("/login")}>
          You are already member? Log in Now
        </span>
      </InputForm>
    </InputContainer>
  );
};

export default Individual;
