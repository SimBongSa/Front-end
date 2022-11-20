import styled from "styled-components";
import Input from "../common/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __putCutomer } from "../../redux/modules/calendarSlice";

function CustomerEdit() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    nickname: "",
    email: "",
    phoneNum: "",
    name: "",
    gender: "",
    age: "",
    introduction: "",
    images: "",
  });
  const [imageSrc, setImageSrc] = useState(null);
  const [prevImage, setPrevImage] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onChangeImage = (e) => {
    setImageSrc(e.target.files[0]);
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImageUrl = reader.result;
      if (previewImageUrl) {
        setPrevImage([...prevImage, previewImageUrl]);
      }
    };
  };
  console.log(imageSrc);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput((prev) => {
      return { ...prev, images: { imageSrc } };
    });
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
          type="text"
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
        <ImgSize src={prevImage} alt="" />
        <Input
          name="memberImage"
          type={"file"}
          accept={"image/*"}
          onChange={onChangeImage}
          placeholder={"memberImage"}
        />

        <button>Edit</button>
      </form>
    </>
  );
}

export default CustomerEdit;

export const ImgSize = styled.img`
  width: 200px;
  height: 200px;
`;
