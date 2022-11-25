import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getUserEnroll, __getUserInfo, __getUserPass, __getUserReject, __getUserWait } from "../../../redux/modules/mypageSlice";

import Profile from "../Profile/Profile";
import CardGrid from "../../common/cards/CardGrid"
import styled from "styled-components";
import MyProcess from "../MyProcess/MyProcess";
import { MyPageCards } from "./UserPage.styled";

const UserPage = () => {

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.mypage?.userInfo);
  const userEnroll = useSelector((state) => state.mypage?.userEnroll);
  const userWait = useSelector((state) => state.mypage?.userWait);
  const userPass = useSelector((state) => state.mypage?.userPass);
  const userReject = useSelector((state) => state.mypage?.userReject);

  console.log(userPass.length)

  useEffect(() => {
    dispatch(__getUserInfo());
    dispatch(__getUserEnroll());
    dispatch(__getUserWait());
    dispatch(__getUserPass());
    dispatch(__getUserReject());
  }, [dispatch])

  const [userPageOpt, setUserPageOpt] = useState("wait");
  console.log(userPageOpt)

  return (
    <>
      <Profile
        userInfo={userInfo}
        userPageOpt={userPageOpt}
        setUserPageOpt={setUserPageOpt}
      />
      <UserPageContainer>
        <MyProcess
          userEnroll={userEnroll.length}
          userWait={userWait.length}
          userPass={userPass.length}
          userReject={userReject.length}
          setUserPageOpt={setUserPageOpt}
        />
        {
          userPageOpt === "enroll" ? (
            <MyPageCards>
              <h1>봉사 신청 내역</h1>
              <CardGrid
                userEnroll={userEnroll}
                gridColumn={1}
              />
            </MyPageCards>
          ) : null
        }

        {
          userPageOpt === "wait" ? (
            <MyPageCards>
              <h1>승인 대기중</h1>
              <CardGrid
                userEnroll={userWait}
                gridColumn={1}
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
                gridColumn={1}
              />
            </MyPageCards>
          ) : null
        }

        {
          userPageOpt === "reject" ? (
            <MyPageCards>
              <h1>거절된 봉사 내역</h1>
              <CardGrid
                userEnroll={userReject}
                gridColumn={1}
              />
            </MyPageCards>
          ) : null
        }
      </UserPageContainer>
    </>
  )
};

export default UserPage;

export const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10rem;
  margin-left: 5rem;
  @media ( max-width: 1024px) {
    margin: 0 auto;
    margin-top: 10rem;
    float: right;
  }
`