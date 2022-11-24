import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";

export const RecruitContainer = styled.div`
  min-height: 80vh;
  font-weight: 300;
  color: ${(props) => props.theme.textColor};
  position: relative;
  margin-top: -3rem;
`;

export const RecruitNav = styled.nav`
  position: fixed;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  margin: 0 0 100px 30px;
  & a {
    text-decoration: none;
  }
  & .counter {
    font-size: 24px;
    transition: all 0.15s ease-out;
  }
  & .title {
    font-size: 24px;
    font-weight: 300;
    margin: 0 0 0.25em;
    width: 300px;
    overflow: hidden;
    transition: height 0.3s ease-out;
  }
  & .body {
    font-weight: 100;
    font-size: 12px;
    width: 300px;
    overflow: hidden;
    transition: height 0.3s ease-out;
  }
  & li {
    position: relative;
    transition: all 0.3s ease-out;
    margin-bottom: 3rem;
    &:after {
      content: "";
      display: block;
      border-left: 2px solid ${(props) => props.theme.textColor};
      border-top: 2px solid ${(props) => props.theme.textColor};
      height: 250px;
      width: 20px;
      position: absolute;
      left: -30px;
      top: 15px;
    }
    & a {
      display: block;
      padding: 0;
      color: ${(props) => props.theme.textColor};
      transition: all 0.15s ease-out;
      &:hover {
        padding-left: 1em;
      }
    }
    & .active {
      pointer-events: none;
      padding-left: 1em;
      &:after {
        width: 35px;
        height: 400px;
        top: 35px;
      }
      .counter {
        font-size: 48px;
      }
      .title {
        height: 40px;
        opacity: 1;
        overflow: visible;
      }
      .body {
        height: 100px;
        opacity: 1;
        overflow: visible;
      }
    }
  }
`;

export const RecruitSec = styled.section`
  height: 100vh;
  font-size: 40px;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    margin-bottom: 3rem;
  }
`;

export const TagWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TagColumn = styled.div`
  display: block;
  position: relative;
  margin: 40px auto;
  height: auto;
  font-size: 20px;
  width: 400px;
  padding: 20px;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    & li {
      color: #aaaaaa;
      display: block;
      position: relative;
      float: left;
      width: 100%;
      height: 100px;
      user-select: none;
      & input[type="radio"] {
        position: absolute;
        visibility: hidden;
        &:checked ~ label {
          color: ${(props) => props.theme.btnColor};
        }
      }
      & label {
        display: block;
        position: relative;
        font-weight: 300;
        font-size: 1.35em;
        padding: 25px 25px 25px 80px;
        margin: 10px auto;
        height: 30px;
        z-index: 9;
        cursor: pointer;
        transition: all 0.25s linear;
      }
      &:hover label {
        color: ${(props) => props.theme.btnColor};
      }
    }
  }
`;

export const ScrollDown = styled(IoIosArrowDown)`
  position: fixed;
  left: 48%;
  font-size: 3rem;
`;

export const AreaBtn = styled.button`
  width: 150px;
  margin-bottom: 1rem;
`;

export const RecruitTA = styled.textarea`
  margin: 1rem;
  width: 350px;
  border: none;
  border-radius: 2px;
  height: 150px;
`;

export const ImgSize = styled.img`
  width: 350px;
  height: 150px;
  margin: 1rem;
`;

export const CustomeDatePicker = styled(DatePicker)({
  margin: "12px",
  fontSize: "15px",
  padding: "20px",
  width: "360px",
  paddingLeft: "20px",
  border: "none",
  borderRadius: "15px",
  outline: "none",
  marginBottom: "1rem",
  background: `${(props) => props.theme.textColor}`,
});

export const PickerBox = styled.div`
  display: flex;
  flex-direction: column;
`;
