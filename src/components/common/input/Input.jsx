import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __checkUsername } from "../../../redux/modules/registerSlice";
import { StInputContainer, StInput, DupleCheck } from "./Input.styled";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

const Input = ({
	id,
	placeholder,
	dupleCheck,
	status,
	type,
	name,
	value,
	onChange,
	defaultValue,
	key,
	nameMessage,
	onClick,
}) => {

	const dispatch = useDispatch();
	
	const [passwordType, setPasswordType] = useState({
		type: 'password',
		visible: false,
	});

	const handlePasswordType = (e) => {
		setPasswordType(() => {
			if (!passwordType.visible) {
				return { type: 'text', visible: true };
			}
			return { type: 'password', visible: false }
		})
	};

	return (
		<StInputContainer>
			{type === "text" ? (
				<>
					<StInput
						id={id}
						placeholder={placeholder}
						autoComplete="off"
						type={type}
						name={name}
						value={value}
						onChange={onChange}
						defaultValue={defaultValue}
						key={key}
						onClick={onClick}
					/>
					{dupleCheck === "username" ? (
						nameMessage === "사용 가능합니다." ? (
							<>
								<DupleCheck
									onClick={() => {
										dispatch(__checkUsername(value));
									}}
								>
									중복체크
								</DupleCheck>
								{
									status ? <StSuccessMsg>중복확인 완료</StSuccessMsg> : null
								}
							</>
						) : null
					) : null}
				</>
			) : null}

			{
				type === "password" ? 
					<>
						<StInput
							id={id}
							placeholder={placeholder}
							autoComplete="off"
							type={passwordType.type}
							name={name}
							value={value}
							onChange={onChange}
							defaultValue={defaultValue}
							key={key}
							onClick={onClick}
						/>
						{
							passwordType.visible ? <StPwInvisible onClick={handlePasswordType}/> : <StPwVisible onClick={handlePasswordType}>false</StPwVisible>
						}
					</> : 
					null
			}

			{
				type === "email" ?
					<StInput
						id={id}
						placeholder={placeholder}
						autoComplete="off"
						type={type}
						name={name}
						value={value}
						onChange={onChange}
						defaultValue={defaultValue}
						key={key}
						onClick={onClick}
					/> : null
			}

			{
				type === "tel" ?
					<StInput
						id={id}
						placeholder={placeholder}
						autoComplete="off"
						type={type}
						name={name}
						value={value}
						onChange={onChange}
						defaultValue={defaultValue}
						key={key}
						onClick={onClick}
					/> : null
			}

			{
				type === "date" ?
					<StInput
						id={id}
						placeholder={placeholder}
						autoComplete="off"
						type={type}
						name={name}
						value={value}
						onChange={onChange}
						defaultValue={defaultValue}
						key={key}
						onClick={onClick}
					/> : null
			}

			{
				type === "radio" ? 	
					<>
						<StInput
							id={id}
							placeholder={placeholder}
							autoComplete="off"
							type={type}
							name={name}
							value={value}
							onChange={onChange}
							defaultValue={defaultValue}
							key={key}
							onClick={onClick}
						/>
						<span>{value}</span>
					</> : null}
		</StInputContainer>
	);
};

export default Input;

export const StRadioInput = styled.div`
	width: 50%;
`;

export const StSuccessMsg = styled.h6`
	position: absolute;
	z-index: 3;
	margin-left: calc(100% - 80px);
	margin-top: calc(0% + 33px);
	width: 300px;
	color: ${(props) => props.theme.btnColor};
`

export const StPwVisible = styled(AiFillEye)`
	position: absolute;
	cursor: pointer;
	margin-left: calc(100% - 50px);
	margin-top: 29px;
	color: ${(props) => props.theme.btnColor};
	font-size: 1.5rem;
`

export const StPwInvisible = styled(AiFillEyeInvisible)`
	position: absolute;
	cursor: pointer;
	margin-left: calc(100% - 50px);
	margin-top: 29px;
	color: ${(props) => props.theme.btnColor};
	font-size: 1.5rem;
`