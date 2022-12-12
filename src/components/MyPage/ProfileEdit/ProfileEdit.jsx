import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCookieToken } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
import {
	__getCompanyInfo,
	__putCompanyInfo,
	__getUserInfo,
	__putUserInfo,
} from "../../../redux/modules/mypageSlice";
import {
	MyPageEditContainer,
	MyPageEditBox,
	MyPageEditForm,
	TextArea,
	Input,
} from "./ProfileEdit.styled";
import Stbtn from "../../common/button/Button";
import ImageUpload from "../../Recruit/ImageUpload/ImageUpload";
import styled from "styled-components";

const ProfileEdit = () => {
	const role = getCookieToken(["authority"]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(__getCompanyInfo());
	}, [dispatch]);

	useEffect(() => {
		dispatch(__getUserInfo());
	}, [dispatch]);

	const companyInfo = useSelector(state => state?.mypage?.companyInfo);
	const userInfo = useSelector(state => state?.mypage);
	const [profileImage, setProfileImage] = useState(null);
	const [uploadCompanyPreview, setUploadCompanyPreview] = useState(companyInfo.profileImage);
	const [uploadUserPreview, setUploadUserPreview] = useState(userInfo.profileImage);

	const [editInput, setEditInput] = useState(Prev => {
		if (role === "ROLE_ADMIN") {
			const { email, introduction, password, passwordConfirm, profileImage, phoneNumber } =
				companyInfo;
			return {
				...Prev,
				email,
				introduction,
				password,
				passwordConfirm,
				profileImage,
				phoneNumber,
			};
		} else {
			const { email, introduction, password, passwordConfirm, profileImage, phoneNumber } =
				userInfo;
			return {
				...Prev,
				email,
				introduction,
				password,
				passwordConfirm,
				profileImage,
				phoneNumber,
			};
		}
	});
	console.log(editInput);

	// 이미지 upload
	const onChangeImage = e => {
		setProfileImage(e.target.files[0]);

		// 미리보기 온체인지 핸들러
		let reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			if (role === "ROLE_ADMIN") {
				setUploadCompanyPreview(previewImgUrl);
			} else {
				setUploadUserPreview(previewImgUrl);
			}
		};
	};

	const onChangeEdit = useCallback(
		e => {
			const { name, value } = e.target;
			setEditInput({ ...editInput, [name]: value });
		},
		[editInput]
	);

	// 오류메시지 상태 저장
	const [passwordMessage, setPasswordMessage] = useState(
		"8 ~ 20자, 알파벳 대소문자, 숫자, 특수문자로 구성됩니다."
	);
	const [pwConfirmMessage, setPwConfirmMessage] = useState("");

	//PW 정규식 검사
	const [isName, setIsName] = useState(false);
	const [isPw, setIsPw] = useState(false);
	const [isPwConfirm, setIsPwConfirm] = useState(false);

	//PW 정규식
	const onPwChange = useCallback(
		e => {
			const pwRegex = /^(?=.*[a-zA-Z0-9])(?=.*\d)(?=.*\W).{8,16}$/;
			const { name, value } = e.target;
			setEditInput({ ...editInput, [name]: value });
			if (value.length === 0) {
				setPasswordMessage("");
			} else {
				if (value.length < 8 || value.length > 20) {
					setPasswordMessage("8 ~ 20자, 알파벳 대소문자, 숫자, 특수문자로 구성됩니다.");
					setIsPw(false);
					if (!pwRegex.test(value)) {
						setPasswordMessage("비밀번호 형식이 틀렸습니다. 확인 바랍니다");
					}
				} else {
					setPasswordMessage("사용 가능합니다.");
					setIsPw(true);
				}
			}
		},
		[editInput]
	);

	const onPwConfirmChange = useCallback(
		e => {
			const { name, value } = e.target;
			setEditInput({ ...editInput, [name]: value });
			if (value === editInput.password) {
				setPwConfirmMessage("비밀번호가 일치합니다.");
				setIsPwConfirm(true);
			} else {
				setPwConfirmMessage("비밀번호를 확인 바랍니다.");
				setIsPwConfirm(false);
			}
		},
		[editInput]
	);

	const onSubmitHandler = e => {
		e.preventDefault();
		if (role === "ROLE_ADMIN") {
			dispatch(__putCompanyInfo({ ...editInput, profileImage }));
		} else {
			dispatch(__putUserInfo({ ...editInput, profileImage }));
		}
		navigate(-1);
	};

	return (
		<MyPageEditContainer>
			<form onSubmit={onSubmitHandler}>
				<MyPageEditForm>
					<MyPageEditBox>
						{role === "ROLE_ADMIN" ? (
							<div>
								<h4>기관 PW </h4>
								<Input
									type="password"
									Value={companyInfo?.password}
									key={companyInfo?.password}
									name="password"
									onChange={onPwChange}
								/>
								<p>{passwordMessage}</p>
								<h4>기관 PW 확인</h4>
								<Input
									type="password"
									Value={companyInfo?.passwordConfirm}
									key={companyInfo?.passwordConfirm}
									name="passwordConfirm"
									onChange={onPwConfirmChange}
								/>
								<p>{pwConfirmMessage}</p>
								<h4>이메일</h4>
								<Input
									type="text"
									required
									defaultValue={companyInfo?.email}
									key={companyInfo?.email}
									name="email"
									onChange={onChangeEdit}
								/>
								<h4>전화번호</h4>
								<Input
									type="text"
									defaultValue={companyInfo?.phoneNumber}
									key={companyInfo?.phoneNumber}
									name="phoneNumber"
									onChange={onChangeEdit}
								/>
								<h4>기관 소개</h4>
								<TextArea
									type="text"
									defaultValue={companyInfo?.introduction}
									key={companyInfo?.introduction}
									name="introduction"
									onChange={onChangeEdit}
								/>
								<Wrap>
									<p>기관 프로필 이미지 수정</p>
									<ImageUpload onChangeImage={onChangeImage} uploadPreview={uploadCompanyPreview} />
								</Wrap>
							</div>
						) : null}

						{role === "ROLE_MEMBER" ? (
							<div>
								<h4>회원 PW </h4>
								<Input
									type="password"
									Value={userInfo?.password}
									key={userInfo?.password}
									name="password"
									onChange={onPwChange}
								/>
								<p>{passwordMessage}</p>
								<h4>회원 PW 확인</h4>
								<Input
									type="password"
									Value={userInfo?.passwordConfirm}
									key={userInfo?.passwordConfirm}
									name="passwordConfirm"
									onChange={onPwConfirmChange}
								/>
								<p>{pwConfirmMessage}</p>
								<h4>이메일</h4>
								<Input
									type="text"
									required
									defaultValue={userInfo?.email}
									key={userInfo?.email}
									name="email"
									onChange={onChangeEdit}
								/>
								<h4>전화번호</h4>
								<Input
									type="text"
									defaultValue={userInfo?.phoneNumber}
									key={userInfo?.phoneNumber}
									name="phoneNumber"
									onChange={onChangeEdit}
								/>
								<h4>내 소개</h4>
								<TextArea
									type="text"
									defaultValue={userInfo?.introduction}
									key={userInfo?.introduction}
									name="introduction"
									onChange={onChangeEdit}
								/>
								<p> 프로필 이미지 수정</p>

								<ImageUpload onChangeImage={onChangeImage} uploadPreview={uploadUserPreview} />
							</div>
						) : null}

						<Stbtn variant="mypage-edit" type={"submit"}>
							수정 완료
						</Stbtn>
					</MyPageEditBox>
				</MyPageEditForm>
			</form>
		</MyPageEditContainer>
	);
};

export default ProfileEdit;

const Wrap = styled.div`
	padding-right: 200px;
`;
