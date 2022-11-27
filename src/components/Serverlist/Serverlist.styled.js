import styled from "styled-components";

export const ServerListContainer = styled.div`
	display: flex;
	/* width: 30rem; */
	height: 7.5rem;
	margin-top: 2rem;
	border-bottom: 1px solid ${props => props.theme.textColor};
	cursor: pointer;
	color: ${props => props.theme.textColor};
	transition: 0.4s;
	&:hover {
		transform: translateY(-5%);
	}
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
	margin-left: 2rem;
	height: 2rem;
	flex-wrap: wrap;
	& > div {
		margin-top: 0.5rem;
	}
`;
