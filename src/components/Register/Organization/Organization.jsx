import { InputContainer, InputForm, InputBox } from "../Individual/Individual.styled";
import Input from "../../common/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __registerManager } from "../../../redux/modules/registerSlice";


const Organization = () => {

  const init = {
    authority: "ROLE_ADMIN",
    username: "",
    password: "",
    passwordConfirm: "",
    companyName: "",
    companyImage: "",
    companyNum: "",
    certificateImage: "",
    phoneNumber: "",
    email: "",
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__registerManager(input));
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
              name="username"
              value={input.username}
              onChange={onChangeHandler}
            />
            <Input 
              placeholder="License Number"
              type="text"
              name="companyNum"
              value={input.companyNum}
              onChange={onChangeHandler}
            />
            <input type="file"/>
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
              placeholder="Phone Number"
              type="text"
              name="companyPhoneNum"
              value={input.companyPhoneNum}
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
              placeholder="Otganization Name"
              type="text"
              name="companyName"
              value={input.companyName}
              onChange={onChangeHandler}
            />
            <button type="submit">로구인</button>
          </form>
        </InputBox>
        <span onClick={() => navigate("/login")}>You are already member? Log in Now</span>
      </InputForm>
    </InputContainer>
  )
};

export default Organization;