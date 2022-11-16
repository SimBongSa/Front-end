import { InputContainer, InputForm, InputBox } from "../Individual/Individual.styled";
import Input from "../../common/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __registerManager } from "../../../redux/modules/registerSlice";
import { useRef } from "react";


const Organization = () => {

  const init = {
    authority: "ROLE_ADMIN",
    username: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
    email: "",
    licenseImage: "",
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
    dispatch(__registerManager(input));
    console.log(input);
    setInput(init);
  }

  const licenseImage = useRef();
  const onImageBtnClick = (e) => {
    e.preventDefault();
    licenseImage.current.click();
  }

  console.log(input);

  // image State
  const [imageToUpload, setImageToUpload] = useState("");
  console.log(imageToUpload)
  // image Preview State  
  const [uploadpreview, setUploadpreview] = useState(null);

  // image onChangeHandler
  const onChangeImage = (e) => {
    setImageToUpload(e.target.files[0]);
    // image preview
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setUploadpreview([...imageToUpload, previewImgUrl]);
      }
    };
  };

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
              name="licenseNumber"
              value={input.licenseNumber}
              onChange={onChangeHandler}
            />
            <input 
              ref={licenseImage}
              type="file"
              accept="image/*"
              name="licenseImage"
              onChange={onChangeImage}
            />
            <button
              onClick={onImageBtnClick}
            >image Upload</button>
            <div>
              <img src={imageToUpload} alt="" />
            </div>
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
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={onChangeHandler}
            />
            <Input 
              placeholder="Otganization Name"
              type="text"
              name="name"
              value={input.name}
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