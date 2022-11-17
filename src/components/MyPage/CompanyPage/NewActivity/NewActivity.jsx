import { NewActivityContainer, NewActivityWrap, NewActivityCard, CardSymbol } from "./NewActivity.styled";
import styled from "styled-components";

const NewActivity = () => {
  return (
    <NewActivityContainer>
      <NewActivityWrap>

        <NewActivityCard>
          <CardSymbol>
            <span>5</span>
            <span>Day</span>
          </CardSymbol>
          나의 봉사활동임
        </NewActivityCard>

        <NewActivityCard>
          <CardSymbol>
            <span>5</span>
            <span>Day</span>
          </CardSymbol>
          나의 봉사활동임
        </NewActivityCard>

        <NewActivityCard>
          <CardSymbol>
            <span>5</span>
            <span>Day</span>
          </CardSymbol>
          나의 봉사활동임
        </NewActivityCard>

      </NewActivityWrap>
    </NewActivityContainer>
  )
};

export default NewActivity;

