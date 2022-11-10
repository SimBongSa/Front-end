import { useState } from "react";
import { useDispatch } from "react-redux";
import { __register } from "../../redux/modules/registerSlice";

const Register = () => {

  const init = {
    username: "",
    password: "",
    passwordConfirm: ""
  }

  const dispatch = useDispatch();

  const [input, setInput] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__register(input))
    setInput(init);
  }

  console.log(input);

  return (
    <form onSubmit={onSubmitHandler}>
      <input 
        placeholder="username"
        type="text"
        name="username"
        value={input.username}
        onChange={(e) => onChangeHandler(e)}
      />
      <input
        placeholder="password"
        type="text"
        name="password"
        value={input.password}
        onChange={(e) => onChangeHandler(e)}
      />
      <input
        placeholder="passwordConfirm"
        type="text"
        name="passwordConfirm"
        value={input.passwordConfirm}
        onChange={(e) => onChangeHandler(e)}
      />
      <button>회원가입</button>
    </form>
  )
};

export default Register;