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
import { RecruitContainer } from "./Recruit.styled";
import { useNavigate } from "react-router-dom";
import Tags from "./Tags/Tags";
import ImageUpload from "./ImageUpload/ImageUpload";
import Stbtn from "../common/button/Button";

const Recruit = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const status = useSelector(state => state.boards.status);

	const [isPopupOpen, setIsPopupOpen] = useState(false);
	console.log(isPopupOpen);

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
	const [dueDay, setDueDay] = useState(due);

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
	console.log(input);
	const [tags, setTags] = useState([]);
	const [address, setAddress] = useState("");

	//텍스트데이터 스테이즈 저장
	const onChangeInput = e => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value, area: address, tags: tags });
	};

	const onChangeTags = e => {
		const tag = e;
		setTags([...tags, tag]);
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
				dueDay: moment(dueDay).format("YYYY-MM-DD"),
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
					<h3>
						<span>봉사 활동</span>에 대해 궁금해요!
					</h3>
					<Input
						placeholder="어떤 봉사활동인가요?"
						type="text"
						name="title"
						value={input.title}
						onChange={e => onChangeInput(e)}
					/>
					<p>카테고리를 선택해 주세요!</p>
					<Tags category={true} onChangeTags={onChangeTags} />
					<p>활동 날짜와 시간을 선택해주세요!</p>
					<RegisterDatePicker
						locale={ko}
						selected={dueDay}
						onChange={date => setDueDay(date)}
						showTimeSelect
						dateFormat="📅 yyyy년-MM월-dd일 "
					/>

					<label htmlFor="address" onClick={openPostCode}>
						우편번호 검색
					</label>

					<p>봉사 기관에 대한 주소를 입력해주세요!</p>
					<Input
						id="address"
						placeholder="행사 주소(우편번호 검색 클릭)"
						type="text"
						name="area"
						value={address}
						onClick={openPostCode}
					/>
					{/* <button onClick={openPostCode} type="button">
						우편번호
					</button> */}
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
					<p>세부 내용</p>
					<TextArea
						placeholder="봉사 활동 내용"
						type="text"
						name="content"
						value={input.content}
						onChange={e => onChangeInput(e)}
					/>
				</StLeftWrap>

				<StRightWrap>
					<h3>
						<span>모집 내용</span>에 대해 궁금해요!
					</h3>
					<p>봉사활동 모집기간</p>
					<RegisterDatePicker
						locale={ko}
						dateFormat="📅 yyyy년-MM월-dd일"
						selected={startDate}
						onChange={onChange}
						startDate={startDate}
						endDate={endDate}
						selectsRange
					/>
					<p>봉사활동을 잘 나타내 줄 이미지를 올려보세요</p>
					<ImageUpload onChangeImage={onChangeImage} uploadPreview={uploadPreview} />

					<p>이런 사람을 찾고 있어요!</p>
					<Tags category={false} onChangeTags={onChangeTags} />

					<Stbtn variant="recruit-green">봉사활동 등록하기</Stbtn>
				</StRightWrap>
			</form>
		</RecruitContainer>
	);
};

export default Recruit;

export const StLeftWrap = styled.div`
	width: 40%;
	float: left;
	& h3 {
		margin: 1rem;
		font-size: 1.2rem;
		& span {
			font-weight: 500;
			color: ${props => props.theme.btnColor};
		}
	}
	& label {
		margin: 1rem;
	}
	@media (max-width: 1024px) {
		width: 80%;
		float: none;
	}
`;

export const StRightWrap = styled.div`
	width: 40%;
	float: right;
	& h3 {
		margin: 1rem;
		font-size: 1.2rem;
		& span {
			font-weight: 500;
			color: ${props => props.theme.btnColor};
		}
	}
	@media (max-width: 1024px) {
		width: 80%;
		float: none;
	}
`;

export const ImageUploadBox = styled.div`
	& input[type="file"] {
		display: none;
	}
	& label {
		cursor: pointer;
		display: flex;
		width: 100%;
		justify-content: center;
		margin: 0 auto;
		margin: 1rem;
		padding: 1rem;
		background: #aaaaaa;
		& .uploadBtn {
			font-size: 2rem;
			margin-left: 1.5rem;
		}
		& .textBox {
		}
	}
`;

const TextArea = styled.textarea`
	margin: 1rem;
	width: 100%;
	border: none;
	border-radius: 10px;
	outline: none;
	resize: none;
	padding: 1rem;
	&:focus {
		outline: 2px solid ${props => props.theme.btnColor};
	}
	button {
		width: 300px;
		height: 60px;
		border-radius: 30px;
		background-color: #66885d;
		border: none;
	}
`;

const RegisterDatePicker = styled(DatePicker)`
	margin: 1rem;
	font-size: 15px;
	padding: 20px;
	width: 100%;
	// paddingLeft: "20px",
	border: 1px solid #66885d;
	border-radius: 30px;
	outline: none;
	background: ${props => props.theme.textColor};
`;

// const Button = styled.button`
// 	border: 0;
// 	outline: none;
// 	font-size: 20px;
// 	margin: 20px;
// 	color: ${props => props.theme.btnColor};
// 	background: gainsboro;
// 	padding: 10px;
// 	cursor: pointer;
// 	border-radius: 10px;
// 	:hover {
// 		color: ${props => props.theme.subBtnColor};
// 	}
// `;
