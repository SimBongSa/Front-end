import styled from "styled-components";

export const ServerListContainer = styled.div`
	display: flex;
	/* width: 30rem; */
	height: 7.5rem;
	margin-top: 2rem;
	border-bottom: 1px solid ${props => props.theme.textColor};
	color: ${props => props.theme.textColor};
`;

export const ServerListImg = styled.div`
	width: 6rem;
	height: 6rem;
	border-radius: 10px;
	& img {
		width: inherit;
		height: inherit;
		object-fit: cover;
		border-radius: 10px;
	}
`;

export const Body = styled.div`
	margin-left: 1.5rem;
	height: 2rem;
	flex-wrap: wrap;
	& > div {
		margin-top: 0.5rem;
		margin-bottom: 1rem;
		font-weight: bolder;
		font-size: 1.2rem;
	}
`;

export const StCardInfo = styled.span`
	display: flex;
	font-size: 0.8rem;
	align-items: center;
	text-align: center;
	line-height: 0.5rem;
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
	margin-left: 1rem;
`;

export const StMoreBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 5px;
`;

export const StMore = styled.div`
	width: 8px;
	height: 8px;
	margin-top: 1rem;
	border: 1px solid gray;
	border-radius: 50%;
	cursor: pointer;
	:hover {
		background-color: gray;
	}
`;
