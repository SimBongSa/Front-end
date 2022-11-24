import { useEffect } from "react";
import { useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __postSearch } from "../../redux/modules/calendarSlice";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  SearchBarContainer,
  SearchBarOpen,
  SearchModal,
  SearchBarWrapper,
  SearchLabel,
  SearchList,
  SearchBtn,
  CustomeDatePicker,
  PickerBox,
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
    <SearchBarContainer
      ref={node}
      modal={modal}
      animation={animation}
      onSubmit={onSubmitHandler}
    >
      {modal === false ? (
        <SearchBarOpen onClick={() => setModal((prev) => !prev)}>
          <StMagnifying />
          <span>어떤 봉사활동을 찾고 계세요?</span>
          <MagnityingBtn />
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
                      <option>CHILD</option>
                      <option>DISABLED</option>
                      <option>SENIOR</option>
                      <option>MULTICULTURAL_FAMILY</option>
                      <option>ENVIRONMENT</option>
                      <option>ABANDONED_ANIMAL</option>
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

export const StMagnifying = styled(HiMagnifyingGlass)`
  font-size: 1.5rem;
  margin: 15px;
`;

export const MagnityingBtn = styled(HiMagnifyingGlass)`
  position: fixed;
  font-size: 1rem;
  background: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.bgColor};
  border-radius: 50%;
  padding: 3px;
  width: 35px;
  height: 35px;
  right: 10px;
`;
