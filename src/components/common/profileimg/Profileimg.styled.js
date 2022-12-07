import styled, { css } from "styled-components";

export const Profile = styled.img`
	${({ variant }) => {
		switch (variant) {
			//페이지(URL) -> 파일명(컴포넌트)
			//recruit -> recruit.jsx
			case "profile-company":
				return css`
					margin: 0 auto;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
				`;
			case "profile-user":
				return css`
					margin: 0 auto;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
				`;
			case "comment-user":
				return css`
					font-size: 3rem;
					margin-right: 0.5rem;
					width: 40px;
					height: 40px;
					border-radius: 50%;
				`;
			default:
				break;
		}
	}}
`;
