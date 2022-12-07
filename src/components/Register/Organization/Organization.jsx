import { InputForm, InputBox, StLegend } from "../Individual/Individual.styled";
import Input from "../../common/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __registerManager } from "../../../redux/modules/registerSlice";
import { InputHeader, StInputContainer, StRegBtn } from "../Register.styled";
import { useCallback } from "react";


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

	const onChangeHandler = useCallback(
		e => {
			const { name, value } = e.target;
			setInput({ ...input, [name]: value });
		},
		[input]
	);

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

	// 오류메시지 상태 저장
	const [nameMessage, setNameMessage] = useState(
		"4 ~ 16글자, 알파벳 소문자, 대문자, 숫자만 가능합니다."
	);
	const [passwordMessage, setPasswordMessage] = useState(
		"8 ~ 20자, 알파벳 대소문자, 숫자, 특수문자로 구성됩니다."
	);
	const [pwConfirmMessage, setPwConfirmMessage] = useState("");

	// 유효성 검사
	const [isName, setIsName] = useState(false);
	const [isPw, setIsPw] = useState(false);
	const [isPwConfirm, setIsPwConfirm] = useState(false);

  const onUsernameChange = useCallback(
		e => {
			const usernameRegex = /^[a-zA-Z0-9]{4,16}$/;
			const { name, value } = e.target;
			setInput({ ...input, [name]: value });
			if (value.length === 0) {
				setNameMessage("");
			} else {
				if (value.length < 4 || value.length > 16) {
					setNameMessage("4 ~ 16글자, 알파벳 소문자, 대문자, 숫자만 가능합니다.");
					setIsName(false);
					if (!usernameRegex.test(value)) {
						setNameMessage("형식이 틀렸습니다. 확인 바랍니다.");
					}
				} else {
					setNameMessage("사용 가능합니다.");
					setIsName(true);
				}
			}
		},
		[input]
	);

	const onPwChange = useCallback(
		e => {
			const pwRegex = /^(?=.*[a-zA-Z0-9])(?=.*\d)(?=.*\W).{8,16}$/;
			const { name, value } = e.target;
			setInput({ ...input, [name]: value });
			if (value.length === 0) {
				setPasswordMessage("");
			} else {
				if (value.length < 8 || value.length > 20) {
					setPasswordMessage("8 ~ 20자, 알파벳 대소문자, 숫자, 특수문자로 구성됩니다.");
					setIsPw(false);
					if (!pwRegex.test(value)) {
						setPasswordMessage("형식이 틀렸습니다. 확인 바랍니다");
					}
				} else {
					setPasswordMessage("사용 가능합니다.");
					setIsPw(true);
				}
			}
		},
		[input]
	);

	const onPwConfirmChange = useCallback(
		e => {
			const { name, value } = e.target;
			setInput({ ...input, [name]: value });
			if (value === input.password) {
				setPwConfirmMessage("비밀번호 확인이 완료되었읍니다.");
				setIsPwConfirm(true);
			} else {
				setPwConfirmMessage("비밀번호를 확인 바랍니다.");
				setIsPwConfirm(false);
			}
		},
		[input]
	);


  return(
    <StInputContainer>
      <InputHeader>Vongole</InputHeader>
      <InputForm>
        <InputBox>
          <form onSubmit={onSubmitHandler}>
            <StLegend>Your Basic Info</StLegend>
            <Input 
							placeholder="Username"
							autoComplete="off"
							dupleCheck="username"
              type="text"
              name="username"
              value={input.username}
              onChange={onUsernameChange}
            />
            <span>{nameMessage}</span>
            <Input 
              placeholder="Password"
              type="password"
              name="password"
              value={input.password}
              onChange={onPwChange}
            />
            <span>{passwordMessage}</span>
            <Input 
              placeholder="Confirm Password"
              type="password"
              name="passwordConfirm"
              value={input.passwordConfirm}
              onChange={onPwConfirmChange}
            />
            <span>{pwConfirmMessage}</span>
            <StLegend>Your Company Info</StLegend>
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
            <StRegBtn type="submit">회원가입</StRegBtn>
          </form>
        </InputBox>
        <span onClick={() => navigate("/login")}>You are already member? Log in Now</span>
      </InputForm>
    </StInputContainer>
  )
};

export default Organization;