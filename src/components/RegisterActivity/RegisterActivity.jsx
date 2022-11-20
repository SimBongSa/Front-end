import axios from "axios";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { __createBoard } from "../../redux/modules/boardSlice";
import { Wrap, ImgSize } from "./RegisterActivity.styled";
import PopupDom from "../Map/PopupDom";
import PopupPostCode from "../Map/PopupPostCode";

const RegisterActivity = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const init = {
    title: "",
    content: "",
    dueDay: "",
    startDate: "",
    endDate: "",
    area: "",
    detailArea: "",
  };

  //폼데이터 전송 스테이트
  const [input, setInput] = useState(init);
  const [boardImage, setBoardImage] = useState(null);
  const [address, setAddress] = useState("");

  // 이미지 미리보기 스테이트
  const [uploadpreview, setUploadpreview] = useState("");

  //텍스트데이터 스테이즈 저장
  const onChangeInput = (e) => {
    console.log("인풋=>", input);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, area: address });
  };

  //이미지 스테이트저장
  const onChangeImage = (e) => {
    setBoardImage(e.target.files[0]);

    // 미리보기 온체인지 핸들러
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setUploadpreview(previewImgUrl);
      }
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("등록 직전=>", input);
    dispatch(__createBoard({ ...input, boardImage }));
  };

  // //formData는 콘솔에 찍히지 않아 이 방법으로 찍어야함 2번째
  // for (const value of formData.values()) {
  // console.log("폼데이터:", value);
  // }

  // 주소값

  console.log("address =>", address);

  return (
    <div>
      <Wrap onSubmit={submitHandler}>
        <p>봉사 활동 주제</p>
        <input
          placeholder="봉사 활동 주제"
          type="text"
          name="title"
          value={input.title}
          onChange={(e) => onChangeInput(e)}
        />
        <p>봉사 모집 시작일</p>
        <input
          type="date"
          name="startDate"
          value={input.startDate}
          onChange={(e) => onChangeInput(e)}
        />
        <p>봉사 모집 마감일</p>
        <input
          type="date"
          name="endDate"
          value={input.endDate}
          onChange={(e) => onChangeInput(e)}
        />
        <p>행사 일</p>
        <input
          type="date"
          name="dueDay"
          value={input.dueDay}
          onChange={(e) => onChangeInput(e)}
        />

        <p>행사 장소</p>
        <input
          placeholder="행사 장소"
          type="text"
          name="area"
          value={address}
        />
        {/* // 버튼 클릭 시 팝업 생성 */}
        <button type="button" onClick={openPostCode}>
          우편번호 검색
        </button>
        {/* // 팝업 생성 기준 div */}
        <div id="popupDom" style={{ position: "fixed" }}>
          {isPopupOpen && (
            <PopupDom>
              <PopupPostCode setAddress={setAddress} onClose={closePostCode} />
            </PopupDom>
          )}
        </div>

        <p>행사 상세 주소</p>
        <input
          type="text"
          name="detailArea"
          value={input.detailArea}
          onChange={(e) => onChangeInput(e)}
        />
        <p>봉사 내용 및 설명</p>
        <input
          placeholder="봉사 내용 및 설명"
          type="textarea"
          name="content"
          value={input.content}
          onChange={(e) => onChangeInput(e)}
        />
        <ImgSize src={uploadpreview} alt="" />
        <input
          name="thumbNail"
          type={"file"}
          accept={"image/*"}
          placeholder="이미지업로드"
          onChange={onChangeImage}
        />
        <button type="submit">등록</button>
      </Wrap>
    </div>
  );
};

export default RegisterActivity;
