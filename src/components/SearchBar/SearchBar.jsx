import { SearchBarContainer, SearchBarBtn } from "./SearchBar.styled";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <form>
        <input />
        <input type="date" />
        <input type="date" />
        <input />
        <SearchBarBtn>asd</SearchBarBtn>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;