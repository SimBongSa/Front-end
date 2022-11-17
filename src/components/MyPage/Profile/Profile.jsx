import { ProfileContainer, ProfileBox, ProfileTag, ProfileCategory, ProfileSkills, ProfileSkill, ProfileMisc } from "./Profile.styled";
import { removeCookie } from "../../../utils/cookie";
import styled from "styled-components";

const Profile = ({email, introduction, name, username, phoneNumber, profileImage}) => {

  const logOut = () => {
    removeCookie(['access-token'], { path: '/' });
    removeCookie(['username'], { path: '/' });
    removeCookie(['authority'], { path: '/' });
    localStorage.removeItem("refresh-token");
  }

  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfileTag>기업</ProfileTag>

        {
          profileImage ? 
            <img src={profileImage} alt="user" /> : 
            <img src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw" alt="user"/>
        }


        <h3>{ name }</h3>
        <h5>{ email }</h5>
        <h5>폰번호임 : { phoneNumber }</h5>
        
        <ProfileCategory>Description</ProfileCategory>
        <p>{ introduction }</p>

        {/* <ProfileSkills>
          <ProfileCategory>Skills</ProfileCategory>
          <ProfileSkill>
            <li>React</li>
            <li>Git</li>
            <li>Spring</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ProfileSkill>
        </ProfileSkills> */}
      </ProfileBox>

      <ProfileMisc>
        <h2>봉사 현황</h2>
        <span/>
        <h4>봉사자 신청 내역</h4>
        <h4>나의 봉사 관리</h4>
        <h4>캘린더</h4>
        <span/>
        <h4 onClick={logOut}>로그 아웃</h4>
      </ProfileMisc>

    </ProfileContainer>
  )
};

export default Profile;