import { InputContainer, InputForm, InputBox } from "./Individual.styled";
import Input from "../../common/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __register } from "../../../redux/modules/registerSlice"

const Individual = () => {

  const init = {
    username: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
    email: "",
    phoneNum: "",
    name: "",
    gender: "",
    age: 0,
  }

  const dispatch = useDispatch();
  const [input, setInput] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onChangeAge = (e) => {
    const { name, value } = e.target;
    setInput({...input, [name]: +value });
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__register(input))
    console.log(input);
    setInput(init);
  }

  console.log(input);

  return(
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
              name="phoneNum"
              value={input.phoneNum}
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
              type="radio"
              name="gender"
              value="male"
              onChange={onChangeHandler}
            />
            <Input
              type="radio"
              name="gender"
              value="female"
              onChange={onChangeHandler}
            />
            <Input 
              placeholder="Birth Date"
              type="number"
              name="age"
              value={input.age}
              onChange={onChangeAge}
            />
            <button type="submit">로구인</button>
          </form>
        </InputBox>
        <span>You are already member? Log in Now</span>
      </InputForm>
    </InputContainer>
  )
};

export default Individual;