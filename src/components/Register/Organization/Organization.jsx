import { InputForm, InputBox } from "../Individual/Individual.styled";
import Input from "../../common/input/Input";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __registerManager } from "../../../redux/modules/registerSlice";
import { InputHeader, StInputContainer, StRegBtn } from "../Register.styled";

const Organization = () => {
	const init = {
		authority: "ROLE_ADMIN",
		username: "",
		password: "",
		passwordConfirm: "",
		phoneNumber: "",
		email: "",
		licenseNumber: "",
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [input, setInput] = useState(init);

	const onChangeHandler = e => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value });
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		dispatch(__registerManager({ ...input, licenseImage }));
		setInput(init);
	};

	const [licenseImage, setLicenseImage] = useState(null);
	const [licensePreview, setLicensePreview] = useState("");

	const onChangeImage = e => {
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
						setNameMessage("형식이 틀렸읍니다. 확인 바랍니다.");
					}
				} else {
					setNameMessage("사용 가능합니다.");
					setIsName(true);
				}
			}
		},
		[input]
	);

	const [nameMessage, setNameMessage] = useState(
		"4 ~ 16글자, 알파벳 소문자, 대문자, 숫자만 가능합니다."
	);

	const [isName, setIsName] = useState(false);
	return (
		<StInputContainer>
			<InputHeader>Vongole</InputHeader>
			<InputForm>
				<InputBox>
					<form onSubmit={onSubmitHandler}>
						<Input
							placeholder="Username"
							autoComplete="off"
							dupleCheck="username"
							nameMessage={nameMessage}
							type="text"
							name="username"
							value={input.username}
							onChange={onUsernameChange}
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
						<input type="file" accept="image/*" name="licenseImage" onChange={onChangeImage} />
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
	);
};

export default Organization;
