import { useEffect } from "react";
import { useRef, useState } from "react";

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
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useState(false);
  const node = useRef();

  //search state
  const [search, setSearch] = useState({
    category: "",
    date: "",
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

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(search);
  const onSubmitHandler = (e) => {};

  return (
    <SearchBarContainer
      ref={node}
      modal={modal}
      animation={animation}
      onSubmit={onSubmitHandler}
    >
      {modal === false ? (
        <SearchBarOpen onClick={() => setModal((prev) => !prev)}>
          봉사 검색하기
        </SearchBarOpen>
      ) : (
        <SearchModal animation={animation}>
          <SearchBarWrapper>
            <SearchLabel>
              <SearchList>
                <li>
                  <h4 onChange={onChangeHandler}>Category</h4>
                  <input />
                </li>
                <li>
                  <h4>Date</h4>
                  <input type="date" />
                </li>
                <li>
                  <h4>Location</h4>
                  <select>
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
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
