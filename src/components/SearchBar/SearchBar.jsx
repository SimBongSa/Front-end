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
  max-width: 50rem;
  min-width: 20rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  margin-top: -35px;
  /* border: 1px solid black; */
  background-color: tomato;
  @media ( max-width: 1024px) {
    width: 700px;
  }
  @media ( max-width: 768px) {
    width: 250px;
  }
`