import styled from "styled-components";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <span>검색창임</span>
    </SearchBarContainer>
  )
}

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
`