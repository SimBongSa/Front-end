import { InputForm, InputBox } from "./Individual.styled";
import Input from "../../common/input/Input";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __registerMember } from "../../../redux/modules/registerSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StInputContainer, InputHeader, StRegBtn } from "../Register.styled";
import Notification from "../../common/noti/Notification";
import { toast, ToastContainer } from 'react-toastify';

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
	const status = useSelector(state => state.register.usernameCheck);

	useEffect(() => {
		if (status && isName) {
			toast.success("사용 가능한 아이디입니다.")
		} else if (!status && isName){
			toast.error("중복된 아이디입니다.")
		}
	}, [status])

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

	const onSubmitHandler = e => {
		e.preventDefault();
		if (isName && isPw && isPwConfirm && status) {
			dispatch(__registerMember(input));
			setInput(init);
			toast.success("회원가입이 성공했습니다.")
			navigate("/login");
		} else {
			toast.error("입력 내용을 확인해주세요.");
			<Notification status={false} />
		}
	};

	return (
		<StInputContainer>
			<InputHeader>Vongole</InputHeader>
			<ToastContainer/>
			<InputForm>
				<InputBox>
					<form onSubmit={onSubmitHandler}>
						<StLegend>필수 정보</StLegend>
						<Input
							placeholder="아이디"
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
							placeholder="비밀번호"
							type="password"
							name="password"
							value={input.password}
							onChange={onPwChange}
						/>
						<span>{passwordMessage}</span>
						<Input
							placeholder="비밀번호 확인"
							type="password"
							name="passwordConfirm"
							value={input.passwordConfirm}
							onChange={onPwConfirmChange}
						/>
						<Input
							placeholder="이메일"
							dupleCheck={true}
							type="email"
							name="email"
							value={input.email}
							onChange={onChangeHandler}
						/>
						<span>{pwConfirmMessage}</span>
						<StLegend>선택 정보</StLegend>
						<Input
							placeholder="핸드폰번호"
							type="tel"
							name="phoneNumber"
							value={input.phoneNumber}
							onChange={onChangeHandler}
						/>
						<StLegend>개인 정보</StLegend>
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
						<StGender>
							<Input id="male" type="radio" name="gender" value="male" onChange={onChangeHandler} />
							<Input
								id="female"
								type="radio"
								name="gender"
								value="female"
								onChange={onChangeHandler}
							/>
						</StGender>

						<StRegBtn type="submit">회원가입</StRegBtn>
					</form>
				</InputBox>
				<StToRegister onClick={() => navigate("/login")}>
					이미 봉골레 회원인가요? <b>로그인하기</b>
				</StToRegister>
			</InputForm>
		</StInputContainer>
	);
};

export default Individual;

export const StGender = styled.div`
	display: flex;
	margin: 0 auto;
	flex-direction: row;
	justify-content: space-evenly;
`;

export const StLegend = styled.legend`
	font-size: 1.4em;
	margin-top: 15px;
	margin-bottom: 0px;
	text-align: left;
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
