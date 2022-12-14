import {
	ProfileContainer,
	ProfileBox,
	ProfileCategory,
	ProfileMisc,
	ProfileInfo,
	MyActivity,
} from "./Profile.styled";
import { useState, useEffect } from "react";
import { removeCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button/Button";
import Profileimg from "../../common/profileimg/Profileimg";
import Badge from "../../common/badge/Badge";
import { useCookies } from "react-cookie";

const Profile = ({
	companyInfo,
	userInfo,
	userWait,
	userPass,
	setUserPageOpt,
	setCompanyPageOpt,
	companyBoards,
	count,
}) => {
	const navigate = useNavigate();
	const [CompanyComplete, setCompanyComplete] = useState(0);
	const [userComplete, setUserComplete] = useState(0);

	const logOut = () => {
		removeCookie("access-token");
		removeCookie("username");
		removeCookie("authority");
		removeCookie("ID");
		localStorage.removeItem("refresh-token");
		window.location.replace("/");
	};

	const [cookies] = useCookies(["Authorization"]);
	const authority = cookies["authority"];

	useEffect(() => {
		const today = new Date();
		if (companyBoards?.length > 0) {
			let doingItemLength = 0;
			for (let item of companyBoards) {
				if (item?.dueDay.split(" ")[0] < today?.toISOString().split("T")[0]) doingItemLength++;
			}
			setCompanyComplete(doingItemLength);
		} else if (userWait?.length > 0) {
			let doingItemLength = 0;
			for (let item of userWait) {
				if (item?.dueDay.split(" ")[0] < today?.toISOString().split("T")[0]) doingItemLength++;
			}
			setUserComplete(doingItemLength);
		}
	}, [companyBoards, userWait]);
	return (
		<>
			{authority === "ROLE_MEMBER" ? (
				<ProfileContainer variant="user">
					<ProfileBox>
						{userInfo && userInfo.profileImage ? (
							<Profileimg variant="profile-user" src={userInfo.profileImage} alt="user" />
						) : null}
						{userInfo ? (
							<ProfileInfo>
								<h3>
									{userInfo.name}
									<Badge count={count} />
								</h3>
								<h5>{userInfo.phoneNumber}</h5>
								<h5>{userInfo.email}</h5>
								{
									authority ? (
										<Button
											variant="mypage-edit"
											onClick={() => {
												navigate("/mypageedit");
											}}
										>
											????????? ????????????
										</Button>
									) : null
								}
								<MyActivity>
									<ProfileCategory>
										<div>{userWait?.length}</div>
										<span>???????????? ??????</span>
									</ProfileCategory>
									<ProfileCategory>
										<div>{userComplete}</div>
										<span>????????? ??????</span>
									</ProfileCategory>
								</MyActivity>
								<ProfileCategory>????????????</ProfileCategory>
								<p>{userInfo.introduction}</p>
							</ProfileInfo>
						) : null}
					</ProfileBox>
					{userInfo ? (
						<ProfileMisc>
							<h2>?????? ??????</h2>
							<span />
							<h4>?????? ?????? ??????</h4>
							<h4>?????? ?????? ??????</h4>
							<span />
							<h4
								onClick={() => {
									logOut();
									alert("???????????? ???????????????.");
								}}
							>
								?????? ??????
							</h4>
						</ProfileMisc>
					) : null}
				</ProfileContainer>
			) : (
				<ProfileContainer variant="company">
					<ProfileBox>
						{companyInfo && companyInfo.profileImage ? (
							<Profileimg variant="profile-company" src={companyInfo.profileImage} alt="user" />
						) : null}
						{companyInfo ? (
							<ProfileInfo>
								<h3>{companyInfo?.name}</h3>
								<h5>{companyInfo?.phoneNumber}</h5>
								<h5>{companyInfo?.email}</h5>
								{
									authority ? (
										<Button
											variant="mypage-edit"
											onClick={() => {
												navigate("/mypageedit");
											}}
										>
											????????? ????????????
										</Button>
									) : null
								}

								<ProfileCategory>?????? ??????</ProfileCategory>
								<p>{companyInfo?.introduction}</p>
								<MyActivity>
									<ProfileCategory>
										<div>{companyBoards?.length}</div>
										<span>???????????? ??????</span>
									</ProfileCategory>
									<ProfileCategory>
										<div>{CompanyComplete}</div>
										<span>????????? ??????</span>
									</ProfileCategory>
								</MyActivity>
							</ProfileInfo>
						) : null}
					</ProfileBox>
					{companyInfo ? (
						<ProfileMisc>
							<h2>?????? ??????</h2>
							<span />
							<h4
								onClick={() => {
									setCompanyPageOpt("newActivity");
								}}
							>
								????????? ?????? ??????
							</h4>
							<h4
								onClick={() => {
									setCompanyPageOpt("myActivity");
								}}
							>
								?????? ?????? ??????
							</h4>
							<span />
							<h4
								onClick={() => {
									logOut();
									alert("???????????? ???????????????.");
								}}
							>
								?????? ??????
							</h4>
						</ProfileMisc>
					) : null}
				</ProfileContainer>
			)}
		</>
	);
};

export default Profile;
