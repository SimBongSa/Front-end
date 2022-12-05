import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopupDom from "../Map/PopupDom";
import PopupPostCode from "../Map/PopupPostCode";
import Input from "../common/input/Input";
import { __createBoard } from "../../redux/modules/boardSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Tags from "./Tags/Tags";
import ImageUpload from "./ImageUpload/ImageUpload";
import Stbtn from "../common/button/Button";
import {
	RecruitContainer,
	StLeftWrap,
	StRightWrap,
	TextArea,
	RegisterDatePicker,
} from "./Recruit.styled";

const Recruit = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const status = useSelector(state => state.boards.status);

	const [isPopupOpen, setIsPopupOpen] = useState(false);

	// Image
	const [boardImage, setBoardImage] = useState(null);
	const [uploadPreview, setUploadPreview] = useState([]);

	const onChangeImage = e => {
		setBoardImage(e.target.files[0]);
		let reader = new FileReader();

		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			if (previewImgUrl) {
				setUploadPreview(previewImgUrl);
			}
		};
	};

	// date picker
	const today = new Date();
	const due = new Date();
	const [startDate, setStartDate] = useState(today);
	const [endDate, setEndDate] = useState(null);
	const [dueDay, setDueDay] = useState(due.setHours(due.setMinutes(new Date(), 30), 17));

	// 팝업창 열기
	const openPostCode = () => {
		setIsPopupOpen(true);
	};

	// 팝업창 닫기
	const closePostCode = () => {
		setIsPopupOpen(false);
	};

	const onChange = dates => {
		const [start, end, due] = dates;
		setStartDate(start);
		setEndDate(end);
		setDueDay(due);
	};

	// const onChangeDue = day => {
	// 	const [due] = day;
	// 	setDueDay(due);
	// };

	const init = {
		title: "",
		content: "",
		dueDay: "",
		startDate: "",
		endDate: "",
		area: "",
		detailArea: "",
	};

	//폼데이터 전송 스테이트
	const [input, setInput] = useState(init);
	const [tags, setTags] = useState([]);
	const [address, setAddress] = useState("");

	//텍스트데이터 스테이즈 저장
	const onChangeInput = e => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value, area: address, tags: tags });
	};


	// Tags
	const onChangeTags = (e) => {
		if (e.checked) {
			const tag = e.id;
			setTags([...tags, tag]);
		} else if (!e.checked && tags.includes(e.id)) {
			setTags(tags.filter(item => e.id !== item));
		}
	};
	console.log(tags);

	const submitHandler = e => {
		e.preventDefault();
		dispatch(
			__createBoard({
				...input,
				boardImage,
				startDate: moment(startDate).format("YYYY-MM-DD"),
				endDate: moment(endDate).format("YYYY-MM-DD"),
				dueDay: moment(dueDay).format("YYYY-MM-DD HH:mm:ss"),
			})
		);
		if (status === 200) {
			alert("게시물 등록 완료");
			navigate("/boards");
		} else {
			alert("게시물 등록에 실패했습니다. 내용을 다시 확인해주세요");
		}
	};
	console.log("dueDay =>", dueDay);

	return (
		<RecruitContainer>
			<form onSubmit={submitHandler}>
				<h2>봉사 등록하기</h2>
				<StLeftWrap>
					<h1>
						<h3>
							<span>봉사 활동</span>에 대해 궁금해요!
						</h3>
					</h1>
					<p>
						<span>모집글</span>을 써주세요!
					</p>
					<Input
						placeholder="어떤 봉사활동인가요?"
						type="text"
						name="title"
						value={input.title}
						onChange={e => onChangeInput(e)}
					/>
					<p>
						봉사활동 <span>모집기간</span>
					</p>
					<RegisterDatePicker
						locale={ko}
						dateFormat="📅 yyyy년-MM월-dd일"
						selected={startDate}
						onChange={onChange}
						startDate={startDate}
						endDate={endDate}
						selectsRange
					/>
					<p>
						활동 <span>날짜와 시간</span>을 선택해주세요!
					</p>
					<RegisterDatePicker
						locale={ko}
						selected={dueDay}
						onChange={date => setDueDay(date)}
						showTimeSelect
						minTime={due.setHours(due.setMinutes(new Date(), 0), 9)}
						maxTime={due.setHours(due.setMinutes(new Date(), 0), 18)}
						dateFormat="📅 yyyy년-MM월-dd일 / 🕜 aa h:mm "
					/>

					<p>
						봉사 기관에 대한 <span>주소</span>를 입력해주세요!
						<Stbtn variant="recruit-post" type="button" onClick={openPostCode}>
							우편번호 검색
						</Stbtn>
					</p>

					<Input
						id="address"
						placeholder="행사 주소(우편번호 검색 클릭)"
						type="text"
						name="area"
						value={address}
						onClick={openPostCode}
					></Input>

					<div id="popupDom">
						{isPopupOpen && (
							<PopupDom>
								<PopupPostCode setAddress={setAddress} onClose={closePostCode} />
							</PopupDom>
						)}
					</div>
					<Input
						type="text"
						placeholder="봉사활동 상세주소"
						name="detailArea"
						value={input.detailArea}
						onChange={e => onChangeInput(e)}
					/>

					<p>봉사활동을 잘 나타내 줄 이미지를 올려보세요</p>
					<ImageUpload onChangeImage={onChangeImage} uploadPreview={uploadPreview} />
				</StLeftWrap>

				<StRightWrap>
					<h1>
						<h3>
							<span>모집 내용</span>에 대해 궁금해요!
						</h3>
					</h1>

					<p>
						<span>봉사 카테고리</span>를 선택해 주세요!
					</p>
					<h1>
						<Tags category={true} onChangeTags={onChangeTags} />
					</h1>

					<p>
						<span>이런 사람</span>을 찾고 있어요!
					</p>
					<h1>
						<Tags category={false} onChangeTags={onChangeTags} />
					</h1>

					<p>세부 내용</p>
					<TextArea
						placeholder="봉사 활동 내용"
						type="text"
						name="content"
						value={input.content}
						onChange={(e) => onChangeInput(e)}
					/>

					<Stbtn variant="recruit-green">봉사활동 등록하기</Stbtn>
				</StRightWrap>
			</form>
		</RecruitContainer>
	);
};

export default Recruit;
