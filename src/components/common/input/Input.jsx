import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __checkUsername } from "../../../redux/modules/registerSlice";
import { StInputContainer, StInput, DupleCheck } from "./Input.styled";

const Input = ({
	id,
	placeholder,
	dupleCheck,
	type,
	name,
	value,
	onChange,
	defaultValue,
	key,
	nameMessage,
}) => {
	const dispatch = useDispatch();

	const usernameCheck = useSelector(state => state.register.usernameCheck);

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
								<h6>{usernameCheck}</h6>
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
`