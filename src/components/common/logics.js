// // export function is[a-zA-Z\d]*${3,12}[a-z\d]*${3,32}

// // username: 4~16자로 구성
// // password: 영문자+숫자+특수문자 최소 1개 이상 포함, 8~16자로 구성
// // email: 원래 이메일 형식에 맞게 입력
// import { useState } from "react";

// //오류메시지 상태저장
// const [usernameMessage, setUsernameMessage] = useState("");
// const [passwordMessage, setPasswordMessage] = useState("");
// const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

// //유효성 검사
// const [isName, setIsName] = useState(false);
// const [isPassword, setIsPassword] = useState(false);
// const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

// const usernameRegEx = /^[a-zA-Z0-9]{4,16}$/;
// const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,16}$/;

// export const usernameCheck = (username) => {
//   if (username.match(usernameRegEx) === null) {
//     setIsName(false);
//     setUsernameMessage("아이디를 확인해주세요");
//     return;
//   } else {
//     setIsName(true);
//     setUsernameMessage("아이디가 맞습니다");
//   }
// };

// export const passwordCheck = (password) => {
//   if (password.match(passwordRegEx) === null) {
//     setIsPassword(false);
//     setPasswordMessage("비밀번호를 확인해주세요");
//     return;
//   } else {
//     setIsPassword(true);
//     setPasswordMessage("비밀번호가 맞습니다");
//   }
// };

export const checkUsername = (e) => {
  //  8 ~ 10자 영문, 숫자 조합
  const regExp = /^[a-zA-Z0-9]{4,16}$/;
  // 형식에 맞는 경우 true 리턴
  console.log("아이디 유효성 검사 :: ", regExp.test(e.target.value));
};

export const checkPassword = (e) => {
  //  8 ~ 10자 영문, 숫자 조합
  const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,16}$/;
  // 형식에 맞는 경우 true 리턴
  console.log("비밀번호 유효성 검사 :: ", regExp.test(e.target.value));
};
