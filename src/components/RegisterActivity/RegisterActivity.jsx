import axios from "axios";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Wrap,
  ImgWrap,
  PhotoWrap,
  ImageLabel,
  ImageInput,
  ImagePreview,
} from "./RegisterActivity.styled";

const RegisterActivity = () => {
  const selectFile = useRef("");
  const [imageToUpload, setImageToUpload] = useState(null);
  const [uploadpreview, setUploadpreview] = useState(null);
  const [data, setData] = useState({});

  const fileUpload = (e) => {
    //1. 이미지 없을 때 처리
    //2. 이미지 용량 제한
    //3. 이미지만 업로드 가능하게 처리하는 법

    setImageToUpload(e.target.files[0]);
    setUploadpreview(URL.createObjectURL(e.target.files[0]));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    console.log("데이터 =>", data);
  };

  const onClickHandler = (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("authorization");
    // const refreshToken = localStorage.getItem("refreshToken");

    const formData = new FormData();
    formData.append("boardImage", imageToUpload);
    formData.append("title", data.title);
    formData.append("content", data.title);
    formData.append("dueDate", data.dueDate);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("area", data.area);

    axios
      .post("http://3.39.193.27:8080/boards", formData, {
        headers: {
          Authorization: accessToken,
          // "Refresh-Token": refreshToken,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function a(response) {
        alert("게시되었습니다.");
      })
      .catch(function (error) {
        console.log(error.response);
      });

    let entries = formData.entries();
    for (const pairs of entries) {
      console.log("폼데이터 =>", pairs[0]);
    }

    // //formData는 콘솔에 찍히지 않아 이 방법으로 찍어야함 2번째
    // for (const value of formData.values()) {
    // console.log("폼데이터:", value);
    // }
  };

  return (
    <div>
      <Wrap onSubmit={onClickHandler}>
        <p>봉사 단체</p>
        <input
          placeholder="봉사 단체 명"
          type="text"
          name="title"
          // value={input.username}
          onChange={(e) => onChangeHandler(e)}
        />
        <p>봉사 모집 시작일</p>
        <input
          type="date"
          name="startDate"
          // value={input.username}
          onChange={(e) => onChangeHandler(e)}
        />
        <p>봉사 모집 마감일</p>
        <input
          type="date"
          name="endDate"
          // value={input.username}
          onChange={(e) => onChangeHandler(e)}
        />
        <p>행사 일</p>
        <input
          type="date"
          name="dueDate"
          // value={input.username}
          onChange={(e) => onChangeHandler(e)}
        />
        <p>행사 장소</p>
        <input
          placeholder="행사 장소"
          type="text"
          name="area"
          // value={input.username}
          onChange={(e) => onChangeHandler(e)}
        />
        <p>봉사 내용 및 설명</p>
        <input
          placeholder="봉사 내용 및 설명"
          type="textarea"
          name="content"
          // value={input.username}
          onChange={(e) => onChangeHandler(e)}
        />

        {/* <img src={mask} alt="mask" /> */}
        <ImgWrap>
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
            <ImagePreview src={uploadpreview} />
          </PhotoWrap>
          <button type="submit">등록</button>
        </ImgWrap>
      </Wrap>
    </div>
  );
};

export default RegisterActivity;
