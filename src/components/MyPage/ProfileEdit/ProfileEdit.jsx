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
	const [profileImage, setProfileImage] = useState(null);
	const [uploadpreview, setUploadpreview] = useState("");
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getCompanyInfo());
	}, [dispatch]);

	useEffect(() => {
		dispatch(__getUserInfo());
	}, [dispatch]);

	const companyInfo = useSelector(state => state.mypage.companyInfo);
	console.log("companyInfo =>", companyInfo);

	const userInfo = useSelector(state => state.mypage.userInfo);
	console.log("userInfo =>", userInfo);

	const onChangeHandler = e => {
		console.log("인풋=>", input);
		const { name, value } = e.target;
		// setInput({ ...input, [name]: value, area: address });
		setInput({ ...input, [name]: value });
	};

	const onChangeImage = e => {
		setProfileImage(e.target.files[0]);

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

	const onSubmitHandler = e => {
		e.preventDefault();
		if (role === "ROLE_ADMIN") {
			dispatch(__putCompanyInfo({ ...input, profileImage }));
		} else {
			dispatch(__putUserInfo({ ...input, profileImage }));
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
								name="password"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							기관 PW 확인:
							<input
								type="password"
								defaultValue={companyInfo?.passwordConfirm}
								name="passwordConfirm"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							이메일:
							<input
								type="text"
								defaultValue={companyInfo?.email}
								name="email"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							전화번호:
							<input
								type="text"
								defaultValue={companyInfo?.phoneNumber}
								name="phoneNumber"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							기관 소개:
							<input
								type="text"
								defaultValue={companyInfo?.introduction}
								name="introduction"
								onChange={onChangeHandler}
							/>
						</Content>
						<Content>
							기관 프로필 수정:
							<ImgSize src={uploadpreview} alt="" />
							<input
								type={"file"}
								accept={"image/*"}
								placeholder="프로필 업로드"
								name="profileImage"
								onChange={onChangeImage}
							/>
						</Content>
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
								accept="image/*"
								placeholder="프로필 업로드"
								onChange={onChangeImage}
							/>
						</Content>
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
