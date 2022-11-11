import styled from "styled-components";

const Input = ({
  placeholder,
  type,
  name,
  value,
  onChange,
}) => {

  return(
    <StInput 
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
};

export default Input;

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
`