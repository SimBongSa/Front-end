import styled from "styled-components";
import SearchCalendar from "./../Calendar/SearchCalendar";
import { useState } from "react";

const SearchBar = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <SearchBarContainer>
        <input placeholder="Category" />
        <Search onClick={() => setModal(!modal)}>Dates</Search>
        <input placeholder="Location" />
        <Button>검색하기</Button>
      </SearchBarContainer>
      <>{modal === true ? <SearchCalendar /> : null}</>
    </>
  );
};

export default SearchBar;

export const SearchBarContainer = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: whitesmoke;
  width: 60%;
  height: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  margin-top: -35px;
  /* border: 1px solid black; */
  background-color: tomato;
`;

export const Search = styled.div`
  border: 1px solid black;
  margin-left: 1rem;
  cursor: pointer;
`;

export const Button = styled.button`
  cursor: pointer;
`;
