import { ProfileContainer, ProfileBox, ProfileCategory, ProfileMisc } from "./Profile.styled";
import { removeCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../common/button/Button";
import Profileimg from "../../common/profileimg/Profileimg";
import Badge from "../../common/badge/Badge";
import { useCookies } from "react-cookie";
const Profile = ({
	companyInfo,
	companyBoards,
	userInfo,
	userWait,
	userPass,
	setUserPageOpt,
	setCompanyPageOpt,
	count,
}) => {
	const navigate = useNavigate();
	const logOut = () => {
		removeCookie(["access-token"], { path: "/" });
		removeCookie(["username"], { path: "/" });
		removeCookie(["authority"], { path: "/" });
		removeCookie(["ID"], { path: "/" });
		localStorage.removeItem("refresh-token");
	};

	const [cookies] = useCookies(["Authorization"]);
	const authority = cookies["authority"];

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
								<Button
									variant="mypage-edit"
									onClick={() => {
										navigate("/mypageedit");
									}}
								>
									프로필 수정하기
								</Button>
								<MyActivity>
									<ProfileCategory>
										<div>{userWait?.length}</div>
										<span>진행중인 봉사</span>
									</ProfileCategory>
									<ProfileCategory>
										<div>{userPass?.length}</div>
										<span>진행한 봉사</span>
									</ProfileCategory>
								</MyActivity>
								<ProfileCategory>자기소개</ProfileCategory>
								<p>{userInfo.introduction}</p>
							</ProfileInfo>
						) : null}
					</ProfileBox>
					{userInfo ? (
						<ProfileMisc>
							<h2>봉사 현황</h2>
							<span />
							<h4>봉사 신청 내역</h4>
							<h4>참여 봉사 관리</h4>
							<span />
							<h4
								onClick={() => {
									logOut();
									alert("로그아웃 되셨습니다.");
									navigate("/login");
								}}
							>
								로그 아웃
							</h4>
						</ProfileMisc>
					) : null}
				</ProfileContainer>
			) : (
				<ProfileContainer variant="Company">
					<ProfileBox>
						{companyInfo && companyInfo.profileImage ? (
							<Profileimg variant="profile-company" src={companyInfo.profileImage} alt="user" />
						) : null}
						{companyInfo ? (
							<ProfileInfo>
								<h3>{companyInfo?.name}</h3>
								<h5>{companyInfo?.phoneNumber}</h5>
								<h5>{companyInfo?.email}</h5>
								<Button
									variant="mypage-edit"
									onClick={() => {
										navigate("/mypageedit");
									}}
								>
									프로필 수정하기
								</Button>
								<ProfileCategory>단체 소개</ProfileCategory>
								<p>{companyInfo?.introduction}</p>
								<MyActivity>
									<ProfileCategory>
										<div>{companyBoards?.length}</div>
										<span>모집중인 봉사</span>
									</ProfileCategory>
									<ProfileCategory>
										<div>{companyBoards?.length}</div>
										<span>진행한 봉사</span>
									</ProfileCategory>
								</MyActivity>
							</ProfileInfo>
						) : null}
					</ProfileBox>
					{companyInfo ? (
						<ProfileMisc>
							<h2>봉사 현황</h2>
							<span />
							<h4
								onClick={() => {
									setCompanyPageOpt("newActivity");
								}}
							>
								봉사자 신청 내역
							</h4>
							<h4
								onClick={() => {
									setCompanyPageOpt("myActivity");
								}}
							>
								나의 봉사 관리
							</h4>
							<span />
							<h4
								onClick={() => {
									logOut();
									alert("로그아웃 되셨습니다.");
									navigate("/login");
								}}
							>
								로그 아웃
							</h4>
						</ProfileMisc>
					) : null}
				</ProfileContainer>
			)}
		</>
	);
};

export default Profile;

export const ProfileInfo = styled.div`
	text-align: left;
	position: relative;
	& h3 {
		text-align: center;
		position: relative;
	}
	& h5 {
		padding-left: 3rem;
		color: ${props => props.theme.subTextColor};
		@media (max-width: 1024px) {
			padding-left: 0;
		}
	}
	& p {
		padding-left: 2rem;
	}
	& span {
		border-radius: 50%;
		background-image: url("./image/32badge1.png");
	}
	@media (max-width: 1024px) {
		text-align: center;
	}
`;

export const MyActivity = styled.div`
	display: flex;
	justify-content: space-between;
`;
