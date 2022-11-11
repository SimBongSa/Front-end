import axios from "axios";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  ImgWrap,
  PhotoWrap,
  ImageLabel,
  ImageInput,
  ImagePreview,
} from "./RegisterActivity.styled";

const RegisterActivity = () => {
  const selectFile = useRef("");
  const [imageToEdit, setImageToEdit] = useState(null);
  const [editpreview, setEditpreview] = useState(null);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const fileUpload = (e) => {
    //1. 이미지 없을 때 처리
    //2. 이미지 용량 제한
    //3. 이미지만 업로드 가능하게 처리하는 법

    setImageToEdit(e.target.files[0]);
    setEditpreview(URL.createObjectURL(e.target.files[0]));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("authorization");
    // const refreshToken = localStorage.getItem("refreshToken");

    const formData = new FormData();
    formData.append("image", imageToEdit);
    // formData.append("title", data.username); //📌

    axios
      .put("http://3.38.153.4:8080/mypage/images", formData, {
        headers: {
          Authorization: accessToken,
          // "Refresh-Token": refreshToken,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function a(response) {
        alert("게시되었습니다.");
        window.location.replace("/");
      })
      .catch(function (error) {
        console.log(error.response);
      });

    let entries = formData.entries();
    for (const pairs of entries) {
      console.log(pairs[0]);
    }

    // //formData는 콘솔에 찍히지 않아 이 방법으로 찍어야함 2번째
    // for (const value of formData.values()) {
    // console.log("폼데이터:", value);
    // }
  };

  return (
    <div>
      <input
        placeholder="봉사 단체 명"
        type="text"
        name="title"
        // value={input.username}
        // onChange={(e) => onChangeHandler(e)}
      />
      <input
        placeholder="봉사 모집 시작"
        type="date"
        name="title"
        // value={input.username}
        // onChange={(e) => onChangeHandler(e)}
      />
      <input
        placeholder="봉사 모집 마감"
        type="date"
        name="title"
        // value={input.username}
        // onChange={(e) => onChangeHandler(e)}
      />
      <input
        placeholder="주소"
        type="text"
        name="title"
        // value={input.username}
        // onChange={(e) => onChangeHandler(e)}
      />
      <input
        placeholder="설명"
        type="textarea"
        name="title"
        // value={input.username}
        // onChange={(e) => onChangeHandler(e)}
      />

      <ImgWrap onSubmit={submitHandler}>
        {/* <img src={mask} alt="mask" /> */}
        <PhotoWrap>
          <ImageLabel
            htmlFor="file"
            // style={{ display: "none" }}
            ref={selectFile}
          />
          <ImageInput
            placeholder="업로드"
            id="file"
            type={"file"}
            accept={"image/*"}
            onChange={fileUpload}
          />
          <ImagePreview src={editpreview} />
        </PhotoWrap>
        <button
          type="submit"
          onClick={() => {
            navigate("/my_page");
          }}
        >
          등록
        </button>
      </ImgWrap>
    </div>
  );
};

export default RegisterActivity;
