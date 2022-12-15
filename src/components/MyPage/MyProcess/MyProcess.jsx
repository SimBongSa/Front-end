import styled from "styled-components";
import { useState } from "react";
import {
	MyProcessContainer,
	ProcessStepWrap,
	ProcessStep,
	ProcessCircle,
	StepTitle,
} from "./MyProcess.styled";
import UserCalendar from "../../Calendar/UserCalendar/UserCalendar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MyProcess = ({
	userEnroll,
	userWait,
	userPass,
	userReject,
	setUserPageOpt,
	callendarData,
}) => {
	const [modal, setModal] = useState(false);

	const onClickCloseHandler = e => {
		setModal(true);
	};
	const onClickOpenHandler = e => {
		setModal(false);
	};
	return (
		<MyProcessContainer variant="user">
			<h1>나의 활동</h1>
			<ProcessStepWrap variant="user">
				<ProcessStep
					variant="user"
					onClick={() => {
						setUserPageOpt("enroll");
					}}
				>
					<ProcessCircle variant="user">
						<span>{userEnroll}</span>
					</ProcessCircle>
					<StepTitle variant="user">봉사 신청 내역</StepTitle>
				</ProcessStep>
				<ProcessStep
					variant="user"
					onClick={() => {
						setUserPageOpt("wait");
					}}
				>
					<ProcessCircle variant="user">
						<span>{userWait}</span>
					</ProcessCircle>
					<StepTitle variant="user">승인 대기중</StepTitle>
				</ProcessStep>
				<ProcessStep
					variant="user"
					onClick={() => {
						setUserPageOpt("pass");
					}}
				>
					<ProcessCircle variant="user">
						<span>{userPass}</span>
					</ProcessCircle>
					<StepTitle variant="user">참여 봉사 관리</StepTitle>
				</ProcessStep>
				<ProcessStep
					variant="user"
					onClick={() => {
						setUserPageOpt("reject");
					}}
				>
					<ProcessCircle variant="user">
						<span>{userReject}</span>
					</ProcessCircle>
					<StepTitle variant="user">거절된 봉사</StepTitle>
				</ProcessStep>
			</ProcessStepWrap>
			{modal === false ? <UserCalendar userEnroll={callendarData} /> : null}
			<StOpenCalendar>
				{modal === false ? (
					<div onClick={onClickCloseHandler}>
						캘린더 닫기 <IoIosArrowUp />
					</div>
				) : (
					<div onClick={onClickOpenHandler}>
						캘린더 보기 <IoIosArrowDown />
					</div>
				)}
			</StOpenCalendar>
		</MyProcessContainer>
	);
};

export default MyProcess;

export const StOpenCalendar = styled.div`
	cursor: pointer;
	text-align: center;
	height: 4rem;
	padding-top: 1rem;
	transition: all 0.5s;
	@media (max-width: 1024px) {
		margin: 0 auto;
		float: left;
	}
`;
