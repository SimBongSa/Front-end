import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { FaPen } from "react-icons/fa";

const CustomerMypage = () => {
  return (
    <ProfileContainer>
      <ProfileTag>개인</ProfileTag>

      <img
        src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw"
        alt="user"
      />

      <h3>
        John Doe <FaPen className="edit" />
      </h3>
      <h5>
        <FiCheck /> male
      </h5>

      <h5>
        <FiCheck /> 010.1234.5678
      </h5>
      <h5>
        <FiCheck /> john.doe@gmail.com
      </h5>

      <ProfileIntroduction>Introduction</ProfileIntroduction>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>

      <ProfileCategory>Volunteer History</ProfileCategory>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
    </ProfileContainer>
  );
};

export default CustomerMypage;

export const ProfileContainer = styled.div`
  float: left;
  position: sticky;
  margin-top: 10rem;
  margin-left: 2rem;
  border-radius: 5px;
  padding: 30px 10px 10px 10px;
  width: 280px;
  max-width: 100%;
  text-align: center;
  background-color: #aaaaaa;
  & h3 {
    margin: 10px 0;
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
    font-size: 0.9rem;
    width: 90%;
    margin: 1rem;
  }
  & img {
    width: 10rem;
    border: 1px solid #ffffff;
    border-radius: 50%;
    padding: 7px;
  }
  .edit {
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      transform: translateY(-5%);
    }
  }
`;

export const ProfileTag = styled.span`
  color: #231e39;
  background-color: #febb0b;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 4;
`;

export const ProfileCategory = styled.h4`
  text-align: left;
  color: black;
  margin: 1rem;
  margin-top: 2rem;
`;

export const ProfileIntroduction = styled.h4`
  text-align: left;
  color: black;
  margin: 1rem;
  margin-top: 2rem;
`;
