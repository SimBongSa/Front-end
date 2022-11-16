import styled from "styled-components";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileTag>기업</ProfileTag>

      <img src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw" alt="user"/>

      <h3>W Children Hospital</h3>
      <h5>john.doe@gmail.com</h5>
      <h5>010.1234.5678</h5>
      
      <ProfileCategory>Organization Description</ProfileCategory>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

      <ProfileSkills>
        <ProfileCategory>Skills</ProfileCategory>
        <ProfileSkill>
          <li>React</li>
          <li>Git</li>
          <li>Spring</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ProfileSkill>
      </ProfileSkills>
    </ProfileContainer>
  )
};

export default Profile;

export const ProfileContainer = styled.div`
  float: left;
  position: fixed;
  margin-top: 10rem;
  margin-left: 2rem;
  border-radius: 5px;
  padding: 30px 10px 10px 10px;
  width: 200px;
	max-width: 100%;
	text-align: center;
  background-color: #aaaaaa;
  z-index: 3;
  & h3 {
    margin: 10px 0
  }
  & h4 {
    text-align: left;
  }
  & h5 {
    text-align: left;
    margin: 1rem;
    color: gray;
  }
  & p {
    text-align: left;
    color: gray;
    font-size: .9rem;
    width: 90%;
    margin: 1rem;
  }
  & img {
    width: 10rem;
    border: 1px solid #ffffff;
	  border-radius: 50%;
	  padding: 7px;
  }
  @media ( max-width: 768px) {
    position: relative;
    width: 70%;
    margin: 0 auto;
    margin-top: 15rem;
    margin-left: 5rem;
    z-index: 1;
  }
`

export const ProfileTag = styled.span`
	color: #231E39;
	background-color: #FEBB0B;
	border-radius: 3px;
	font-size: 14px;
	font-weight: bold;
	padding: 3px 7px;
	position: absolute;
	top: 1.5rem;
	left: 1.5rem;
  z-index: 4;
`

export const ProfileSkills = styled.div`
	text-align: left;
  /* background-color: #232323; */
  & h5 {
    color: #ffffff;
    margin: 10px 0;
    margin-left: 10px;
  }
`
export const ProfileSkill = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
  & li {
    display: flex;
    border: 1px solid #232323;
    border-radius: 4px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 7px;
    padding: 7px;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-3%);
    }
  }
`

export const ProfileCategory = styled.h4`
  text-align: left;
  color: black;
  margin: 1rem;
  margin-top: 2rem;
`