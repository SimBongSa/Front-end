import styled, { css } from "styled-components";

export const MyProcessContainer = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "user":
				return css`
					display: inline-flex;
					flex-direction: column;
					margin-top: 8rem;
					margin-left: 25rem;
					width: 60%;
					box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.5);
					& h1 {
						font-size: 2rem;
						margin: 1rem;
					}
					@media (max-width: 1024px) {
						margin: 0 auto;
						float: left;
					}
				`;
			case "Company":
				return css`
					display: inline-flex;
					flex-direction: column;
					margin-top: 18rem;
					margin-left: 30rem;
					width: 60%;
					box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.5);
					& h1 {
						font-size: 2rem;
						margin: 1rem;
					}
					@media (max-width: 1024px) {
						margin: 0 auto;
						float: left;
					}
				`;
			default:
				break;
		}
	}}
`;

export const ProcessStepWrap = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "user":
				return css`
					display: flex;
					position: sticky;
					justify-content: center;
					align-items: center;
					width: 80%;
					margin-left: auto;
					margin-right: auto;
					/* box-shadow: 0 3px 8px -6px rgba(0,0,0,.50); */
					background: ${props => props.theme.subBgColor};
					@media (max-width: 1024px) {
						width: 100%;
						margin-left: 0rem;
						float: left;
					}
				`;
			case "Company":
				return css`
					display: flex;
					position: sticky;
					justify-content: center;
					align-items: center;
					width: 60%;
					margin-left: auto;
					margin-right: auto;
					/* box-shadow: 0 3px 8px -6px rgba(0,0,0,.50); */
					background: ${props => props.theme.subBgColor};
					@media (max-width: 1024px) {
						width: 100%;
						margin-left: 0rem;
						float: left;
					}
				`;
			default:
				break;
		}
	}}
`;

export const ProcessStep = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "user":
				return css`
					cursor: pointer;
					position: relative;
					width: 200px;
					padding: 24px;
					transition: all 0.3s;
					&:hover {
						color: ${props => props.theme.bgColor};
						background: ${props => props.theme.subTextColor};
					}
					@media (max-width: 1024px) {
						width: 200px;
					}
				`;
			case "Company":
				return css`
					cursor: pointer;
					position: relative;
					width: 200px;
					padding: 24px;
					transition: all 0.3s;
					&:hover {
						color: ${props => props.theme.bgColor};
						background: ${props => props.theme.subTextColor};
					}
					@media (max-width: 1024px) {
						width: 200px;
					}
				`;
			default:
				break;
		}
	}}
`;

export const ProcessCircle = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "user":
				return css`
					width: 30px;
					height: 30px;
					margin: 0 auto;
					background-color: ${props => props.theme.btnColor};
					border-radius: 50%;
					text-align: center;
					align-items: center;
					line-height: 33px;
					font-size: 16px;
					font-weight: 600;
					color: #ffffff;
				`;
			case "Company":
				return css`
					width: 30px;
					height: 30px;
					margin: 0 auto;
					background-color: ${props => props.theme.btnColor};
					border-radius: 50%;
					text-align: center;
					align-items: center;
					line-height: 33px;
					font-size: 16px;
					font-weight: 600;
					color: #ffffff;
				`;
			default:
				break;
		}
	}}
`;

export const StepTitle = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "user":
				return css`
					margin-top: 2rem;
					font-size: 16px;
					font-weight: 600;
					text-align: center;
				`;
			case "Company":
				return css`
					margin-top: 2rem;
					font-size: 16px;
					font-weight: 600;
					text-align: center;
				`;
			default:
				break;
		}
	}}
`;
