import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __getBoardId, __editBoard } from "../../../redux/modules/boardSlice";
import { RegisterDatePicker, TextArea } from "./DetailEdit.styled";
import PopupDom from "../../Map/PopupDom";
import moment from "moment";
import PopupPostCode from "../../Map/PopupPostCode";
import { ko } from "date-fns/esm/locale";
import Stbtn from "../../common/button/Button";
import Input from "../../common/input/Input";
import ImageUpload from "../../Recruit/ImageUpload/ImageUpload";
import { RecruitContainer, StLeftWrap, StRightWrap } from "../../Recruit/Recruit.styled";
import Tags from "../../Recruit/Tags/Tags";

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

	// const [tags, setTags] = useState([...boardsId?.tags]);
	const [tags, setTags] = useState(boardsId?.tags);
	console.log(tags);
		// Tags
	const onChangeTags = (e) => {
		if (e.checked) {
			const tag = e.id;
			setTags([...tags, tag]);
		} else if (!e.checked && tags.includes(e.id)) {
			setTags(tags.filter(item => e.id !== item));
		}
	};

	const upDate = {
		...input,
		boardImage,
		startDate: moment(startDate).format("YYYY-MM-DD"),
		endDate: moment(endDate).format("YYYY-MM-DD"),
		dueDay: moment(dueDay).format("YYYY-MM-DD HH:mm:ss"),
		tags: tags
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		dispatch(__editBoard({ upDate, id }));
	};

	return (
		<RecruitContainer>
			<form onSubmit={onSubmitHandler}>
				<StLeftWrap>
					<h1><span>봉사 활동</span>에 대해 궁금해요!</h1>
					<p><span>모집글</span>을 써주세요!</p>
					<Input
						type="text"
						name="title"
						defaultValue={boardsId?.title}
						key={boardsId?.title}
						onChange={onChangeHandler}
					/>
					<p>봉사활동 <span>모집기간</span></p>
					<RegisterDatePicker
						locale={ko}
						dateFormat="📅 yyyy년-MM월-dd일"
						selected={startDate}
						onChange={onChange}
						startDate={startDate}
						endDate={endDate}
						selectsRange
					/>
					<p>활동 <span>날짜와 시간</span>을 선택해주세요!</p>
					<RegisterDatePicker
						locale={ko}
						selected={dueDay}
						onChange={due => setDueDay(due)}
						showTimeSelect
						minTime={due.setHours(due.setMinutes(new Date(), 0), 9)}
						maxTime={due.setHours(due.setMinutes(new Date(), 0), 18)}
						dateFormat="📅 yyyy년-MM월-dd일 / 🕜 aa h:mm "
					/>
					<p>봉사 기관에 대한 <span>주소</span>를 입력해주세요!
						<Stbtn variant="recruit-post" type="button" onClick={openPostCode}>
							우편번호 검색
						</Stbtn>
					</p>
					
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
					<Input
						type="text"
						placeholder="봉사활동 상세 주소"
						name="detailArea"
						value={boardsId?.detailArea}
						onChange={onChangeHandler}
					/>
					<p> 게시글 이미지 수정</p>
					<ImageUpload onChangeImage={onChangeImage} uploadPreview={uploadpreview} />
				</StLeftWrap>

				<StRightWrap>
					<h1><span>모집 내용</span>에 대해 궁금해요!</h1>	

					<p><span>봉사 카테고리</span>를 선택해 주세요!</p>
					<h1><Tags category={true} onChangeTags={onChangeTags} prevTags={tags}/></h1>

					<p><span>이런 사람</span>을 찾고 있어요!</p>
					<h1><Tags category={false} onChangeTags={onChangeTags} prevTags={tags}/></h1>

					<p>세부 내용</p>
					<TextArea
						type="text"
						defaultValue={boardsId?.content}
						name={"content"}
						onChange={onChangeHandler}
					/>
					<Stbtn variant="board-edit" type={"submit"}>
						수정 완료
					</Stbtn>
				</StRightWrap>
			</form>
		</RecruitContainer>
	);
};

export default DetailEdit;
