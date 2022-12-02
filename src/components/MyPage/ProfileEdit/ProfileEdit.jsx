import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getCookieToken } from "../../../utils/cookie";
import {
	__getCompanyInfo,
	__putCompanyInfo,
	__getUserInfo,
	__putUserInfo,
} from "../../../redux/modules/mypageSlice";
import Input from "../../common/input/Input";
import { MyPageEditSec } from "./ProfileEdit.styled";

const ProfileEdit = () => {
	const role = getCookieToken(["authority"]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getCompanyInfo());
	}, [dispatch]);

	useEffect(() => {
		dispatch(__getUserInfo());
	}, [dispatch]);

	const companyInfo = useSelector(state => state?.mypage?.companyInfo);
	console.log("companyInfo => ", companyInfo);
	const userInfo = useSelector(state => state?.mypage?.userInfo);
	const [profileImage, setProfileImage] = useState(null);
	const [uploadCompanyPreview, setUploadCompanyPreview] = useState(companyInfo.profileImage);
	const [uploadUserPreview, setUploadUserPreview] = useState(userInfo.profileImage);
	//기관
	const [editCompany, setEditCompany] = useState(prev => {
		const { email, introduction, password, passwordConfirm, profileImage, phoneNumber } =
			companyInfo;
		return { ...prev, email, introduction, password, passwordConfirm, profileImage, phoneNumber };
	});
	console.log("editCompany 석원님 킹왕짱 =>", editCompany);
	//회원
	const [editUser, setUser] = useState(userInfo);

	// 이미지 upload
	const onChangeImage = e => {
		// if (e.target.files[0] === null) {
		// 	setProfileImage(null);
		// } else {
		setProfileImage(e.target.files[0]);
		// }

		console.log("profileImage =>", profileImage);

		// 미리보기 온체인지 핸들러
		let reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			if (previewImgUrl) {
				setUploadCompanyPreview(previewImgUrl);
			}
		};
	};

	const onChangeHandler = useCallback(
		e => {
			const { name, value } = e.target;
			setEditCompany({ ...editCompany, [name]: value });
		},
		[editCompany]
	);
	console.log("!!!remainInfo=>", editCompany);

	const onSubmitHandler = e => {
		e.preventDefault();
		if (role === "ROLE_ADMIN") {
			dispatch(__putCompanyInfo({ ...editCompany, profileImage }));
		} else {
			dispatch(__putUserInfo({ ...editCompany, profileImage }));
		}
		// navigate(`/detail/${id}`);
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<MyPageEditContainer>
				{role === "ROLE_ADMIN" ? (
					<div>
						<MyPageEditSec>
							<Content>
								기관 PW
								<Input
									type="password"
									defaultValue={companyInfo?.password}
									key={companyInfo?.password}
									name="password"
									onChange={onChangeHandler}
								/>
							</Content>
							<Content>
								기관 PW 확인
								<Input
									type="password"
									defaultValue={companyInfo?.passwordConfirm}
									key={companyInfo?.passwordConfirm}
									name="passwordConfirm"
									onChange={onChangeHandler}
								/>
							</Content>
							<Content>
								이메일
								<Input
									type="text"
									required
									defaultValue={companyInfo?.email}
									key={companyInfo?.email}
									name="email"
									onChange={onChangeHandler}
								/>
							</Content>
							<Content>
								전화번호
								<Input
									type="text"
									defaultValue={companyInfo?.phoneNumber}
									key={companyInfo?.phoneNumber}
									name="phoneNumber"
									onChange={onChangeHandler}
								/>
							</Content>
							<Content>
								기관 소개
								<Input
									type="text"
									defaultValue={companyInfo?.introduction}
									key={companyInfo?.introduction}
									name="introduction"
									onChange={onChangeHandler}
								/>
							</Content>
							<Content>
								기관 프로필 이미지 수정
								<ImgSize src={uploadCompanyPreview} alt="" />
								<Input
									name="profileImage"
									type={"file"}
									key={profileImage}
									accept={"image/*"}
									placeholder="프로필 업로드"
									onChange={onChangeImage}
								/>
							</Content>
						</MyPageEditSec>
						<h1>기관 페이지임!</h1>
					</div>
				) : null}

				{role === "ROLE_MEMBER" ? (
					<div>
						<MyPageEditSec>
							<Content>
								회원 PW
								<Input
									type="password"
									defaultValue={userInfo?.password}
									key={companyInfo?.password}
									name="password"
									onChange={onChangeHandler}
								/>
							</Content>
							<Content>
								회원 PW 확인
								<Input
									type="password"
									defaultValue={userInfo?.passwordConfirm}
									key={companyInfo?.passwordConfirm}
									name="passwordConfirm"
									onChange={onChangeHandler}
								/>
							</Content>
							<Content>
								이메일
								<Input
									type="text"
									required
									defaultValue={userInfo?.email}
									key={companyInfo?.email}
									name="email"
									onChange={onChangeHandler}
								/>
							</Content>
							<Content>
								전화번호
								<Input
									type="text"
									defaultValue={userInfo?.phoneNumber}
									key={companyInfo?.phoneNumber}
									name="phoneNumber"
									onChange={onChangeHandler}
								/>
							</Content>
							<Content>
								회원 소개
								<Input
									type="text"
									defaultValue={userInfo?.introduction}
									key={companyInfo?.introduction}
									name="introduction"
									onChange={onChangeHandler}
								/>
							</Content>
							<Content>
								회원 프로필 이미지 수정
								<ImgSize src={uploadUserPreview} alt="" />
								<Input
									name="profileImage"
									type={"file"}
									key={profileImage}
									accept={"image/*"}
									placeholder="프로필 업로드"
									onChange={onChangeImage}
								/>
							</Content>
						</MyPageEditSec>
						<h1>기관 페이지임!</h1>
					</div>
				) : null}
			</MyPageEditContainer>
			<Button type={"submit"}>수정 완료</Button>
		</form>
	);
};

export default ProfileEdit;

const MyPageEditContainer = styled.div`
	margin-top: 10rem;
`;

const Content = styled.li`
	text-align: center;
	margin-top: 20px;
	list-style: none;
	padding-left: 0px;
`;

const ImgSize = styled.img`
	flex-direction: column;
	width: 350px;
	height: 150px;
	margin: 1rem;
`;

const Button = styled.button`
	z-index: 1000000;
	position: absolute;
`;
