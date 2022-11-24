import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  __checkNickname,
  __checkUsername,
} from "../../../redux/modules/registerSlice";
import { StInputContainer, StInput, StErrorMsg, DupleCheck } from "./Input.styled";

const Input = ({ id, placeholder, dupleCheck, type, name, value, onChange }) => {
	const dispatch = useDispatch();
	const checkMsg = useSelector(state => state);

	return (
		<StInputContainer>
			{type === "text" || "password" ? (
				<StInputContainer>
					<StInput
						placeholder={placeholder}
						type={type}
						name={name}
						value={value}
						onChange={onChange}
					/>
					{/* <StErrorMsg>아이디 대충 몇 글자임</StErrorMsg> */}
				</StInputContainer>
			) : null}

			{dupleCheck === "username" ? (
				<DupleCheck
					onClick={() => {
						console.log(value);
						dispatch(__checkUsername(value));
					}}
				>
					중복체크
				</DupleCheck>
			) : null}

			{dupleCheck === "nickname" ? (
				<DupleCheck
					onClick={() => {
						console.log(value);
						dispatch(__checkNickname(value));
					}}
				>
					중복체크
				</DupleCheck>
			) : null}

			{type === "radio" ? <span>{value}</span> : null}
		</StInputContainer>
	);
};

export default Input;