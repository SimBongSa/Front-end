import styled from "styled-components";

export const CompanyPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5rem;
	margin-left: 30rem;
	margin-bottom: 5rem;
	@media (max-width: 1024px) {
		margin: 0 auto;
		margin-top: 10rem;
		float: right;
	}
`;

export const BtnContainer = styled.div`
	display: flex;
	flex-direction: row;
	overflow: hidden;
	margin-bottom: 2rem;
	& input[type="radio"] {
		display: none;
		&:checked:nth-child(1) ~ nav > label:nth-child(1) {
			color: ${props => props.theme.textColor};
			border-bottom: 3px solid ${props => props.theme.textColor};
		}
		&:checked:nth-child(2) ~ nav > label:nth-child(2) {
			color: ${props => props.theme.textColor};
			border-bottom: 3px solid ${props => props.theme.textColor};
		}
	}
	& nav {
		width: 100%;
		display: table;
		& label {
			display: table-cell;
			cursor: pointer;
			width: 350px;
			line-height: 3;
			text-align: center;
			text-transform: uppercase;
			border: none;
			background: transparent;
			color: #aaaaaa;
			font-size: 1.5rem;
			border-bottom: 3px solid #aaaaaa;
			&:hover {
				border-bottom: 3px solid #aaaaaa;
			}
		}
	}
	@media screen and (max-width: 1024px) {
		width: 100%;
	}
`;
