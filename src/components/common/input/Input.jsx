import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __checkNickname, __checkUsername } from "../../../redux/modules/registerSlice";

const Input = ({
  id,
  placeholder,
  dupleCheck,
  type,
  name,
  value,
  onChange,
}) => {

  const dispatch = useDispatch();
  const checkMsg = useSelector((state) => state)

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
          <DupleCheck onClick={() => {
            console.log(value)
            dispatch(__checkUsername(value))
          }}>중복체크</DupleCheck>
      ) : null}

      {dupleCheck === "nickname" ? (
          <DupleCheck onClick={() => {
            console.log(value)
            dispatch(__checkNickname(value))
          }}>중복체크</DupleCheck>
      ) : null}

      {type === "radio" ? <span>{value}</span> : null}
    </StInputContainer>
  );
};

export default Input;

export const StInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StInput = styled.input`
  margin: 12px;
  font-size: 15px;
  padding: 20px;
  width: 360px;
  padding-left: 20px;
  border: none;
  border-radius: 15px;
  outline: none;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.WHITE};
  color: ${(props) => props.theme.BLACK};
`;

export const StErrorMsg = styled.span`
  color: tomato;
`;

export const DupleCheck = styled.span` 
  width: 100px;
  position: absolute;
  right: 10px;
`;
