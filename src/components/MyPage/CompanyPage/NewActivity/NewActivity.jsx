import { NewActivityContainer, NewActivityWrap, NewActivityCard, CardSymbol } from "./NewActivity.styled";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getAppliList } from "../../../../redux/modules/mypageSlice";

const NewActivity = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getAppliList())
  })

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

