import styled from "styled-components";
import { MyProcessContainer, ProcessStepWrap, ProcessStep, ProcessCircle, StepTitle } from "./MyProcess.styled";
import { IoIosArrowDown } from "react-icons/io";

const MyProcess = ({ userEnroll, userWait, userPass, userReject, setUserPageOpt }) => {
  return (
    <MyProcessContainer>
      <h1>봉사 현황</h1>
      <ProcessStepWrap>
        <ProcessStep onClick={() => {
          setUserPageOpt("enroll")
        }}>
          <ProcessCircle><span>{ userEnroll }</span></ProcessCircle>
          <StepTitle>봉사 신청 내역</StepTitle>
        </ProcessStep>
        <ProcessStep onClick={() => {
          setUserPageOpt("wait")
        }}>
          <ProcessCircle><span>{ userWait }</span></ProcessCircle>
          <StepTitle>승인 대기중</StepTitle>
        </ProcessStep>
        <ProcessStep onClick={() => {
          setUserPageOpt("pass")
        }}>
          <ProcessCircle><span>{ userPass }</span></ProcessCircle>
          <StepTitle>참여 봉사 관리</StepTitle>
        </ProcessStep>
        <ProcessStep onClick={() => {
          setUserPageOpt("reject")
        }}>
          <ProcessCircle><span>{ userReject }</span></ProcessCircle>
          <StepTitle>거절된 봉사</StepTitle>
        </ProcessStep>
      </ProcessStepWrap>
      <StOpenCalendar>
        캘린더 보기 <IoIosArrowDown/> 
      </StOpenCalendar>
    </MyProcessContainer>
  )
}

export default MyProcess;

export const StOpenCalendar = styled.div`
  cursor: pointer;
	width: 80%;
  text-align: center;
  height: 4rem;
	margin: 0 auto;
  margin-left: 5rem;
  padding-top: 1rem;
  /* border: 5px solid red; */
  @media ( max-width: 1024px) {
    margin: 0 auto;
    float: left;
  }
`