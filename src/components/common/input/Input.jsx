import { useDispatch, useSelector } from "react-redux";
import { __checkNickname, __checkUsername } from "../../../redux/modules/registerSlice";
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

	const nicknameCheck = useSelector(state => state.register.nicknameCheck);
	const usernameCheck = useSelector(state => state.register.usernameCheck);

	return (
		<StInputContainer>
			{type === "text" || "password" ? (
				<StInputContainer>
					<StInput
						placeholder={placeholder}
						autoComplete="off"
						type={type}
						name={name}
						value={value}
						onChange={onChange}
						defaultValue={defaultValue}
						key={key}
					/>
				</StInputContainer>
			) : null}

			{dupleCheck === "username" ? (
				nameMessage === "사용 가능합니다." ? (
					<>
						<DupleCheck
							onClick={() => {
								console.log(value);
								dispatch(__checkUsername(value));
							}}
						>
							중복체크
							<h6>{usernameCheck}</h6>
						</DupleCheck>
					</>
				) : null
			) : null}

			{dupleCheck === "nickname" ? (
				<DupleCheck
					onClick={() => {
						console.log(value);
						dispatch(__checkNickname(value));
					}}
				>
					중복체크
					<h6>{nicknameCheck}</h6>
				</DupleCheck>
			) : null}

			{type === "radio" ? <span>{value}</span> : null}
		</StInputContainer>
	);
};

export default Input;
