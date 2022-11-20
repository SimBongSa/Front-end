import styled from "styled-components";

const Input = ({
  id,
  placeholder,
  dupleCheck,
  type,
  name,
  value,
  onChange,
}) => {
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

      {dupleCheck ? (
          <DupleCheck>중복</DupleCheck>
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
  background: ${(props) => props.theme.WHITE};
  color: ${(props) => props.theme.BLACK};
`;

export const StErrorMsg = styled.span`
  color: tomato;
`;

export const DupleCheck = styled.button` 
  width: 100px;
  position: absolute;
`