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
import CustomerCalendar from "../../Calendar/CustomerCalendar/CustomerCalendar";
import { useParams } from "react-router-dom";

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
	console.log("@@",companyBoards)
	const appliList = useSelector(state => state.mypage.allAppliList);
	const [companyPageOpt, setCompanyPageOpt] = useState(null);

	return (
		<>
			<Profile companyInfo={companyInfo} companyBoards={companyBoards} setCompanyPageOpt={setCompanyPageOpt} />
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
				{/* {companyBoards.length > 0 ? <CustomerCalendar companyBoards={companyBoards} /> : <CustomerCalendar />} */}
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
