import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Wrap, ImgSize } from "./Recruit.styled";
import PopupDom from "../Map/PopupDom";
import PopupPostCode from "../Map/PopupPostCode";
import styled from "styled-components";
import Input from "../common/input/Input";
import { __createBoard } from "../../redux/modules/boardSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { ko } from "date-fns/esm/locale";

const Recruit = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // date picker
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

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
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, area: address });
  };

  //이미지 스테이트저장, 미리보기 온체인지 핸들러
  const onChangeImage = (e) => {
    setBoardImage(e.target.files[0]);
    let reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setUploadpreview([...uploadpreview, previewImgUrl]);
      }
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __createBoard({
        ...input,
        boardImage,
        startDate: moment(startDate).format("YYYY-MM-DD"),
        endDate: moment(endDate).format("YYYY-MM-DD"),
      })
    );
  };

  return (
    <RecruitContainer>
      <RecruitTitle>봉사활동 등록하기</RecruitTitle>
      <Wrap onSubmit={submitHandler}>
        <RecruitLeft>
          <legend>봉사 활동에 대해 궁금해요!</legend>
          <p>봉사 단체</p>
          <Input
            placeholder="봉사 단체 명"
            type="text"
            name="title"
            value={input.title}
            onChange={(e) => onChangeInput(e)}
          />

          <p>봉사 날짜 선택</p>
          <>
            <DatePicker
              locale={ko}
              dateFormat="yyyy년-MM월-dd일"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
            <DatePicker
              locale={ko}
              dateFormat="yyyy년-MM월-dd일"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </>
          <p>행사 일</p>
          <Input
            type="date"
            name="dueDay"
            value={input.dueDay}
            onChange={(e) => onChangeInput(e)}
          />
          <p>봉사 내용 및 설명</p>
          <RecruitTA
            placeholder="봉사 내용 및 설명"
            type="textarea"
            name="content"
            value={input.content}
            onChange={(e) => onChangeInput(e)}
          />
        </RecruitLeft>
        <RecruitRight>
          <ImgSize src={uploadpreview} alt="" />
          <Input
            name="thumbNail"
            type={"file"}
            accept={"image/*"}
            placeholder="이미지업로드"
            onChange={onChangeImage}
          />
          <p>행사 장소</p>
          <Input
            placeholder="행사 장소"
            type="text"
            name="area"
            value={address}
          />
          {/* // 버튼 클릭 시 팝업 생성 */}
          <AreaBtn type="button" onClick={openPostCode}>
            우편번호 검색
          </AreaBtn>
          {/* // 팝업 생성 기준 div */}
          <div id="popupDom" style={{ position: "fixed" }}>
            {isPopupOpen && (
              <PopupDom>
                <PopupPostCode
                  setAddress={setAddress}
                  onClose={closePostCode}
                />
              </PopupDom>
            )}
          </div>
          <p>행사 상세 주소</p>
          <Input
            type="text"
            name="detailArea"
            value={input.detailArea}
            onChange={(e) => onChangeInput(e)}
          />
          <RecruitBtn type="submit">봉사 등록하기</RecruitBtn>
        </RecruitRight>
      </Wrap>
    </RecruitContainer>
  );
};

export default Recruit;

export const RecruitContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-left: 20rem;
  margin-top: 10rem;
  & legend {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    margin-left: 0;
  }
  @media screen and (max-width: 1024px) {
    margin: 0;
  }
`;

export const RecruitTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 4rem;
`;

export const RecruitLeft = styled.div`
  width: 50%;
  float: left;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
    float: none;
  }
`;

export const RecruitRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  float: right;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
    float: none;
  }
`;

export const RecruitBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 25px;
  width: 150px;
  padding: 1rem;
  font-size: 1rem;
  margin-left: 7.5rem;
  @media screen and (max-width: 1024px) {
    bottom: -42rem;
  }
`;

export const AreaBtn = styled.button`
  width: 150px;
  margin-bottom: 1rem;
`;

export const RecruitTA = styled.textarea`
  margin: 1rem;
  width: 350px;
  border: none;
  border-radius: 2px;
  height: 150px;
`;
