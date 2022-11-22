import styled from "styled-components";

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
    </MyProcessContainer>
  )
}

export default MyProcess;

export const MyProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10rem;
  margin-left: 20rem;
  & h1 {
    font-size: 2rem;
    margin: 1rem;
  }
  @media ( max-width: 1024px) {
    margin: 0 auto;
    float: left;
  }
`

export const ProcessStepWrap = styled.div`
	display: table;
  position: sticky;
	width: 100%;
	margin: 0 auto;
  margin-left: 10rem;
	box-shadow: 0 3px 8px -6px rgba(0,0,0,.50);
  @media ( max-width: 1024px) {
    margin-left: 0rem;
    float: left;
  }
`



export const ProcessStep = styled.div`
  cursor: pointer;
	display: table-cell;
	position: relative;
  width: 200px;
	padding: 24px;
  transition: all 0.3s;
  &:hover {
    background:${(props) => props.theme.ctrColor};
  }
  @media ( max-width: 1024px) {
    width: 200px;
  }
`

export const ProcessCircle = styled.div`
	width:30px;
	height:30px;
	margin:0 auto;
	background-color:#70BD44;
	border-radius: 50%;
	text-align: center;
	line-height:30px;
	font-size: 16px;
	font-weight: 600;
	color:#FFFFFF;
`

export const StepTitle = styled.div`
	margin-top:20px;
	font-size:16px;
	font-weight:600;
  text-align: center;
`