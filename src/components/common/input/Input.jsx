import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { __checkUsername } from "../../../redux/modules/registerSlice";
import { StInputContainer, StInput, DupleCheck } from "./Input.styled";
import { toast, ToastContainer } from 'react-toastify';

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

	return (
		<StInputContainer>
			{type === "text" || "password" ? (
				<StInputContainer>
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
				</StInputContainer>
			) : null}

			{type === "radio" ? <span>{value}</span> : null}
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