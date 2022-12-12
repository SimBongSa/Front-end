import { useState } from "react";
import { TagWrap, TagColumn } from "./Tags.styled";

const Tags = ({ category, onChangeTags, prevTags }) => {

	const [categories] = useState([
		{ CHILD: "어린이" },
		{ DISABLED: "장애인" },
		{ SENIOR: "노인" },
		{ MULTICULTURAL_FAMILY: "다문화가정" },
		{ ENVIRONMENT: "환경" },
		{ ABANDONED_ANIMAL: "유기동물" },
	]);

	const [conditions] = useState([
		{ ADULT: "성인 우대" }, 
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
		console.log(target.checked)
		setIsChecked(!isChecked);
		onChangeTags(target);
	};

	const prevCategory = categories?.filter((item) => !prevTags?.includes(Object.values(item)[0]))
	const selectedCategory = categories?.filter((item) => prevTags?.includes(Object.values(item)[0]))

	const prevCondition = conditions?.filter((item) => !prevTags?.includes(Object.values(item)[0]))
	const selectedCondition = conditions?.filter((item) => prevTags?.includes(Object.values(item)[0]))

	const prevSkills = skills?.filter((item) => !prevTags?.includes(Object.values(item)[0]))
	const selectedSkills = skills?.filter((item) => prevTags?.includes(Object.values(item)[0]))

	return (
		<TagWrap>
			<TagColumn>
				<ul>
					{
						category === true ? (
							<>
								{
									selectedCategory ? (
										<>
											{
												selectedCategory.map((tag) => {
													return (
														<li key={Object.keys(tag)}>
															<input
																type="checkbox"
																id={Object.keys(tag)}
																value={Object.keys(tag)}
																onChange={(e) => checkHandler(e)}
																name="tags"
																defaultChecked
															/>
															<label htmlFor={Object.keys(tag)}>{Object.values(tag)}</label>
														</li>
													)
												})
											}
										</>
									) : null
								}

								{
									prevCategory ? (
										(
											<>
												{
													prevCategory.map((prev) => {
														return (
															<li key={Object.keys(prev)}>
																<input
																	type="checkbox"
																	id={Object.keys(prev)}
																	value={Object.keys(prev)}
																	onChange={(e) => checkHandler(e)}
																	name="tags"
																/>
																<label htmlFor={Object.keys(prev)}>{Object.values(prev)}</label>
															</li>
														)
													})
												}
											</>
										)
									) : null
								}
							</>
						) : null
					}

					{
						category === false ? (
							<>
								{
									selectedCondition ? (
										<>
											{
												selectedCondition.map((tag) => {
													return (
															<li key={Object.keys(tag)}>
																<input
																	type="checkbox"
																	id={Object.keys(tag)}
																	value={Object.keys(tag)}
																	onChange={(e) => checkHandler(e)}
																	name="tags"
																	defaultChecked
																/>
																<label htmlFor={Object.keys(tag)}>{Object.values(tag)}</label>
															</li>
														)
												})
											}
										</>
									) : null
								}

								{
									prevCondition ? (
										<>
											{
												prevCondition.map((prev) => {
													return (
														<li key={Object.keys(prev)}>
															<input
																type="checkbox"
																id={Object.keys(prev)}
																value={Object.keys(prev)}
																onChange={(e) => checkHandler(e)}
																name="tags"
															/>
															<label htmlFor={Object.keys(prev)}>{Object.values(prev)}</label>
														</li>
													)
												})
											}
										</>
									) : null
								}

								{
									selectedSkills ? (
										selectedSkills.map((tag) => {
											return (
												<li key={Object.keys(tag)}>
													<input
														type="checkbox"
														id={Object.keys(tag)}
														value={Object.keys(tag)}
														onChange={(e) => checkHandler(e)}
														name="tags"
														defaultChecked
													/>
													<label htmlFor={Object.keys(tag)}>{Object.values(tag)}</label>
												</li>
											)
										})
									) : null
								}

								{
									prevSkills ? (
										prevSkills.map((prev) => {
											return (
												<li key={Object.keys(prev)}>
													<input
														type="checkbox"
														id={Object.keys(prev)}
														value={Object.keys(prev)}
														onChange={(e) => checkHandler(e)}
														name="tags"
													/>
													<label htmlFor={Object.keys(prev)}>{Object.values(prev)}</label>
												</li>
											)
										})
									) : null
								}

							</>
						) : null
					}

				</ul>
			</TagColumn>
		</TagWrap>
	);
};

export default Tags;
