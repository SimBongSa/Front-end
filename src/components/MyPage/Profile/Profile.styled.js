import styled, { css } from "styled-components";

export const ProfileContainer = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "user":
				return css`
					float: left;
					position: fixed;
					margin-left: 2rem;
					border-radius: 5px;
					padding: 20px 10px 10px 10px;
					width: 200px;
					max-width: 100%;
					text-align: center;
					z-index: 1;
					& h3 {
						font-size: 1.2rem;
						margin: 10px 0;
					}
					& h4 {
						text-align: left;
					}
					& h5 {
						text-align: left;
						margin: 1rem;
						color: ${props => props.theme.subTextColor};
						@media (max-width: 1024px) {
							text-align: center;
						}
					}
					& p {
						text-align: left;
						color: ${props => props.theme.subTextColor};
						font-size: 0.9rem;
						width: 90%;
						margin: 1rem;
					}
					& img {
						width: 10rem;
						height: 10rem;
						border: 1px solid #ffffff;
						border-radius: 50%;
						padding: 7px;
					}
					@media (max-width: 1024px) {
						display: flex;
						position: sticky;
						flex-direction: column;
						position: relative;
						width: 90%;
						margin-top: 25rem;
						z-index: 1;
					}
				`;
			case "Company":
				return css`
					float: left;
					position: fixed;
					margin-left: 2rem;
					border-radius: 5px;
					top: 17%;
					padding: 20px 10px 10px 10px;
					width: 200px;
					max-width: 100%;
					text-align: center;
					z-index: 1;
					& h3 {
						font-size: 1.2rem;
						margin: 10px 0;
					}
					& h4 {
						text-align: left;
					}
					& h5 {
						text-align: left;
						margin: 1rem;
						color: ${props => props.theme.subTextColor};
						@media (max-width: 1024px) {
							text-align: center;
						}
					}
					& p {
						text-align: left;
						color: ${props => props.theme.subTextColor};
						font-size: 0.9rem;
						width: 90%;
						margin: 1rem;
					}
					& img {
						width: 10rem;
						height: 10rem;
						border: 1px solid #ffffff;
						border-radius: 50%;
						padding: 7px;
					}
					@media (max-width: 1024px) {
						display: flex;
						position: sticky;
						flex-direction: column;
						position: relative;
						width: 90%;
						margin-top: 25rem;
						z-index: 1;
					}
				`;
			default:
				break;
		}
	}}
`;

export const ProfileBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	margin-left: -2rem;
	padding: 20px 10px 10px 10px;
	width: 300px;
	& img {
		margin: 0 auto;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
	}
	@media (max-width: 1024px) {
		flex-direction: column;
		margin: 0 auto;
		margin-top: -15rem;
		width: 500px;
	}
`;

export const ProfileTag = styled.span`
	color: #231e39;
	background-color: #febb0b;
	border-radius: 3px;
	font-size: 14px;
	font-weight: bold;
	padding: 3px 7px;
	position: absolute;
	top: 4rem;
	left: 2rem;
	z-index: 4;
`;

export const ProfileSkills = styled.div`
	text-align: left;
	& h5 {
		color: #ffffff;
		margin: 10px 0;
		margin-left: 10px;
	}
`;
export const ProfileSkill = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	& li {
		display: flex;
		border: 1px solid #232323;
		border-radius: 4px;
		display: inline-block;
		font-size: 12px;
		margin: 0 7px 7px 7px;
		padding: 7px;
		transition: all 0.3s;
		&:hover {
			transform: translateY(-3%);
		}
	}
`;

export const ProfileCategory = styled.h4`
	text-align: left;
	margin: 1rem;
	margin-top: 2rem;
	padding-left: 1rem;
	width: 45%;
	font-size: 1rem;
	& div {
		font-size: 1.2rem;
		margin-bottom: 0.6rem;
	}
	& span {
		font-size: 0.9rem;
	}
	@media (max-width: 1024px) {
		padding-left: 4.5rem;
	}
`;

export const ProfileMisc = styled.div`
	text-align: left;
	margin: 2rem 0rem rem 0rem;
	& h2 {
		font-size: 1.4rem;
	}
	& h4 {
		cursor: pointer;
		font-size: 0.8rem;
		margin-top: 2rem;
		transition: all 0.3s;
		&:hover {
			transform: translateY(-15%);
		}
	}
	& span {
		margin-top: 1rem;
		position: absolute;
		width: 230px;
		height: 1px;
		background: #aaaaaa;
	}
	@media (max-width: 1024px) {
		flex-direction: column;
		margin: 0 auto;
		margin-top: 5rem;
		width: 500px;
	}
`;

export const ProfileInfo = styled.div`
	text-align: left;
	position: relative;
	& h3 {
		text-align: center;
		position: relative;
	}
	& h5 {
		padding-left: 3rem;
		color: ${props => props.theme.subTextColor};
		@media (max-width: 1024px) {
			padding-left: 0;
		}
	}
	& p {
		padding-left: 2rem;
	}
	& span {
		border-radius: 50%;
		background-image: url('./image/32badge1.png');
	}
	@media (max-width: 1024px) {
		text-align: center;
	}
`;

export const MyActivity = styled.div`
	display: flex;
	justify-content: space-between;
`;
