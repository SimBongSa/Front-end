import styled from "styled-components";
import Input from "../common/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __putCutomer } from "../../redux/modules/customerSlice";

function CustomerEdit() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    nickname: "",
    memberImage: "",
    email: "",
    phoneNum: "",
    name: "",
    gender: "",
    age: "",
    introduction: "",
  });
  const [imageSrc, setImageSrc] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onUploadImage = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__putCutomer(input));
  };
  return (
    <>
      수정 페이지
      <form onSubmit={onSubmitHandler}>
        <Input
          name="nickname"
          onChange={onChangeHandler}
          value={input?.nickname}
          placeholder={"nickname"}
        />
        <Input
          name="phoneNum"
          onChange={onChangeHandler}
          value={input?.phoneNum}
          placeholder={"phoneNum"}
        />
        <Input
          name="email"
          type="email"
          onChange={onChangeHandler}
          value={input?.email}
          placeholder={"email"}
        />
        <Input
          name="name"
          onChange={onChangeHandler}
          value={input?.name}
          placeholder={"name"}
        />
        <Input
          name="gender"
          onChange={onChangeHandler}
          value={input?.gender}
          placeholder={"gender"}
        />
        <Input
          name="age"
          onChange={onChangeHandler}
          value={input?.age}
          placeholder={"age"}
        />
        <Input
          name="introduction"
          onChange={onChangeHandler}
          value={input?.introduction}
          placeholder={"introduction"}
        />
        <Input
          name="memberImage"
          type="file"
          accept="image/*"
          onChange={onUploadImage}
          value={input?.memberImage}
          placeholder={"memberImage"}
        />
        <div>{imageSrc && <img src={imageSrc} alt="preview-img" />}</div>
        <button>Edit</button>
      </form>
    </>
  );
}

export default CustomerEdit;
