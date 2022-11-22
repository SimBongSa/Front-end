import { useEffect } from "react";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __postSearch } from "../../redux/modules/calendarSlice";
import {
  SearchBarContainer,
  SearchBarOpen,
  SearchModal,
  SearchBarWrapper,
  SearchLabel,
  SearchList,
  SearchBtn,
} from "./SearchBar.styled";

const SearchBar = () => {
  const dispatch = useDispatch;
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useState(false);
  const node = useRef();

  // date picker
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  //search state
  const [search, setSearch] = useState({
    category: "",
    startDate: moment(startDate).format("YYYY-MM-DD"),
    endDate: moment(startDate).format("YYYY-MM-DD"),
    location: "",
  });

  // modal 바깥 클릭 시 닫히는 기능
  useEffect(() => {
    const clickOutside = (e) => {
      if (modal && node.current && !node.current.contains(e.target)) {
        // 근데 너무 안이뻐서 delay 줌
        setAnimation(true);
        setTimeout(() => {
          setAnimation(false);
          setModal(false);
        }, 500);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [modal]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__postSearch(search));
    setSearch();
  };

  return (
    <SearchBarContainer ref={node} modal={modal} animation={animation}>
      {modal === false ? (
        <SearchBarOpen onClick={() => setModal((prev) => !prev)}>
          봉사 검색하기
        </SearchBarOpen>
      ) : (
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <SearchModal animation={animation}>
            <SearchBarWrapper>
              <SearchLabel>
                <SearchList>
                  <li>
                    <h4>Category</h4>
                    <select
                      value={search.category?.search.category}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    >
                      <option>전체</option>
                      <option>아동,청소년</option>
                      <option>장애인</option>
                      <option>노인</option>
                      <option>다문화가정</option>
                      <option>환경</option>
                      <option>유기동물</option>
                    </select>
                  </li>
                  <li>
                    <>
                      <PickerBox>
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
                      </PickerBox>
                    </>
                  </li>
                  <li>
                    <h4>Location</h4>
                    <select
                      value={search.location?.search.location}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    >
                      <option>서울</option>
                      <option>경기</option>
                      <option>인천</option>
                      <option>강원</option>
                      <option>충북</option>
                      <option>충남</option>
                      <option>세종</option>
                      <option>전북</option>
                      <option>전남</option>
                      <option>경북</option>
                      <option>경남</option>
                      <option>제주</option>
                    </select>
                  </li>
                </SearchList>
                <SearchBtn stybe="submit">검색</SearchBtn>
              </SearchLabel>
            </SearchBarWrapper>
          </SearchModal>
        </form>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;

const CustomeDatePicker = styled(DatePicker)({
  display: "flex",
  fontSize: "15px",
  width: "50rem",
  border: "none",
  borderRadius: "15px",
  outline: "none",
  background: "whitesmoke",
});

const PickerBox = styled.div`
  display: flex;
`;
