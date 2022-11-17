import styled from "styled-components";
import SearchCalendar from "./../Calendar/SearchCalendar";
import { useState } from "react";

const SearchBar = () => {
  const [modal, setModal] = useState(false);

  return (
<<<<<<< HEAD
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
=======
    <SearchBarContainer>
      <form>
        <input/>
        <input type="date" />
        <input type="date" />
        <input/>
        <SearchBarBtn>asd</SearchBarBtn>
      </form>
    </SearchBarContainer>
  )
}
>>>>>>> 42ca578544c7c310a57c2f2b253adf54ca85a840

export default SearchBar;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  background-color: whitesmoke;
  width: 60%;
  height: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  margin-top: -35px;
  background-color: tomato;
<<<<<<< HEAD
`;

export const Search = styled.div`
  border: 1px solid black;
  margin-left: 1rem;
  cursor: pointer;
`;

export const Button = styled.button`
  cursor: pointer;
`;
=======
  & input {
    width: 100px;
  }
`

export const SearchBarBtn = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0px 0px 0px 20px;
  border: none;
  background-color: whitesmoke;
`
>>>>>>> 42ca578544c7c310a57c2f2b253adf54ca85a840
