import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getBoardId, __editBoard } from "../../redux/modules/boardSlice";
import styled from "styled-components";
import { DetailContainer, DetailContent } from "./Detail.styled";
import PopupDom from "../Map/PopupDom";
import PopupPostCode from "../Map/PopupPostCode";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import Stbtn from "../common/button/Button";

const DetailEdit = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [address, setAddress] = useState("");
	const [boardImage, setBoardImage] = useState(null);
	const [input, setInput] = useState("");
	const [uploadpreview, setUploadpreview] = useState("");

	const boardsId = useSelector(state => state?.boards?.boardsId);

	const today = new Date();
	const due = new Date();
	const [startDate, setStartDate] = useState(today);
	const [endDate, setEndDate] = useState(null);
	const [dueDay, setDueDay] = useState(due.setHours(due.setMinutes(new Date(), 30), 17));

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	const onChange = dates => {
		const [start, end, due] = dates;
		setStartDate(start);
		setEndDate(end);
		setDueDay(due);
	};

	// 팝업창 열기
	const openPostCode = () => {
		setIsPopupOpen(true);
	};
	// 팝업창 닫기
	const closePostCode = () => {
		setIsPopupOpen(false);
	};

	//이미지 스테이트저장
	const onChangeImage = e => {
		setBoardImage(e.target.files[0]);

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

	//해당 페이지의 id에 해당되는 객체 불러오기
	console.log(boardsId);

	useEffect(() => {
		dispatch(__getBoardId(id));
	}, [dispatch, id]);

	const onChangeHandler = e => {
		console.log("인풋=>", input);
		const { name, value } = e.target;
		// setInput({ ...input, [name]: value, area: address });
		setInput({ ...input, [name]: value });
	};
	const upDate = { ...input, boardImage };
	const onSubmitHandler = e => {
		e.preventDefault();
		dispatch(__editBoard({ upDate, id }));
		// navigate(`/detail/${id}`);
	};

	console.log("Detail.jsx boardsId =>", boardsId);

	return (
		<form onSubmit={onSubmitHandler}>
			{/* <MainBg image={boardsId?.boardImage} /> */}
			<DetailContainer>
				<DetailContent>
					<h4>봉사 내용 주제</h4>
					<Input
						placeholder="봉사 활동 주제"
						type="text"
						name="title"
						defaultValue={boardsId?.title}
						onChange={onChangeHandler}
					/>
					<h4>봉사활동 모집기간</h4>
					<RegisterDatePicker
						locale={ko}
						dateFormat="📅 yyyy년-MM월-dd일"
						selected={startDate}
						onChange={onChange}
						startDate={startDate}
						endDate={endDate}
						selectsRange
					/>
					<h4>봉사활동 날짜 및 시각</h4>
					<RegisterDatePicker
						locale={ko}
						selected={dueDay}
						onChange={due => setDueDay(due)}
						showTimeSelect
						minTime={due.setHours(due.setMinutes(new Date(), 0), 9)}
						maxTime={due.setHours(due.setMinutes(new Date(), 0), 18)}
						dateFormat="📅 yyyy년-MM월-dd일 / 🕜 aa h:mm "
					/>
					<h4>행사 주소</h4>
					<Input
						placeholder="클릭 시 우편번호 검색"
						type="text"
						name="area"
						value={address}
						onClick={openPostCode}
					/>
					<div id="popupDom">
						{isPopupOpen && (
							<PopupDom>
								<PopupPostCode setAddress={setAddress} onClose={closePostCode} />
							</PopupDom>
						)}
					</div>
					<h4>상세 주소</h4>
					<Input
						type="text"
						placeholder="봉사활동 상세 주소"
						name="detailArea"
						value={boardsId?.detailArea}
						onChange={onChangeHandler}
					/>
					봉사 내용 및 설명:
					<TextArea
						type="text"
						defaultValue={boardsId?.content}
						name={"content"}
						onChange={onChangeHandler}
					/>
					<ImgSize src={uploadpreview} alt="" />
					<Input
						name="thumbNail"
						type={"file"}
						accept={"image/*"}
						placeholder="이미지업로드"
						onChange={onChangeImage}
					/>
				</DetailContent>
			</DetailContainer>
			{/* <button type={"submit"} onClick={() => navigate(`/boards/${id}`)}> */}
			<Stbtn variant="mypageedit" type={"submit"}>
				수정 완료
			</Stbtn>
		</form>
	);
};

export default DetailEdit;

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
	margin-top: 10px;
	padding-left: 10px;
`;

const RegisterDatePicker = styled(DatePicker)({
	margin: "1px",
	fontSize: "15px",
	padding: "20px",
	width: "590px",
	paddingLeft: "20px",
	border: "1px solid #66885d",
	borderRadius: "30px",
	outline: "none",
	marginBottom: "1rem",
	background: `${props => props.theme.textColor}`,
});

const TextArea = styled.textarea`
	margin: 1px;
	margin-top: 10px;
	width: 590px;
	border-radius: 30px;
	height: 300px;
	padding-right: 10px;

	border: 1px solid #66885d;
	resize: none;
`;
