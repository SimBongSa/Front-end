import {
  ProfileContainer,
  ProfileBox,
  ProfileCategory,
  ProfileMisc,
} from "./Profile.styled";
import { removeCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../common/button/Button";

const Profile = ({
  companyInfo,
  companyBoards,
  userInfo,
  setUserPageOpt,
  setCompanyPageOpt,
}) => {
  const navigate = useNavigate();
  const logOut = () => {
    removeCookie(["access-token"], { path: "/" });
    removeCookie(["username"], { path: "/" });
    removeCookie(["authority"], { path: "/" });
    localStorage.removeItem("refresh-token");
  };

  console.log(companyBoards)

  const userPass = useSelector((state) => state.mypage?.userPass);
  console.log("@@=>",userPass.length)

  return (
    <ProfileContainer>
      <ProfileBox>
        {/* 이거 삼항연산자 넘 그지같아서 수정해야 함 - 성호 */}
        {companyInfo && companyInfo?.profileImage ? (
          <img src={companyInfo?.profileImage} alt="user" />
        ) : null }

        { userInfo && userInfo?.profileImage ? (
          <img src={companyInfo?.profileImage} alt="user" />
        ) : null}

        {companyInfo ? (
          <ProfileInfo>
            <h3>{companyInfo.name}</h3>
            <h5>{companyInfo.phoneNumber}</h5>
            <h5>{companyInfo.email}</h5>

            <Button 
              variant="mypage-edit"               
              onClick={() => {
                navigate("/mypageedit");
              }}>프로필 수정하기</Button>

            <ProfileCategory>단체 소개</ProfileCategory>
            <p>{companyInfo.introduction}</p>

            <MyActivity>
              <ProfileCategory>
                <h6>{companyBoards.length}</h6>
                <span>모집중인 봉사</span>
              </ProfileCategory>
              <ProfileCategory>
                <h6>{companyBoards.length}</h6>
                <span>진행한 봉사</span>
              </ProfileCategory>
            </MyActivity>
          </ProfileInfo>
        ) : null}

        {userInfo ? (
          <>
            <h3>{userInfo.name}</h3>
            <h5>{userInfo.email}</h5>
            <h5>{userInfo.phoneNumber}</h5>
            <ProfileCategory>자기소개</ProfileCategory>
            <p>{userInfo.introduction}</p>
          </>
        ) : null}
      </ProfileBox>
      {
        userInfo ? (
          <ProfileMisc>
            <h2>봉사 현황</h2>
            <span/>
            <h4>캘린더</h4>
            <h4 onClick={() => {
              setUserPageOpt("enroll");
            }}>봉사 신청 내역</h4>
            <h4 onClick={() => {
              setUserPageOpt("wait");
            }}>승인 대기중</h4>
            <h4 onClick={() => {
              setUserPageOpt("pass");
            }}>참여 봉사 관리</h4>
            <h4 onClick={() => {
              setUserPageOpt("reject");
            }}>거절된 봉사</h4>
            <span/>
            <h4
              onClick={() => {
                navigate("/mypageedit");
              }}
            >
              프로필 수정
            </h4>
            <h4 onClick={() => {
              logOut();
              navigate("/login");
            }}
          >
            로그 아웃
          </h4>
        </ProfileMisc>
      ) : null}
      {companyInfo ? (
        <ProfileMisc>
          <h2>봉사 현황</h2>
          <span />
          <h4
            onClick={() => {
              setCompanyPageOpt("newActivity");
            }}
          >
            봉사자 신청 내역
          </h4>
          <h4
            onClick={() => {
              setCompanyPageOpt("myActivity");
            }}
          >
            나의 봉사 관리
          </h4>
          <h4>캘린더</h4>
          <span />
          <h4
            onClick={() => {
              logOut();
              navigate("/login");
            }}
          >
            로그 아웃
          </h4>
        </ProfileMisc>
      ) : null}
    </ProfileContainer>
  );
};

export default Profile;

export const ProfileInfo = styled.div`
  text-align: left;
  & h3 {
    text-align: center;
  }
  & h5 {
    padding-left: 1rem;
    color: ${(props) => props.theme.subTextColor};
  }
  & p {
    padding-left: 1rem;
  }
`

export const MyActivity = styled.div`
  display: flex;
  justify-content: space-between;
`