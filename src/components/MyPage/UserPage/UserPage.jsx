import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getUserEnroll, __getUserInfo, __getUserPass, __getUserWait } from "../../../redux/modules/mypageSlice";

import Profile from "../Profile/Profile";
import CardGrid from "../../common/cards/CardGrid"
import styled from "styled-components";

const UserPage = () => {

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.mypage?.userInfo);
  const userEnroll = useSelector((state) => state.mypage?.userEnroll);
  const userWait = useSelector((state) => state.mypage?.userWait);
  const userPass = useSelector((state) => state.mypage?.userPass);
  console.log("/enroll", userEnroll)
  console.log("/enroll/wait =>", userWait)
  console.log("/enroll/pass => ", userPass)

  useEffect(() => {
    dispatch(__getUserInfo());
    dispatch(__getUserEnroll());
    dispatch(__getUserWait());
    dispatch(__getUserPass());
  }, [dispatch])

  const [userPageOpt, setUserPageOpt] = useState(null);
  console.log(userPageOpt)

  return (
    <>
      <Profile
        userInfo={userInfo}
        userPageOpt={userPageOpt}
        setUserPageOpt={setUserPageOpt}
      />
      <Test/>
      {
        userPageOpt === "wait" ? (
          <MyPageCards>
            <h1>봉사 신청 내역</h1>
            <CardGrid
              userEnroll={userWait}
            />
          </MyPageCards>
        ) : null
      }

      {
        userPageOpt === "pass" ? (
          <MyPageCards>
            <h1>참여 봉사 관리</h1>
            <CardGrid
              userEnroll={userPass}
            />
          </MyPageCards>
        ) : null
      }

    </>
  )
};

export default UserPage;

export const MyPageCards = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  margin-top: 5rem;
  margin-right: 10rem;
  & h1 {
    font-size: 2rem;
    margin: 1rem;
  }
  @media ( max-width: 1024px) {
    margin: 0 auto;
    margin-top: 10rem;
    align-items: center;
  }
`

export const Test = styled.div`
  margin-top: 10rem;
`