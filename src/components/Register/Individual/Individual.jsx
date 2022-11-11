import { InputContainer, InputForm, InputBox } from "./Individual.styled";
import Input from "../../common/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __register } from "../../../redux/modules/registerSlice"

const Individual = () => {

  const init = {
    member_id: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
    email: "",
    phone_num: "",
    name: "",
    gender: "",
    age: "",
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
              placeholder="Username"
              type="text"
              name="member_id"
              value={input.member_id}
              onChange={onChangeHandler}
            />
            <Input 
              placeholder="Nickname"
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
              type="email"
              name="email"
              value={input.email}
              onChange={onChangeHandler}
            />
            <Input 
              placeholder="PhoneNumber"
              type="text"
              name="phone_num"
              value={input.phone_num}
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
              placeholder="Birth Date"
              type="text"
              name="age"
              value={input.age}
              onChange={onChangeHandler}
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