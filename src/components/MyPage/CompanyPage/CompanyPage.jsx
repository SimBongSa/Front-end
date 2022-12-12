import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	__getAllAppliList,
	__getCompanyBoards,
	__getCompanyInfo,
} from "../../../redux/modules/mypageSlice";
import { CompanyPageContainer, BtnContainer } from "./CompanyPage.styled";
import Profile from "../Profile/Profile";
import CardGrid from "../../common/cards/CardGrid";
import MyApplicant from "./MyApplicant/MyApplicant";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CustomerCalendar from "../../Calendar/CustomerCalendar/CustomerCalendar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
	MyProcessContainer,
	ProcessStepWrap,
	ProcessStep,
	ProcessCircle,
	StepTitle,
} from "../MyProcess/MyProcess.styled";

const CompanyPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const [size, setSize] = useState(10);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(__getCompanyInfo(id));
		dispatch(__getCompanyBoards(id));
		dispatch(__getAllAppliList({ page, size }));
	}, [dispatch, page, size]);

	// 내정보 , 등록한 게시글 , 신청한 놈
	const companyInfo = useSelector(state => state.mypage?.companyInfo);
	const companyBoards = useSelector(state => state.mypage.companyBoards);
	const appliList = useSelector(state => state.mypage.allAppliList);
	const ma = useSelector(state => state.mypage.approve);
	const [newVolunteerCount, setNewVolunteerCount] = useState(0);

	const [companyPageOpt, setCompanyPageOpt] = useState(null);

	const [modal, setModal] = useState(false);

	const onClickCloseHandler = e => {
		setModal(true);
	};
	const onClickOpenHandler = e => {
		setModal(false);
	};

	useEffect(() => {
		let watingItemLength = 0;
		for (let item of appliList) {
			if (item.approval === "WAITING") watingItemLength++;
		}
		setNewVolunteerCount(watingItemLength);
	}, [appliList]);

	console.log(ma);
	return (
		<>
			<MyProcessContainer variant="Company">
				<h1>나의 활동</h1>
				<ProcessStepWrap variant="Company">
					<ProcessStep variant="Company" onClick={() => setCompanyPageOpt("newActivity")}>
						<ProcessCircle variant="Company">
							<span>{newVolunteerCount}</span>
						</ProcessCircle>
						<StepTitle variant="Company">새로운 봉사자 신청</StepTitle>
					</ProcessStep>
					<ProcessStep variant="Company" onClick={() => setCompanyPageOpt("myActivity")}>
						<ProcessCircle variant="Company">
							<span>{companyBoards?.length}</span>
						</ProcessCircle>
						<StepTitle variant="Company">나의 봉사</StepTitle>
					</ProcessStep>
					{/* <ProcessStep variant="Company">
						<ProcessCircle variant="Company">
							<span>{0}</span>
						</ProcessCircle>
						<StepTitle variant="Company">승인한 봉사</StepTitle>
					</ProcessStep>
					<ProcessStep variant="Company">
						<ProcessCircle variant="Company">
							<span>{0}</span>
						</ProcessCircle>
						<StepTitle variant="Company">거절한 봉사</StepTitle>
					</ProcessStep> */}
				</ProcessStepWrap>
				{modal === false && companyBoards.length > 0 ? (
					<CustomerCalendar companyBoards={companyBoards} />
				) : (
					""
				)}
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

			<Profile companyInfo={companyInfo} setCompanyPageOpt={setCompanyPageOpt} />
			<CompanyPageContainer>
				<BtnContainer>
					<input
						type="radio"
						name="option"
						id="newActivity"
						onClick={() => setCompanyPageOpt("newActivity")}
					/>
					<input
						type="radio"
						name="option"
						id="myActivity"
						onClick={() => setCompanyPageOpt("myActivity")}
					/>
					<nav>
						<label htmlFor="newActivity">새로운 봉사자 신청</label>
						<label htmlFor="myActivity">나의 봉사</label>
					</nav>
				</BtnContainer>
				{companyPageOpt !== null && companyPageOpt === "newActivity" ? (
					<MyApplicant list={appliList} />
				) : null}

				{companyPageOpt !== null && companyPageOpt === "myActivity" ? (
					<CardGrid companyBoards={companyBoards} gridColumn={5} />
				) : null}
			</CompanyPageContainer>
		</>
	);
};

export default CompanyPage;

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
