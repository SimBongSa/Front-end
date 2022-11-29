import { InputForm, InputBox } from "./Individual.styled";
import Input from "../../common/input/Input";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { __registerMember } from "../../../redux/modules/registerSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProcessBar from "../ProcessBar/ProcessBar";
import { InputContainers, InputHeader } from "../Register.styled";
import { BtnContainer } from "../ProcessBar/ProcessBar.styld";

const Individual = () => {
	const init = {
		authority: "ROLE_MEMBER",
		username: "",
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
	console.log(input);

	const [step, setStep] = useState(0);

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

	const onChangeHandler = useCallback(
		e => {
			const { name, value } = e.target;
			setInput({ ...input, [name]: value });
		},
		[input]
	);

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
						setPasswordMessage("형식이 틀렸읍니다. 확인 바랍니다");
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
		dispatch(__registerMember(input));
		setInput(init);
	};

	return (
		<InputContainers>
			<InputHeader>
				<h1>You are almost done!</h1>
				<ProcessBar step={step} setStep={setStep} />
			</InputHeader>

			<InputForm>
				<InputBox>
					<form onSubmit={onSubmitHandler}>
						{step === 0 ? (
							<>
								<StLegend>Your Basic Info</StLegend>
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
							</>
						) : null}
						{step === 1 ? (
							<>
								<StLegend>Your Contact Info</StLegend>
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
						) : null}
						{step === 2 ? (
							<>
								<StLegend>Your Personal Info</StLegend>
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
						) : null}

						{step === 3 ? (
							<>
								<h4>추카합니당 이제 봉사활동 해보셈</h4>
								<button type="submit">회원가입</button>
							</>
						) : null}
					</form>
					<BtnContainer>
						{step === 3 ? (
							<button>.</button>
						) : (
							<button
								onClick={() => {
									setStep(step + 1);
								}}
							>
								다음
							</button>
						)}
						{step === 0 ? (
							<button>.</button>
						) : (
							<button
								onClick={() => {
									setStep(step - 1);
								}}
							>
								이전
							</button>
						)}
					</BtnContainer>
				</InputBox>
				<span onClick={() => navigate("/login")}>You are already member? Log in Now</span>
			</InputForm>
		</InputContainers>
	);
};

export default Individual;

export const Gender = styled.div`
	display: flex;
	margin: 0 auto;
	flex-direction: row;
`;

export const StLegend = styled.legend`
	font-size: 1.4em;
	margin-bottom: 10px;
	text-align: left;
`;
