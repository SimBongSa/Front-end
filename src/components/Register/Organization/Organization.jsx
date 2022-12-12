import { InputForm, InputBox, StLegend, StToLogin } from "../Individual/Individual.styled";
import Input from "../../common/input/Input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __registerManager } from "../../../redux/modules/registerSlice";
import { InputHeader, StInputContainer, StRegBtn } from "../Register.styled";
import { useCallback } from "react";
import ImageUpload from "../../Recruit/ImageUpload/ImageUpload";
import styled from "styled-components";
import { toast, ToastContainer } from 'react-toastify';
import Notification from "../../common/noti/Notification";

const Organization = () => {
	const init = {
		authority: "ROLE_ADMIN",
		username: "",
		password: "",
		passwordConfirm: "",
		phoneNumber: "",
		email: "",
		name: "",
		licenseNumber: "",
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [input, setInput] = useState(init);
	const status = useSelector(state => state.register.usernameCheck);

	useEffect(() => {
		if (status && isName) {
			toast.success("사용 가능한 아이디입니다.")
		} else if (!status && isName){
			toast.error("중복된 아이디입니다.")
		}
	}, [status])

	const onChangeHandler = useCallback(
		e => {
			const { name, value } = e.target;
			setInput({ ...input, [name]: value });
		},
		[input]
	);


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
				setNameMessage("4 ~ 16글자, 알파벳 소문자, 대문자, 숫자만 가능합니다.");
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

	const onPwChange = useCallback(
		e => {
			const pwRegex = /^(?=.*[a-zA-Z0-9])(?=.*\d)(?=.*\W).{8,16}$/;
			const { name, value } = e.target;
			setInput({ ...input, [name]: value });
			if (value.length === 0) {
				setPasswordMessage("8 ~ 20자, 알파벳 대소문자, 숫자, 특수문자로 구성됩니다.");
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

	const onSubmitHandler = e => {
		e.preventDefault();
		if (isName && isPw && isPwConfirm && status) {
			dispatch(__registerManager({ ...input, licenseImage }));
			setInput(init);
			toast.success("회원가입이 성공했습니다.")
			setTimeout(() => {
				navigate("/login");
			}, 1000);
		} else {
			toast.error("입력 내용을 확인해주세요.");
			<Notification status={false} />
		}
	};

	dispatch(__registerManager({ ...input, licenseImage }));


	return (
		<StInputContainer>
			<InputHeader onClick={() => {
				navigate('/')
			}}>Vongole</InputHeader>
			<ToastContainer/>
			<InputForm>
				<InputBox>
					<form onSubmit={onSubmitHandler}>
						<StLegend>Your Basic Info</StLegend>
						<Input
							placeholder="ID"
							autoComplete="off"
							dupleCheck="username"
							status={status}
							nameMessage={nameMessage}
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
							placeholder="Organization Name"
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

						<StLegend>Organization Image</StLegend>
						<ImageWrap>
							<ImageUpload onChangeImage={onChangeImage} uploadPreview={licensePreview} />
						</ImageWrap>
						<StLegend>Organization Manager Contact</StLegend>

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

				<StToLogin>
					이미 Vongole 회원이시라면? ➔ <b onClick={() => navigate("/login")}> Login </b>
				</StToLogin>

			</InputForm>
		</StInputContainer>
	);
};

export default Organization;

const ImageWrap = styled.div`
	display: flex;
	height: fit-content;
	flex-direction: column;
	justify-content: space-around;
	margin-right: 30px;
	align-items: center;
	& span {
		align-items: center;
		font-size: 15px;
	}
	& h4 {
		align-items: center;
		font-size: 20px;
	}
`;
export const StToRegister = styled.span`
	font-weight: 300;
	font-size: 1.2rem;
	margin-top: 2rem;
	margin-bottom: 15rem;
	& b {
		cursor: pointer;
		color: orange;
	}
`;
