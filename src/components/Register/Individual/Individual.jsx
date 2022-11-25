import { InputContainer, InputForm, InputBox } from "./Individual.styled";
import Input from "../../common/input/Input";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __registerMember } from "../../../redux/modules/registerSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProcessBar from "../ProcessBar/ProcessBar";
import { BtnContainer } from "../Organization/Organization";

const Individual = () => {
  const init = {
    authority: "ROLE_MEMBER",
    username: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
    email: "",
    phoneNumber: "",
    name: "",
    gender: "",
    birthdate: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState(init);

  const [step, setStep] = useState(0);

  const nicknameCheck = useSelector((state) => state.register.nicknameCheck)
  const usernameCheck = useSelector((state) => state.register.usernameCheck)
  // console.log("nickname", nicknameCheck)
  // console.log("username", usernameCheck)

  // 오류메시지 상태 저장
  const [nameMessage, setNameMessage] = useState('')
  const [nicknameMessage, setNicknameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [pwConfirmMessage, setPwConfirmMessage] = useState('');

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwConfirm, setIsPwConfirm] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setInput({ ...input, [name]: value });
  };

  const onUsernameChange = useCallback((e) => {
    const usernameRegex = /^[a-zA-Z0-9]{4,16}$/;
    const { name, value } = e.target;
    console.log(value)
    setInput({ ...input, [name]: value });
    if (value.length < 4 || value.length > 12) {
      setNameMessage('4글자 이상 12글자 미만으로 입력해주세요.');
      setIsName(false);
      if (!usernameRegex.test(value)) {
        setNameMessage('형식이 틀렸읍니다. 확인 바랍니다.');
      }
    } else {
      setNameMessage('사용 가능합니다.');
      setIsName(true);
    }
  }, []);

  const onNicknameChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setInput({ ...input, [name]: value });
    if (value < 4 || value > 12) {
      setNicknameMessage('4글자 이상 12글자 미만으로 입력해주세요.');
      setIsNickname(false);
    } else {
      setNicknameMessage('사용 가능합니다.');
      setIsNickname(true);
    }
  };

  const onPwChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setInput({ ...input, [name]: value });
    if (value < 4 || value > 12) {
      setPasswordMessage('4글자 이상 12글자 미만으로 입력해주세요.');
      setIsPw(false);
    } else {
      setPasswordMessage('사용 가능합니다.');
      setIsPw(true);
    }
  };

  const onPwConfirmChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setInput({ ...input, [name]: value });
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__registerMember(input));
    setInput(init);
  };

  return (
    <InputContainer>
      <h1>You are almost done!</h1>
      <ProcessBar step={step} />
      <InputForm>
        <InputBox>
          <form onSubmit={onSubmitHandler}>
            {step === 0 ? (
              <>
                <StLegend>Your Basic Info</StLegend>
                <Input
                  placeholder="Username"
                  autoComplete="off"
                  dupleCheck="username"
                  type="text"
                  name="username"
                  value={input.username}
                  onChange={onUsernameChange}
                />
                <span>{nameMessage}</span>
                <Input
                  placeholder="Nickname"
                  dupleCheck="nickname"
                  type="text"
                  name="nickname"
                  value={input.nickname}
                  onChange={onNicknameChange}
                />
                <span>{nicknameMessage}</span>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={onPwChange}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  name="passwordConfirm"
                  value={input.passwordConfirm}
                  onChange={onPwConfirmChange}
                />
              </>
            ) : null}
            {step === 1 ? (
              <>
                <Input
                  placeholder="Email"
                  dupleCheck={true}
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={onChangeHandler}
                />
                <Input
                  placeholder="PhoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={onChangeHandler}
                />
              </>
            ) : null}

            {step === 2 ? (
              <>
                <Input
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={onChangeHandler}
                />
                <Input
                  placeholder="Birth Date"
                  type="date"
                  name="birthdate"
                  value={input.birthdate}
                  onChange={onChangeHandler}
                />
                <Input
                  id="male"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={onChangeHandler}
                />
                <Input
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={onChangeHandler}
                />
              </>
            ) : null}

            {step === 3 ? (
              <>
                <h4>추카합니당 이제 봉사활동 해보셈</h4>
                <button type="submit">로구인</button>
              </>
            ) : null}
          </form>
          <BtnContainer>
            {step === 3 ? (
              <button>.</button>
            ) : (
              <button
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                다음
              </button>
            )}
            {step === 0 ? (
              <button>.</button>
            ) : (
              <button
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                이전
              </button>
            )}
          </BtnContainer>
        </InputBox>
        <span onClick={() => navigate("/login")}>
          You are already member? Log in Now
        </span>
      </InputForm>
    </InputContainer>
  );
};

export default Individual;

export const Gender = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
`;

export const StLegend = styled.legend`
  font-size: 1.4em;
  margin-bottom: 10px;
  text-align: left;
`;
