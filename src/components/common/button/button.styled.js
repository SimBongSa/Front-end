import styled, { css, keyframes } from "styled-components";

export const Stbtn = styled.button`
	&:hover {
		opacity: 0.7;
	}
	${({ variant }) => {
		switch (variant) {
			//페이지(URL) -> 파일명(컴포넌트)
			//recruit -> recruit.jsx
			case "recruit-green":
				return css`
					text-align: center;
					padding: 15px 100px;
					margin-bottom: 1rem;
					margin-left: 1rem;
					width: ${props => props.width};
					height: ${props => props.height};
					border-radius: 24px;
					color: ${props => props.theme.bgColor};
					background-color: ${props => props.theme.btnColor};
					border: 1px solid ${props => props.theme.btnColor};
					/* margin-left: 15em; */
					cursor: pointer;
					align-items: center;
					justify-content: center;
				`;
			case "recruit-white":
				return css`
					text-align: center;
					padding: 15px 20px;
					margin-bottom: 1rem;
					width: ${props => props.width};
					height: ${props => props.height};
					border-radius: 24px;
					color: ${props => props.theme.btnColor};
					background-color: ${props => props.theme.bgColor};
					border: 1px solid ${props => props.theme.btnColor};
					cursor: pointer;
				`;

			case "recruit-post":
				return css`
					background: ${props => props.theme.btnColor};
					border: 1px solid ${props => props.theme.btnColor};
					color: ${props => props.theme.bgColor};
					border-radius: 20px;
					width: 8rem;
					height: 2.5rem;
					margin-left: 1em;
					cursor: pointer;
					position: sticky;
				`;

			//boards -> DetailSide.jsx
			case "boards-apply":
				return css`
					text-align: center;
					padding: 15px 20px;
					margin-bottom: 1rem;
					width: 20rem;
					height: 3rem;
					border-radius: 24px;
					background: ${props => props.theme.btnColor};
					border: 1px solid ${props => props.theme.btnColor};
					color: ${props => props.theme.bgColor};
					cursor: pointer;
				`;
			case "boards-chat":
				return css`
					text-align: center;
					padding: 15px 20px;
					margin-bottom: 1rem;
					width: 20rem;
					height: 3rem;
					border-radius: 24px;
					color: ${props => props.theme.btnColor};
					background-color: ${props => props.theme.bgColor};
					border: 1px solid ${props => props.theme.btnColor};
					cursor: pointer;
				`;
			case "boards-edit":
				return css`
					text-align: center;
					padding: 15px 20px;
					margin-bottom: 1rem;
					width: 20rem;
					height: 3rem;
					border-radius: 24px;
					color: ${props => props.theme.btnColor};
					background-color: ${props => props.theme.subBgColor};
					border: 1px solid ${props => props.theme.subBtnColor};
					cursor: pointer;
				`;

			case "boards-delete":
				return css`
					text-align: center;
					padding: 15px 20px;
					margin-bottom: 1rem;
					width: 20rem;
					height: 3rem;
					border-radius: 24px;
					color: ${props => props.theme.notiColor};
					background-color: ${props => props.theme.subBgColor};
					border: 1px solid ${props => props.theme.notiColor};
					cursor: pointer;
				`;

			//boards -> Comment.jsx
			case "comment":
				return css`
					position: absolute;
					border-radius: 24px;
					width: 6rem;
					height: 2.5rem;
					/* margin-left: calc(100% + 110px); */
					margin-left: calc(100% - 110px);
					margin-top: -65px;
					background: ${props => props.theme.btnColor};
					border: 1px solid ${props => props.theme.btnColor};
					color: ${props => props.theme.bgColor};
					cursor: pointer;
				`;
			//boards -> SearchBar.jsx
			case "boards-map-open":
				return css`
					font-size: 16px;
					border: 1px solid ${props => props.theme.btnColor};
					border-radius: 50px;
					width: 140px;
					height: 40px;
					margin-right: 2rem;
					background: ${props => props.theme.bgColor};
					color: ${props => props.theme.textColor};
					cursor: pointer;
					/* padding-top: 2.5px; */
					transition: all 0.5s ease;
					&:hover {
						transform: translateY(-0.5rem);
					}
				`;
			case "boards-map-close":
				return css`
					z-index: 99;
					position: absolute;
					color: #fff;
					text-align: right;
					right: 15%;
					top: 10%;
					font-size: 36px;
					background-color: transparent;
					border: none;
					cursor: pointer;
					transition: all 0.5s ease;
					&:hover {
						transform: translateY(-0.5rem);
					}
				`;
			case "boards-prev-next":
				return css`
					font-size: 15px;
					margin-left: 1rem;
					margin-right: 1rem;
					width: 50px;
					height: 50px;
					background-color: transparent;
					border: none;
					color: ${props => props.theme.textColor};
					cursor: pointer;
					transition: all 0.5s ease;
				`;

			//mypageedit -> ProfileEdit.jsx / edit -> DetailEdit.jsx
			case "mypage-edit":
				return css`
					display: flex;
					cursor: pointer;
					position: relative;
					margin-left: 5px;
					width: 60%;
					height: 3rem;
					margin: 0 auto;
					align-items: center;
					justify-content: center;
					border-radius: 24px;
					margin-top: 1rem;
					background: ${props => props.theme.btnColor};
					border: 1px solid ${props => props.theme.btnColor};
					color: ${props => props.theme.bgColor};
				`;

			case "board-edit":
				return css`
					cursor: pointer;
					position: relative;
					margin-left: 5px;
					width: 60%;
					height: 3rem;
					border-radius: 24px;
					margin-top: 3rem;
					margin-bottom: 5rem;
					margin-left: 6.6rem;
					background: ${props => props.theme.btnColor};
					border: 1px solid ${props => props.theme.btnColor};
					color: ${props => props.theme.bgColor};
				`;

			//searchbar -> SearchBar.jsx
			case "searchbar-open":
				return css`
					display: ${props => (props.modal ? "none" : "flex")};
					flex-direction: row;
					cursor: pointer;
					position: fixed;
					width: 350px;
					height: 50px;
					float: left;
					align-items: center;
					margin-top: 1rem;
					top: 5px;
					left: 50%;
					border: none;
					border-radius: 35px;
					padding: 1rem;
					animation: ${props => (props.animation ? fadeOut : fadeIn)} 0.6s;
					transform: translate(-50%, 0%);
					transition: all 0.5s;
					& span {
						margin: 0;
						@media (max-width: 768px) {
							display: none;
						}
					}
					@media (max-width: 768px) {
						top: 8px;
						width: 55px;
					}
				`;
			case "search":
				return css`
					cursor: pointer;
					display: flex;
					position: absolute;
					width: 4.75em;
					height: 4.75em;
					right: 10px;
					align-items: center;
					background: ${props => props.theme.btnColor};
					border: none;
					border-radius: 50%;
					justify-content: center;
					margin: 0 0.5em;
					z-index: 1;
					transition: all 0.25s;
				`;

			//chat -> ChatInput.jsx
			case "chat":
				return css`
					position: absolute;
					cursor: pointer;
					width: 45px;
					height: 45px;
					border: none;
					border-radius: 50%;
					top: 15px;
					right: 11%;
					font-size: 1.4rem;
					padding: 11px;
					color: ${props => props.theme.textColor};
					background: ${props => props.theme.btnColor};
				`;

			// -> MyApplicant.jsx
			case "applicant-approve":
				return css`
					text-align: center;
					padding: 0px 20px;
					margin-bottom: 1rem;
					width: ${props => props.width};
					height: ${props => props.height};
					border-radius: 24px;
					color: ${props => props.theme.bgColor};
					background-color: ${props => props.theme.btnColor};
					border: 1px solid ${props => props.theme.btnColor};
					cursor: pointer;
				`;
			case "applicant-reject":
				return css`
					text-align: center;
					padding: 0px 20px;
					margin-bottom: 1rem;
					width: ${props => props.width};
					height: ${props => props.height};
					border-radius: 24px;
					color: ${props => props.theme.notiColor};
					background-color: ${props => props.theme.bgColor};
					border: 1px solid ${props => props.theme.notiColor} !important;
					cursor: pointer;
				`;

			// PostPopup -> PopupPostCode.jsx
			case "post-popup-close":
				return css`
					position: absolute;
					bottom: 5%;
					left: 50%;
					border-radius: 24px;
					color: ${props => props.theme.btnColor};
					background-color: ${props => props.theme.bgColor};
					border: 1px solid ${props => props.theme.btnColor};
					transform: translateX(-50%);
					z-index: 10;
				`;
			//edit -> DetailEdit.jsx
			case "edit-post":
				return css`
					background: ${props => props.theme.btnColor};
					border: 1px solid ${props => props.theme.btnColor};
					color: ${props => props.theme.bgColor};
					border-radius: 20px;
					width: 8rem;
					height: 2.5rem;
					margin-left: 30em;
					cursor: pointer;
					position: sticky;
				`;

			default:
				break;
		}
	}}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
