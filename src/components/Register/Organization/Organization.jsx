import { InputForm, InputBox } from "../Individual/Individual.styled";
import Input from "../../common/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __registerManager } from "../../../redux/modules/registerSlice";
import { BtnContainer } from "../ProcessBar/ProcessBar.styld";
import styled from "styled-components";
import { StInputContainer, InputHeader } from "../Register.styled";


const Organization = () => {

  const init = {
    authority: "ROLE_ADMIN",
    username: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
    email: "",
    licenseNumber: "",
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
    dispatch(__registerManager({...input, licenseImage}));
    setInput(init);
  }

  const [licenseImage, setLicenseImage] = useState(null);
  const [licensePreview, setLicensePreview] = useState("");

  const onChangeImage = (e) => {
    setLicenseImage(e.target.files[0]);
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setLicensePreview(previewImgUrl);
      }
    };
  };

  const [step, setStep] = useState(0);

  return(
    <StInputContainer>
      <InputHeader>
        <h1>You are almost done!</h1>
      </InputHeader>
      <InputForm>
        <InputBox>
          <form onSubmit={onSubmitHandler}>
            {
              step === 0 ? (
                <>
                  <Input 
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={input.username}
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
                    placeholder="Otganization Name"
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={onChangeHandler}
                  />
                  <Input 
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={onChangeHandler}
                  />
                </>
              ) : null
            }

            {
              step === 2 ? (
                <>
                  <Input 
                    placeholder="License Number"
                    type="text"
                    name="licenseNumber"
                    value={input.licenseNumber}
                    onChange={onChangeHandler}
                  />
                  <input 
                    type="file"
                    accept="image/*"
                    name="licenseImage"
                    onChange={onChangeImage}
                  />
                  <div>
                    <img src={licensePreview} alt="licenseImage" />
                  </div>
                  <Input 
                    placeholder="Phone Number"
                    type="text"
                    name="phoneNumber"
                    value={input.phoneNumber}
                    onChange={onChangeHandler}
                  />
                </>
              ) : null 
            }

            {
              step === 3 ? (
                <>
                  <h4>추카합니당 이제 봉사활동 올려보셈</h4>
                  <button type="submit">회원가입</button>
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
        <span onClick={() => navigate("/login")}>You are already member? Log in Now</span>
      </InputForm>
    </StInputContainer>
  )
};

export default Organization;