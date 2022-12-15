import {
	LoginContainer,
	LoginBox,
	LoginBoxTitle,
	LoginArrowBack,
	LoginForm,
	LoginBtn,
	LoginTitle,
	StLoginOptions,
	StToRegister,
} from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __loginMember } from "../../redux/modules/registerSlice";
import { useEffect, useRef, useState } from "react";
import Input from "../common/input/Input";
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

	const loginRef = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const status = useSelector((state) => state.register.error.response?.data?.error?.detail)
	const authority = useSelector((state) => state.register?.statusCode?.data?.username);
	
	const init = {
		username: "",
		password: "",
	};

	const [input, setInput] = useState(init);

	const onChangeHandler = e => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value });
	};

	const onSubmitHandler = e => {
		e.preventDefault();;
		if (status) {
			toast.error(status);
			setInput(init);
		} else if (input.username && input.password) {
			dispatch(__loginMember(input));
		} else if (input.username === '' || input.password === ''){
			toast.error('항목을 모두 입력해주세요');
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		if (authority) {
			toast.success(authority + '님 반갑습니다!')
			setTimeout(() => {
				navigate('/');
			}, 1000);
		}
	}, [])

	const [loginOption, setLoginOption] = useState("member");

	return (
		<LoginContainer ref={loginRef}>
			<ToastContainer/>
			{loginOption === "member" ? (
				<>
					<StLoginOptions>
						<span
							className={loginOption === "member" ? "selected" : "not-selected"}
							onClick={() => {
								setLoginOption("member");
							}}
						>
							봉사 지원자
						</span>
						<span
							className={loginOption === "manager" ? "selected" : "not-selected"}
							onClick={() => {
								setLoginOption("manager");
							}}
						>
							봉사 기관
						</span>
					</StLoginOptions>

					<LoginBox>
						<LoginBoxTitle>
						<LoginTitle>봉사 지원자</LoginTitle>

							<LoginArrowBack onClick={() => navigate("/")} />
						</LoginBoxTitle>

						<LoginForm onSubmit={onSubmitHandler}>
							<Input

								placeholder="ID"

								type="text"
								name="username"
								value={input.username}
								onChange={onChangeHandler}
							/>
							<Input
								placeholder="비밀번호"
								type="password"
								name="password"
								value={input.password}
								onChange={onChangeHandler}
							/>
							<LoginBtn>로그인</LoginBtn>
						</LoginForm>
					</LoginBox>

					<StToRegister>
						봉사 활동 / 봉사자를 찾고싶다면?
						<b onClick={() => navigate("/register")}>Vongole 회원가입</b>
					</StToRegister>
				</>
			) : null}

			{loginOption === "manager" ? (
				<>
					<StLoginOptions>
						<span
							className={loginOption === "member" ? "selected" : "not-selected"}
							onClick={() => {
								setLoginOption("member");
							}}
						>
							봉사 지원자
						</span>
						<span
							className={loginOption === "manager" ? "selected" : "not-selected"}
							onClick={() => {
								setLoginOption("manager");
							}}
						>
							봉사 기관
						</span>
					</StLoginOptions>

					<LoginBox>
						<LoginBoxTitle>

							<LoginTitle>봉사 기관</LoginTitle>

							<LoginArrowBack onClick={() => navigate("/")} />
						</LoginBoxTitle>

						<LoginForm onSubmit={onSubmitHandler}>
							<Input

								placeholder="ID"

								type="text"
								name="username"
								value={input.username}
								onChange={onChangeHandler}
							/>
							<Input
								placeholder="비밀번호"
								type="password"
								name="password"
								value={input.password}
								onChange={onChangeHandler}
							/>
							<LoginBtn>로그인</LoginBtn>
						</LoginForm>
					</LoginBox>
					<StToRegister>
						봉사 활동 / 봉사자를 찾고싶다면?
						<b onClick={() => navigate("/register")}>Vongole 회원가입</b>
					</StToRegister>
				</>
			) : null}
		</LoginContainer>
	);
};

export default Login;
