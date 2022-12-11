import styled from "styled-components";

export const FooterContainer = styled.section`
	display: flex;
	position: fixed;
	bottom: -110px;
	left: 0px;
	flex-flow: row wrap;
	margin: 0 auto;
	background: ${props => props.theme.subBgColor};
	color: ${props => props.theme.textColor};
	width: 100%;
	padding: 1rem;
	transition: all 0.3s;
	z-index: 10;
	&:hover {
		bottom: 0;
	}
	@media (max-width: 768px) {
		position: fixed;
		bottom: -120px;
	}
`;

export const FooterUl = styled.ul`
	padding-left: 60px;
	width: 33.3333%;
	&:last-child {
		color: ${props => props.theme.btnColor};
	}
	& li {
		padding-bottom: 10px;
		& h4 {
			transition: all 0.5s;
			padding: 10px 0 5px 0;
			font-size: 1.4rem;
		}
	}
`;

export const FooterItem = styled.li`
	cursor: pointer;
	width: fit-content;
	font-size: 0.8rem;
	margin-left: 3px;
	color: #8db9ed;
	transition: all 0.5s;
	&:hover {
		color: #ccc;
	}
`;

export const FooterBottom = styled.section`
	width: 100%;
	padding: 1rem;
	border-top: 1px solid #ccc;
	margin-top: 10px;
	font-size: 1rem;
`;

export const BugReport = styled.button`
	cursor: pointer;
	width: 60%;
	height: 4rem;
	font-size: 1.2rem;
	margin-left: 3px;
	border: none;
	border-radius: 12px;
	background: ${props => props.theme.btnColor};
	color: #232323;
	transition: all 0.5s;
`;
export const EmailForm = styled.form`
	position: absolute;
	bottom: 220px;
	right: 100px;
	-webkit-transform: translate(50px, 50px);
	transform: translate(50px, 50px);
	width: 300px;
	height: 400px;
	box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
	background: rgba(0, 0, 0, 0.5);
	border-radius: 20px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
`;

export const EmailTitle = styled.div`
	-webkit-box-flex: 0;
	-ms-flex: 0 1 45px;
	flex: 0 1 45px;
	position: relative;
	z-index: 2;
	background: rgba(0, 0, 0, 0.2);
	color: #fff;
	text-transform: uppercase;
	text-align: left;
	padding: 15px 10px 10px 50px;
	border-radius: 20px 20px 0px 0px;
	& span {
		cursor: pointer;
		float: right;
		display: inline-block;
		width: 30px;
		text-align: center;
	}
`;

export const EmailBody = styled.div`
	height: 100%;
	padding: 1rem 3rem 1rem 3rem;
	& h1 {
		margin-top: 0.4rem;
		margin-bottom: 0.4rem;
	}
	& input {
		margin-top: 0.4rem;
		margin-bottom: 0.4rem;
		width: 100%;
		border: none;
		border-radius: 10px;
		outline: none;
		padding: 0.74em 1.5em;
	}
	& textarea {
		width: 100%;
		height: 3rem;
		border: none;
		border-radius: 10px;
		outline: none;
		margin-bottom: -1rem;
		margin-top: 0.4rem;
		padding: 0.74em 1.5em;
	}
	& button {
		cursor: pointer;
		width: 100%;
		display: inline-block;
		padding: 0.74em 1.5em;
		color: ${props => props.theme.textColor};
		background: ${props => props.theme.btnColor};
		border-width: 0 0 0 0;
		border-bottom: 5px solid;
		text-transform: uppercase;
	}
	& div {
		margin: 2em 0 1em 0;
		border: 0;
		height: 1px;
		width: 100%;
		display: block;
		background-color: ${props => props.theme.btnColor};
	}
`;
