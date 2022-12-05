import { useState } from "react";
import { TagWrap, TagColumn } from "./Tags.styled";

const Tags = ({ category, onChangeTags }) => {

	const [categories] = useState([
		{ CHILD: "어린이" },
		{ DISABLED: "장애인" },
		{ SENIOR: "노인" },
		{ MULTICULTURAL_FAMILY: "다문화가정" },
		{ ENVIRONMENT: "환경" },
		{ ABANDONED_ANIMAL: "유기동물" },
	]);
	const [conditions] = useState([
		{ ADULT: "성인" }, 
		{ MALE: "남성" }, 
		{ FEMALE: "여성" }
	]);
	const [skills] = useState([
		{ GOOD_AT_CLEANING: "청소에 일가견이 있으신 분" },
		{ FUNNY: "성격이 유쾌하신 분" },
		{ PLAY_THE_INSTRUMENT: "악기 연주 가능한 사람" },
		{ ACTIVE: "활발한 사람이 좋아요" },
		{ LIKE_CHILD: "아이를 좋아하는 분" },
		{ CAREFUL: "꼼꼼한 사람이 좋아요" },
		{ MILITARY: "군필자를 우대해요" },
		{ LIKE_ANIMAL: "동물을 사랑하는 분" },
	]);

	const [isChecked, setIsChecked] = useState(false);

	const checkHandler = ({ target }) => {
		setIsChecked(!isChecked);
		onChangeTags(target);
		console.log("@@",target.checked)
	};
	
	return (
		<TagWrap>
			<TagColumn>
				<ul>
					{category === true ? (
						<>
							{categories.map(item => {
								return (
									<li key={Object.keys(item)}>
										<input
											type="checkbox"
											id={Object.keys(item)}
											value={Object.keys(item)}
											onChange={(e) => checkHandler(e)}
											name="tags"
											isChecked
										/>
										<label htmlFor={Object.keys(item)}>{Object.values(item)}</label>
									</li>
								);
							})}
						</>
					) : null}

					{category === false ? (
						<>
							{conditions.map(item => {
								return (
									<li key={Object.keys(item)}>
										<input
											type="checkbox"
											id={Object.keys(item)}
											value={Object.keys(item)}
											onChange={e => checkHandler(e)}
											name="tags"
										/>
										<label htmlFor={Object.keys(item)}>{Object.values(item)}</label>
									</li>
								);
							})}
							{skills.map(item => {
								return (
									<li key={Object.keys(item)}>
										<input
											type="checkbox"
											id={Object.keys(item)}
											value={Object.keys(item)}
											onChange={e => checkHandler(e)}
											name="tags"
										/>
										<label htmlFor={Object.keys(item)}>{Object.values(item)}</label>
									</li>
								);
							})}
						</>
					) : null}
				</ul>
			</TagColumn>
		</TagWrap>
	);
};

export default Tags;
