import { useState } from "react";
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
import { IoIosArrowDown } from "react-icons/io";

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

  console.log(input)

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
    <div data-spy="scroll" data-target="#navbar">
      <RecruitContainer>
        <RecruitNav id="navbar">
          <ul className="nav">
            <li role="presentation" className="active">
              <a href="#section1">
                <span className="counter">01</span>
                <h3 className="title">Intro</h3>
                <p className="body">봉사활동 이름이랑 이것 저것 적으셈</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section2">
                <span className="counter">02</span>
                <h3 className="title">Section 02</h3>
                <p className="body">봉사활동 이름이랑 이것 저것 적으셈</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section3">
                <span className="counter">03</span>
                <h3 className="title">Section 03</h3>
                <p className="body">봉사활동 이름이랑 이것 저것 적으셈</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section4">
                <span className="counter">04</span>
                <h3 className="title">Section 04</h3>
                <p className="body">봉사활동 이름이랑 이것 저것 적으셈</p>
              </a>
            </li>
          </ul>
          <ScrollDown/>
        </RecruitNav>

        <form onSubmit={submitHandler}>
          <RecruitSec className="section section1" id="section1">
            <h1>봉사활동 등록하기</h1>
            <Input
              placeholder="제목"
              type="text"
              name="title"
              value={input.title}
              onChange={(e) => onChangeInput(e)}
            />
          </RecruitSec>

          <RecruitSec className="section section2" id="section2">
            <h1>언제, 어디서 열리나요?</h1>
            {/* <CustomeDatePicker
                locale={ko}
                dateFormat="📅 yyyy년-MM월-dd일"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
            <CustomeDatePicker
              locale={ko}
              dateFormat="📅 yyyy년-MM월-dd일 "
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            /> */}
            <Input
              type="date"
              name="dueDay"
              value={input.dueDay}
              onChange={(e) => onChangeInput(e)}
            />
            <Input
              placeholder="행사 장소"
              type="text"
              name="area"
              defaultValue={address}
              // readOnly
            />
            <AreaBtn type="button" onClick={openPostCode}>
              우편번호 검색
            </AreaBtn>
            <div id="popupDom">
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode
                    setAddress={setAddress}
                    onClose={closePostCode}
                  />
                </PopupDom>
              )}
            </div>
            <Input
              placeholder="상세 주소"
              type="text"
              name="detailArea"
              value={input.detailArea}
              onChange={(e) => onChangeInput(e)}
            />
          </RecruitSec>

          <RecruitSec className="section section3" id="section3">
            <h1>봉사활동을 잘 나타내 줄 이미지를 올려보세요</h1>
            <ImgSize src={uploadpreview} alt="" />
            <Input
              name="thumbNail"
              type={"file"}
              accept={"image/*"}
              placeholder="이미지업로드"
              onChange={onChangeImage}
            />
          </RecruitSec>

          <RecruitSec className="section section4" id="section4">
            <h1>마지막으로, 어떤 자원봉사자를 희망하시나요?</h1>
            <RecruitTag>
              Tag1
            </RecruitTag>
            <button>봉사활동 등록하기</button>
          </RecruitSec>
        </form>


        {/* <RecruitTitle>봉사활동 등록하기</RecruitTitle>
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
              <CustomeDatePicker
                locale={ko}
                dateFormat="📅 yyyy년-MM월-dd일"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <CustomeDatePicker
                locale={ko}
                dateFormat="📅 yyyy년-MM월-dd일 "
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
            // 버튼 클릭 시 팝업 생성
            <AreaBtn type="button" onClick={openPostCode}>
              우편번호 검색
            </AreaBtn>
            // 팝업 생성 기준 div
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
        </Wrap> */}
      </RecruitContainer>
    </div>
  );
};

export default Recruit;

export const RecruitContainer = styled.div`
  min-height: 80vh;
  font-weight: 300;
  color: ${(props) => props.theme.textColor};
  position: relative; 
  margin-top: -3rem;
`;

export const RecruitNav = styled.nav`
  position: fixed;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  margin: 0 0 100px 30px; 
  & a {
    text-decoration: none;
  }
  & .counter {
    font-size: 24px;
    transition: all 0.15s ease-out;
  }
  & .title {
    font-size: 24px;
    font-weight: 300;
    margin: 0 0 0.25em;
    width: 300px;
    overflow: hidden;
    transition: height 0.3s ease-out;
  }
  & .body {
    font-weight: 100;
    font-size: 12px;
    width: 300px;
    overflow: hidden;
    transition: height 0.3s ease-out;
  }
  & li {
    position: relative;
    transition: all 0.3s ease-out;
    margin-bottom: 3rem;
    &:after {
      content: '';
      display: block;
      border-left: 2px solid ${(props) => props.theme.textColor};
      border-top: 2px solid ${(props) => props.theme.textColor};
      height: 250px;
      width: 20px;
      position: absolute;
      left: -30px;
      top: 15px;
    }
    & a {
      display: block;
      padding: 0;
      color: ${(props) => props.theme.textColor};
      transition: all 0.15s ease-out;
      &:hover {
        padding-left: 1em
      }
    }
    & .active {
      pointer-events: none;
      padding-left: 1em;
      &:after {
        width: 35px;
        height: 400px;
        top: 35px;
      }
      .counter {
        font-size: 48px;
      }
      .title {
        height: 40px;
        opacity: 1;
        overflow: visible;
      }
      .body {
        height: 100px;
        opacity: 1;
        overflow: visible;
      }
    }
  }
`

export const RecruitSec = styled.section`
  height: 100vh;
  font-size: 40px;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    margin-bottom: 3rem;
  }
`

export const RecruitTag = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  & ul,
  & li {
    list-style: none;
    margin: 1rem;
    padding: 0;
  }
`


export const ScrollDown = styled(IoIosArrowDown)`
  position: fixed;
  left: 48%;
  font-size: 3rem;
`

// export const RecruitContainer = styled.div`
//   display: flex;
//   margin: 0 auto;
//   width: 100%;
//   justify-content: space-between;
//   flex-direction: column;
//   margin-top: 10rem;
//   & legend {
//     font-size: 1.4rem;
//     margin-bottom: 1.5rem;
//     margin-left: 0;
//   }
//   @media screen and (max-width: 1024px) {
//     margin-top: 15rem;
//   }
// `;

export const RecruitTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
`;

export const RecruitLeft = styled.div`
  width: 50%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    float: none;
  }
`;

export const RecruitRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
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

const CustomeDatePicker = styled(DatePicker)({
  margin: "12px",
  fontSize: "15px",
  padding: "20px",
  width: "360px",
  paddingLeft: "20px",
  border: "none",
  borderRadius: "15px",
  outline: "none",
  marginBottom: "1rem",
  background: "whitesmoke",
});