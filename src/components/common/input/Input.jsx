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

  return(
    <StInputContainer>

      {
        type === "text" || "password" ? (
          <StInput 
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        ) : null
      }

      {
        dupleCheck ? (
          <StCheckContainer>
            {/* <span>중복체크</span> */}
            <input id={id} type="checkbox"/>
            <label htmlFor={id}/>
          </StCheckContainer>
        ) : null
      }

      {
        type === "radio" ? "라디오임" : null
      }

    </StInputContainer>
  )
};

export default Input;

export const StInputContainer = styled.div`
  display: flex;
`

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

export const StCheckContainer = styled.div`
  display: block;
  position: absolute;
  height: 25px;
  left: 70%;
  width: 56px;
  background: #182029;
  padding: 3px 0 0;
  margin: 0 auto;
  margin-top: .8rem;
  perspective: 50px;
  -webkit-perspective: 50px;
  -moz-perspective: 50px;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  input {
    opacity: 0;
    /* position: absolute; */
    right: 100%;
    width: 56px;
    height: 20px;
  }
  label {
    display: block;
    /* position: absolute; */
    height: 25px;
    width: 56px;
    outline: none;
    margin: 0 auto;
    -webkit-appearance: none;
    background: none;
    border: none;
	  transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    border-radius: inherit;
    -webkit-border-radius: inherit;
    -moz-border-radius: inherit;
    animation: uncheck 0.6s ease-out;
    -webkit-animation: uncheck 0.6s ease-out;
    -moz-animation: uncheck 0.6s ease-out;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: inherit;
      width: inherit;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      border-radius: inherit;
      -webkit-border-radius: inherit;
      -moz-border-radius: inherit;
      text-align: center;
    }
    &:before {
      z-index: 2;
      transform: rotateY(0deg);
      -webkit-transform: rotateY(0deg);
      -moz-transform: rotateY(0deg);
      background: #E65757;
    }
    &:after {
      transform: rotateY(180deg);
      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      background: #77E371;
    }
  }
  input:checked + label {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    animation: check 0.6s ease-out;
    -webkit-animation: check 0.6s ease-out;
    -moz-animation: check 0.6s ease-out;
  }
  &.flip-switch-icon {
    label {
      &:before, &:after {
        color: white;
        line-height: 32px;
        font-weight: 900;
        font-size: 1.3rem;
      }
      &:before {
        content: 'OFF';
      }
      &:after {
        content: 'ON';
      }
    }
  }
@keyframes check {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(195deg);
  }
  75% {
    transform: rotateY(165deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}

@-webkit-keyframes check {
  0% {
    -webkit-transform: rotateY(0deg);
  }
  50% {
    -webkit-transform: rotateY(195deg);
  }
  75% {
    -webkit-transform: rotateY(165deg);
  }
  100% {
    -webkit-transform: rotateY(180deg);
  }
}

@-moz-keyframes check {
  0% {
    -moz-transform: rotateY(0deg);
  }
  50% {
    -moz-transform: rotateY(195deg);
  }
  75% {
    -moz-transform: rotateY(165deg);
  }
  100% {
    -moz-transform: rotateY(180deg);
  }
}

@keyframes uncheck {
  0% {
    transform: rotateY(180deg);
  }
  50% {
    transform: rotateY(-15deg);
  }
  75% {
    transform: rotateY(15deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

@-webkit-keyframes uncheck {
  0% {
    -webkit-transform: rotateY(180deg);
  }
  50% {
    -webkit-transform: rotateY(-15deg);
  }
  75% {
    -webkit-transform: rotateY(15deg);
  }
  100% {
    -webkit-transform: rotateY(0deg);
  }
}

@-moz-keyframes uncheck {
  0% {
    -moz-transform: rotateY(180deg);
  }
  50% {
    -moz-transform: rotateY(-15deg);
  }
  75% {
    -moz-transform: rotateY(15deg);
  }
  100% {
    -moz-transform: rotateY(0deg);
  }
}
`