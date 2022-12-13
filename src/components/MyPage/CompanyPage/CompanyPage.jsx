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

	const companyInfo = useSelector(state => state.mypage?.companyInfo);
	const companyBoards = useSelector(state => state.mypage.companyBoards);
	const appliList = useSelector(state => state.mypage.allAppliList);

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
			if (item?.approval === "WAITING") watingItemLength++;
		}
		setNewVolunteerCount(watingItemLength);
	}, [appliList]);

	return (
		<>
			<Profile
				companyInfo={companyInfo}
				companyBoards={companyBoards}
				setCompanyPageOpt={setCompanyPageOpt}
			/>
			<MyProcessContainer variant="company">
				<h1>나의 활동</h1>
				<ProcessStepWrap variant="company">
					<ProcessStep variant="company" onClick={() => setCompanyPageOpt("newActivity")}>
						<ProcessCircle variant="company">
							<span>{newVolunteerCount}</span>
						</ProcessCircle>
						<StepTitle variant="company">새로운 봉사자 신청</StepTitle>
					</ProcessStep>
					<ProcessStep variant="company" onClick={() => setCompanyPageOpt("myActivity")}>
						<ProcessCircle variant="company">
							<span>{companyBoards?.length}</span>
						</ProcessCircle>
						<StepTitle variant="company">나의 봉사</StepTitle>
					</ProcessStep>
				</ProcessStepWrap>
				{modal === false ? <CustomerCalendar companyBoards={companyBoards} /> : null}
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
