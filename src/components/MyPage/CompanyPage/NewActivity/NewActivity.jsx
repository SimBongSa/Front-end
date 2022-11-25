import { NewActivityContainer, NewActivityWrap, NewActivityCard, CardSymbol } from "./NewActivity.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getAppliList } from "../../../../redux/modules/mypageSlice";

const NewActivity = ({ list }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getAppliList())
  })

  return (
    <NewActivityContainer>
      <NewActivityWrap>
        {
          list.map((item) => {
            return (
              <NewActivityCard>
                <CardSymbol>
                  <span>5</span>
                  <span>Day</span>
                </CardSymbol>
                나의 봉사활동임
              </NewActivityCard>
            )
          })
        }
      </NewActivityWrap>
    </NewActivityContainer>
  )
};

export default NewActivity;

