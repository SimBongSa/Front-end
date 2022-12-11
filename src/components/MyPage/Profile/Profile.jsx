import { ProfileContainer, ProfileBox, ProfileCategory, ProfileMisc, ProfileInfo, MyActivity } from "./Profile.styled";
import { removeCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button/Button";
import Profileimg from "../../common/profileimg/Profileimg";
import Badge from "../../common/badge/Badge";

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
		removeCookie('access-token');
		removeCookie('username');
		removeCookie('authority');
		removeCookie('ID');
		localStorage.removeItem("refresh-token");
		window.location.replace('/')	
	};

	return (
		<ProfileContainer>
			<ProfileBox>
				{companyInfo && companyInfo.profileImage ? (
					<Profileimg variant="profile-company" src={companyInfo.profileImage} alt="user" />
				) : null}
				{userInfo && userInfo.profileImage ? (
					<Profileimg variant="profile-user" src={userInfo.profileImage} alt="user" />
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
								<h6>{companyBoards?.length}</h6>
								<span>모집중인 봉사</span>
							</ProfileCategory>
							<ProfileCategory>
								<h6>{companyBoards?.length}</h6>
								<span>진행한 봉사</span>
							</ProfileCategory>
						</MyActivity>
					</ProfileInfo>
				) : null}
				{userInfo ? (
					<ProfileInfo>
						<h3>{userInfo.name}<Badge count={count} /></h3>
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
								<h6>{userWait?.length}</h6>
								<span>진행중인 봉사</span>
							</ProfileCategory>
							<ProfileCategory>
								<h6>{userPass?.length}</h6>
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
					<h4>캘린더</h4>
					<span />
					<h4
						onClick={logOut}
					>
						로그 아웃
					</h4>
				</ProfileMisc>
			) : null}

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
					<h4>캘린더</h4>
					<span />
					<h4
						onClick={logOut}
					>
						로그 아웃
					</h4>
				</ProfileMisc>
			) : null}
		</ProfileContainer>
	);
};

export default Profile;