import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getCookieToken } from "../../../utils/cookie";
import {
	__getCompanyInfo,
	__putCompanyInfo,
	__getUserInfo,
	__putUserInfo,
} from "../../../redux/modules/mypageSlice";

const ProfileEdit = () => {
	const role = getCookieToken(["authority"]);

	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getCompanyInfo());
	}, [dispatch]);

	useEffect(() => {
		dispatch(__getUserInfo());
	}, [dispatch]);

	const companyInfo = useSelector(state => state?.mypage?.companyInfo);
	console.log("companyInfo =>", companyInfo);

	const [profileImage, setProfileImage] = useState(null);
	const [uploadpreview, setUploadpreview] = useState(companyInfo.profileImage);

	const [remainInfo, setRemainInfo] = useState(companyInfo);
	console.log("remainInfo =>", remainInfo);

	const userInfo = useSelector(state => state);
	console.log("userInfo =>", userInfo);

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
				setUploadpreview(previewImgUrl);
			}
		};
	};

	const onChangeHandler = e => {
		const { name, value } = e.target;
		setRemainInfo({ ...remainInfo, [name]: value });
		console.log("!!!remainInfo=>", remainInfo);
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		if (role === "ROLE_ADMIN") {
			dispatch(__putCompanyInfo({ ...remainInfo, profileImage }));
			console.log(profileImage);
		} else {
			dispatch(__putUserInfo({ ...remainInfo, profileImage }));
		}
		// navigate(`/detail/${id}`);
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<MyPageEditContainer>
				{role === "ROLE_ADMIN" ? (
					<div>
						<Content>
							기관 PW:
							<input
								type="password"
								defaultValue={companyInfo?.password}
								key={companyInfo?.password}
								name="password"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							기관 PW 확인:
							<input
								type="password"
								defaultValue={companyInfo?.passwordConfirm}
								key={companyInfo?.passwordConfirm}
								name="passwordConfirm"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							이메일:
							<input
								type="text"
								required
								defaultValue={companyInfo?.email}
								key={companyInfo?.email}
								name="email"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							전화번호:
							<input
								type="text"
								defaultValue={companyInfo?.phoneNumber}
								key={companyInfo?.phoneNumber}
								name="phoneNumber"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							기관 소개:
							<input
								type="text"
								defaultValue={companyInfo?.introduction}
								key={companyInfo?.introduction}
								name="introduction"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							기관 프로필 이미지 수정:
							<ImgSize src={uploadpreview} alt="" />
							<input
								name="profileImage"
								type={"file"}
								key={profileImage}
								accept={"image/*"}
								placeholder="프로필 업로드"
								onChange={onChangeImage}
							/>
						</Content>
						<h1>기업 페이지임!</h1>
					</div>
				) : null}

				{role === "ROLE_MEMBER" ? (
					<div>
						<Content>
							회원 PW:
							<input
								type="password"
								defaultValue={userInfo?.password}
								name="password"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							회원 PW 확인:
							<input
								type="password"
								defaultValue={userInfo?.passwordConfirm}
								name="passwordConfirm"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							이메일:
							<input
								type="text"
								defaultValue={userInfo?.email}
								name="email"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							전화번호:
							<input
								type="text"
								defaultValue={userInfo?.phoneNumber}
								name="phoneNumber"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							회원 소개:
							<input
								type="text"
								defaultValue={userInfo?.introduction}
								name="introduction"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							회원 프로필 수정:
							<ImgSize src={uploadpreview} alt="" />
							<input
								name="profileImage"
								type={"file"}
								key={profileImage}
								accept="image/*"
								placeholder="프로필 업로드"
								onChange={onChangeImage}
							/>
						</Content>
						<h1>개인 페이지임!</h1>
					</div>
				) : null}
			</MyPageEditContainer>
			<button type={"submit"}>수정 완료</button>
		</form>
	);
};

export default ProfileEdit;

export const MyPageEditContainer = styled.div`
	margin-top: 10rem;
`;

const Content = styled.li`
	text-align: center;
	margin-top: 20px;
	list-style: none;
	padding-left: 0px;
`;

export const ImgSize = styled.img`
	width: 70px;
	height: 70px;
`;
