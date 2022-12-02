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
	console.log("editCompany =>", editCompany);

	//회원
	const [editUser, setUser] = useState(userInfo);

	// 이미지 upload
	const onChangeImage = e => {
		setProfileImage(e.target.files[0]);

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
							<h4>기관 PW </h4>
							<Input
								type="password"
								defaultValue={companyInfo?.password}
								key={companyInfo?.password}
								name="password"
								onChange={onChangeHandler}
							/>
							<h4>기관 PW 확인</h4>
							<Input
								type="password"
								defaultValue={companyInfo?.passwordConfirm}
								key={companyInfo?.passwordConfirm}
								name="passwordConfirm"
								onChange={onChangeHandler}
							/>
							<h4>이메일</h4>
							<Input
								type="text"
								required
								defaultValue={companyInfo?.email}
								key={companyInfo?.email}
								name="email"
								onChange={onChangeHandler}
							/>
							<h4>전화번호</h4>
							<Input
								type="text"
								defaultValue={companyInfo?.phoneNumber}
								key={companyInfo?.phoneNumber}
								name="phoneNumber"
								onChange={onChangeHandler}
							/>
							<h4>기관 소개</h4>
							<Input
								type="text"
								defaultValue={companyInfo?.introduction}
								key={companyInfo?.introduction}
								name="introduction"
								onChange={onChangeHandler}
							/>
							<p>기관 프로필 이미지 수정</p>
							<ImgSize src={uploadCompanyPreview} alt="" />
							<Input
								name="profileImage"
								type={"file"}
								key={profileImage}
								accept={"image/*"}
								placeholder="프로필 업로드"
								onChange={onChangeImage}
							/>
						</MyPageEditSec>
					</div>
				) : null}

				{role === "ROLE_MEMBER" ? (
					<div>
						<MyPageEditSec>
							<Input
								type="password"
								defaultValue={userInfo?.password}
								key={userInfo?.password}
								name="password"
								onChange={onChangeHandler}
							/>
							<h4>개인 PW 확인</h4>
							<Input
								type="password"
								defaultValue={userInfo?.passwordConfirm}
								key={userInfo?.passwordConfirm}
								name="passwordConfirm"
								onChange={onChangeHandler}
							/>
							<h4>이메일</h4>
							<Input
								type="text"
								required
								defaultValue={userInfo?.email}
								key={userInfo?.email}
								name="email"
								onChange={onChangeHandler}
							/>
							<h4>전화번호</h4>
							<Input
								type="text"
								defaultValue={userInfo?.phoneNumber}
								key={userInfo?.phoneNumber}
								name="phoneNumber"
								onChange={onChangeHandler}
							/>
							<h4>개인 소개</h4>
							<Input
								type="text"
								defaultValue={userInfo?.introduction}
								key={userInfo?.introduction}
								name="introduction"
								onChange={onChangeHandler}
							/>
							<p>개인 프로필 이미지 수정</p>
							<ImgSize src={uploadUserPreview} alt="" />
							<Input
								name="profileImage"
								type={"file"}
								key={profileImage}
								accept={"image/*"}
								placeholder="프로필 업로드"
								onChange={onChangeImage}
							/>
						</MyPageEditSec>
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

const Input = styled.input`
	display: block;
	width: 590px;
	height: 60px;
	border-radius: 30px;
	/* background-image: url(); */
	background-position: center right 10px;
	background-repeat: no-repeat;
	margin-bottom: 10px;
	border: 1px solid #66885d;
	padding-left: 10px;
`;
