import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __getBoardId, __editBoard } from "../../../redux/modules/boardSlice";
import { DetailContainer, DetailContent, RegisterDatePicker, TextArea } from "./DetailEdit.styled";
import PopupDom from "../../Map/PopupDom";
import moment from "moment";
import PopupPostCode from "../../Map/PopupPostCode";
import { ko } from "date-fns/esm/locale";
import Stbtn from "../../common/button/Button";
import Input from "../../common/input/Input";
import ImageUpload from "../../Recruit/ImageUpload/ImageUpload";

//기관의 페이지 수정
const DetailEdit = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [boardImage, setBoardImage] = useState(null);
	const [input, setInput] = useState("");

	const boardsId = useSelector((state) => state?.boards?.board);
	const [uploadpreview, setUploadpreview] = useState(boardsId.boardImage);

	const [address, setAddress] = useState(boardsId.area);

	const today = new Date();
	const due = new Date();
	const [startDate, setStartDate] = useState(today);
	const [endDate, setEndDate] = useState(null);
	const [dueDay, setDueDay] = useState(due.setHours(due.setMinutes(new Date(), 30), 17));
	const dispatch = useDispatch();

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
	const onChangeImage = (e) => {
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
	useEffect(() => {
		dispatch(__getBoardId(id));
	}, [dispatch, id]);

	const onChangeHandler = e => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value, area: address });
	};
	const upDate = {
		...input,
		boardImage,
		startDate: moment(startDate).format("YYYY-MM-DD"),
		endDate: moment(endDate).format("YYYY-MM-DD"),
		dueDay: moment(dueDay).format("YYYY-MM-DD HH:mm:ss"),
	};
	const onSubmitHandler = e => {
		e.preventDefault();
		dispatch(__editBoard({ upDate, id }));
	};

	return (
		<form onSubmit={onSubmitHandler}>
			{/* <MainBg image={boardsId?.boardImage} /> */}
			<DetailContainer>
				<DetailContent>
					<h4>봉사 내용 주제</h4>
					<Input
						type="text"
						name="title"
						defaultValue={boardsId?.title}
						key={boardsId?.title}
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
					<Stbtn variant="edit-post" type="button" onClick={openPostCode}>
						우편번호 검색
					</Stbtn>
					<Input
						placeholder={address}
						type="text"
						required
						defaultValue={address}
						key={address}
						name="area"
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
					<p> 게시글 이미지 수정</p>
					<ImageUpload onChangeImage={onChangeImage} uploadPreview={uploadpreview} />
					{/* <button type={"submit"} onClick={() => navigate(`/boards/${id}`)}> */}
					<Stbtn variant="board-edit" type={"submit"}>
						수정 완료
					</Stbtn>
				</DetailContent>
			</DetailContainer>
		</form>
	);
};

export default DetailEdit;
