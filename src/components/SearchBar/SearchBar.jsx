import styled from "styled-components";

const SearchBar = () => {
  return (
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