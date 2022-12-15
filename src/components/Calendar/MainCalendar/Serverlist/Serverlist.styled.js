import styled from "styled-components";

export const StServerListContainer = styled.div`
	display: flex;
	max-width: 800px;
	min-width: 300px;
	height: 7.5rem;
	margin: 1.5rem 1rem 1rem 1rem;
	border-bottom: 1px solid ${props => props.theme.borderBottom};
	color: ${props => props.theme.textColor};
	white-space: nowrap;
	text-overflow: ellipsis;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		transform: translateY(-0.5rem);
	}
`;

export const StServerListImg = styled.div`
	width: 8rem;
	height: 6rem;
	border-radius: 10px;
	& img {
		width: inherit;
		height: inherit;
		object-fit: cover;
		border-radius: 10px;
	}
`;

export const StBody = styled.div`
	margin-left: 1.5rem;
	height: 2rem;
	flex-wrap: wrap;
	& > div {
		margin-top: 0.5rem;
		margin-bottom: 1rem;
		font-weight: 500;
		font-size: 1.2rem;
		max-width: 98%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

export const StCardInfo = styled.span`
	display: flex;
	font-size: 0.8rem;
	align-items: center;
	text-align: center;
	line-height: 0.5rem;
	margin-top: 1.5rem;
	margin-bottom: 0.5rem;
`;

export const StArea = styled.span`
	max-width: 150px;
	color: ${props => props.theme.bgColor};
	background-color: ${props => props.theme.subTextColor};
	border-radius: 17px;
	padding: 5px 10px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const StDetailArea = styled.span`
	color: ${props => props.theme.textColor};
	padding: 5px;
	text-align: center;
	max-width: 33%;
	margin-left: 1rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
