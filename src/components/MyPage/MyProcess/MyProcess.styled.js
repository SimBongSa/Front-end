import styled from "styled-components";

export const MyProcessContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10rem;
  margin-left: 20rem;
  width: 60%;
  box-shadow: 0 3px 8px -6px rgba(0,0,0,.50);
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
	display: flex;
  position: sticky;
  justify-content: center;
  align-items: center;
	width: 80%;
	margin: 0 auto;
  margin-left: 5rem;
	/* box-shadow: 0 3px 8px -6px rgba(0,0,0,.50); */
  background: ${(props) => props.theme.subBgColor};
  @media ( max-width: 1024px) {
    width: 100%;
    margin-left: 0rem;
    float: left;
  }
`

export const ProcessStep = styled.div`
  cursor: pointer;
	position: relative;
  width: 200px;
	padding: 24px;
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.theme.bgColor};
    background:${(props) => props.theme.subTextColor};
  }
  @media ( max-width: 1024px) {
    width: 200px;
  }
`

export const ProcessCircle = styled.div`
	width:30px;
	height:30px;
	margin:0 auto;
	background-color: ${(props) => props.theme.btnColor};
	border-radius: 50%;
	text-align: center;
  align-items: center;
	line-height: 33px;
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