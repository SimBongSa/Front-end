import { FcCalendar } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { __putApprove, __putDisapprove } from "../../../../redux/modules/mypageSlice";
import { TagBox } from "../../../common/cards/CardGrid.styled";

import { AppliCard, AppliCardImg, AppliCardText, PreviewText, AppliBtnWrap } from "./MyApplicant.styled";

const MyApplicant = ({ list }) => {

  const dispatch = useDispatch();

  return (
    <>
      {
        list.map((item) => {
          return (
            <AppliCard key={item.enrollId}>
              <AppliCardImg>
                <img src={item.boardImage} alt="applicantImage"/>
              </AppliCardImg>

              <AppliCardText>
                <AppliBtnWrap>
                  <button onClick={() => {
                    dispatch(__putApprove(item.enrollId));
                  }}>승인</button>
                  <button onClick={() => {
                    dispatch(__putDisapprove(item.enrollId));
                  }}>거절</button>
                </AppliBtnWrap>
                <h1>{ item.title }</h1>
                <time><FcCalendar/>{item.dueDay}</time>
                <div className="bar"/>
                <PreviewText>StartDate : {item.startDate}</PreviewText>
                <PreviewText>EndDate : {item.endDate}</PreviewText>
                <PreviewText>Name : {item.username}</PreviewText>
                <PreviewText>Address : {item.area}</PreviewText>
                <TagBox>
                  {
                    list.tags?.map((item) => {
                      return (
                        <li>{item}</li>
                      )
                    })
                  }
                </TagBox>
              </AppliCardText>
      
            </AppliCard>
          )
        })
      }
    </>
  )
};

export default MyApplicant;