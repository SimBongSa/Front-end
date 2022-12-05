import styled from "styled-components";

export const TagWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

export const TagColumn = styled.div`
	display: block;
	position: relative;
	height: auto;
	font-size: 20px;
	& ul {
		list-style: none;
		padding: 0;
		@media (max-width: 1024px) {
			margin: 0;
		}
		& li {
			display: block;
			position: relative;
			float: left;
			justify-content: center;
			align-items: center;
			width: auto;
			height: 80px;
			user-select: none;
			& input[type="checkbox"] {
				position: absolute;
				visibility: hidden;
				&:checked ~ label {
					color: ${props => props.theme.btnColor};
					font-size: 0.9em;
					font-weight: 600;
				}
			}
			& label {
				display: block;
				position: relative;
				font-weight: 300;
				padding: 0.5rem;
				font-size: 0.8em;
				margin: 10px auto;
				height: 30px;
				cursor: pointer;
				transition: all 0.25s linear;
			}
			&:hover label {
				color: ${props => props.theme.btnColor};
				font-size: 0.9em;
				font-weight: 600;
			}
		}
	}
`;
