import { useState } from "react";
import { useDispatch } from "react-redux";
import { ImgSize } from "./Recruit.styled";
import PopupDom from "../Map/PopupDom";
import PopupPostCode from "../Map/PopupPostCode";
import styled from "styled-components";
import Input from "../common/input/Input";
import { __createBoard } from "../../redux/modules/boardSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { ko } from "date-fns/esm/locale";
import { RecruitContainer, RecruitNav, ScrollDown, RecruitSec, TagWrap, TagColumn, AreaBtn, RecruitTA } from "./Recruit.styled";

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
  const [tags, setTags] = useState(null);
  const [boardImage, setBoardImage] = useState(null);
  const [address, setAddress] = useState("");


  console.log("input =>", input)

  // 이미지 미리보기 스테이트
  const [uploadpreview, setUploadpreview] = useState("");

  //텍스트데이터 스테이즈 저장
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, area: address, tags: tags });
  };

  const onChangeTags = (e) => {
    const {name, value} = e.target;
    setTags({...tags, [name]: value});
  }
  console.log("tags",tags)

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
            <h1>어떤 봉사활동을 등록하시나요?</h1>
            <TagWrap>
              <TagColumn>
                <h2>Category :</h2>
                <ul>
                  <li>
                    <input type="radio" id="CHILD" name="category" value="CHILD" onChange={onChangeTags}/>
                    <label htmlFor="CHILD">어린이</label>
                  </li>
                  <li>
                    <input type="radio" id="DISABLED" name="category" value="DISABLED" onChange={onChangeTags}/>
                    <label htmlFor="DISABLED">장애인</label>
                  </li>
                  <li>
                    <input type="radio" id="SENIOR" name="category" value="SENIOR" onChange={onChangeTags}/>
                    <label htmlFor="SENIOR">노인</label>
                  </li>
                  <li>
                    <input type="radio" id="MULTICULTURAL_FAMILY" name="category" value="MULTICULTURAL_FAMILY" onChange={onChangeTags}/>
                    <label htmlFor="MULTICULTURAL_FAMILY">다문화가정</label>
                  </li>
                  <li>
                    <input type="radio" id="ENVIROMENT" name="category" value="ENVIROMENT" onChange={onChangeTags}/>
                    <label htmlFor="ENVIROMENT">환경</label>
                  </li>
                  <li>
                    <input type="radio" id="animal" name="category" value="ABANDONED_ANIMAL" onChange={onChangeTags}/>
                    <label htmlFor="animal">유기동물</label>
                  </li>
                </ul>
              </TagColumn>
              <Input
                placeholder="제목"
                type="text"
                name="title"
                value={input.title}
                onChange={(e) => onChangeInput(e)}
              />
              <RecruitTA
                placeholder="봉사 활동을 설명해주세요"
                type="text"
                name="content"
                value={input.content}
                onChange={(e) => onChangeInput(e)}
              />
            </TagWrap>
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
              value={address}
              readOnly
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
            <TagWrap>
              <TagColumn>
                {/* <h2>Conditions :</h2> */}
                <ul>
                  <li>
                    <input type="radio" id="adult" name="conditions" value="ADULT" onChange={onChangeTags}/>
                    <label htmlFor="adult">성인</label>
                  </li>
                  <li>
                    <input type="radio" id="male" name="conditions" value="MALE" onChange={onChangeTags}/>
                    <label htmlFor="male">남성</label>
                  </li>
                  <li>
                    <input type="radio" id="female" name="conditions" value="FEMALE" onChange={onChangeTags}/>
                    <label htmlFor="female">여성</label>
                  </li>
                </ul>
              </TagColumn>
              
              <TagColumn>
                {/* <h2>Skills :</h2> */}
                <ul>
                  <li>
                    <input type="radio" id="ACTIVE" name="skills" value="ACTIVE" onChange={onChangeTags}/>
                    <label htmlFor="ACTIVE">활발한 사람이면 좋아요</label>
                  </li>
                  <li>
                    <input type="radio" id="CAREFUL" name="skills" value="CAREFUL" onChange={onChangeTags}/>
                    <label htmlFor="CAREFUL">꼼꼼한 사람을 원해요</label>
                  </li>
                  <li>
                    <input type="radio" id="MILITARY" name="skills" value="MILITARY" onChange={onChangeTags}/>
                    <label htmlFor="MILITARY">군필자 우대</label>
                  </li>
                  <li>
                    <input type="radio" id="LIKE_CHILD" name="skills" value="LIKE_CHILD" onChange={onChangeTags}/>
                    <label htmlFor="LIKE_CHILD">아이랑 잘 놀아줘야해요</label>
                  </li>
                  <li>
                    <input type="radio" id="LIKE_ANIMAL" name="skills" value="LIKE_ANIMAL" onChange={onChangeTags}/>
                    <label htmlFor="LIKE_ANIMAL">동물을 사랑하는 분</label>
                  </li>
                </ul>
              </TagColumn>
            </TagWrap>
            <button>봉사활동 등록하기</button>
          </RecruitSec>
        </form>
      </RecruitContainer>
    </div>
  );
};

export default Recruit;