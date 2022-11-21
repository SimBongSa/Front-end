import { ProfileContainer, ProfileBox, ProfileCategory, ProfileMisc } from "./Profile.styled";
import { removeCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";

const Profile = ({ companyInfo, userInfo, isEdit, setUserPageOpt, setCompanyPageOpt }) => {

  const navigate = useNavigate();

  const logOut = () => {
    removeCookie(['access-token'], { path: '/' });
    removeCookie(['username'], { path: '/' });
    removeCookie(['authority'], { path: '/' });
    localStorage.removeItem("refresh-token");
  }

  return (
    <ProfileContainer>
      <ProfileBox>
        {/* 이거 삼항연산자 넘 그지같아서 수정해야 함 - 성호 */}
        {
          companyInfo && companyInfo.profileImage ? 
            <img src={companyInfo.profileImage} alt="user" /> : 
            <img src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw" alt="user"/>
        }
        {
          userInfo && userInfo.profileImage ? 
            <img src={companyInfo.profileImage} alt="user" /> : 
            <img src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw" alt="user"/>
        }

        {
          companyInfo ? (
            <>
              <h3>{ companyInfo.name }</h3>
              <h5>{ companyInfo.email }</h5>
              <h5>{ companyInfo.phoneNumber }</h5>
              <ProfileCategory>Description</ProfileCategory>
              <p>{ companyInfo.introduction }</p>
            </>
          ) : null
        }

        {
          userInfo ? (
            <>
              <h3>{ userInfo.name }</h3>
              <h5>{ userInfo.email }</h5>
              <h5>{ userInfo.phoneNumber }</h5>
              <ProfileCategory>Description</ProfileCategory>
              <p>{ userInfo.introduction }</p>
            </>
          ) : null
        }
      </ProfileBox>
      {
        userInfo ? (
          <ProfileMisc>
            <h2>봉사 현황</h2>
            <span/>
            <h4 onClick={() => {
              setUserPageOpt("wait");
            }}>봉사 신청 내역</h4>
            <h4 onClick={() => {
              setUserPageOpt("pass");
            }}>참여 봉사 관리</h4>
            <h4>캘린더</h4>
            <span/>
            <h4>프로필 수정</h4>
            <h4 onClick={() => {
              logOut();
              navigate('/login')
            }}>로그 아웃</h4>
          </ProfileMisc>
        ) : null
      }
      {
        companyInfo ? (
          <ProfileMisc>
            <h2>봉사 현황</h2>
            <span/>
            <h4 onClick={() => {
              setCompanyPageOpt("newActivity");
            }}>봉사자 신청 내역</h4>
            <h4 onClick={() => {
              setCompanyPageOpt("myActivity");
            }}>나의 봉사 관리</h4>
            <h4>캘린더</h4>
            <span/>
            <h4>프로필 수정</h4>
            <h4 onClick={() => {
              logOut();
              navigate('/login')
            }}>로그 아웃</h4>
          </ProfileMisc>
        ) : null
      }
    </ProfileContainer>
  )
};

export default Profile;