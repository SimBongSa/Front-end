import styled, { keyframes } from "styled-components";
import DatePicker from "react-datepicker";

export const SearchBarContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin: 0 auto;
	z-index: 3;
`;

export const SearchBarOpen = styled.button`
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
	}
	@media (max-width: 768px) {
		top: 8px;
		width: 100px;
	}
`;

export const SearchModal = styled.div`
  position: fixed;
  width: 100%;
  height: 200px;
  margin-top: 80px;
  left: 50%;
  top: 10px;
  z-index: 5;
  background: ${(props) => props.theme.bgColor};
  animation: ${(props) => (props.animation ? fadeOut : fadeIn)} 0.6s;
  transform: translate(-50%, 0%);
  transition: all 0.4s;
  & h1 {
    font-size: 1.4rem;
    font-weight: 300;
    text-align: center;
  }
`;

export const SearchBarWrapper = styled.div`
	display: flex;
	margin: 0 auto;
	align-items: center;
	width: 100%;
	background: transparent;
`;
export const SearchLabel = styled.label`
	align-items: center;
	background: white;
	border-radius: 3em;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	display: flex;
	height: 3em;
	left: 50%;
	padding: 0 0 0 0.5em;
	position: absolute;
	top: 10%;
	transition: all 0.25s;
	transform: translate(-50%, 0);
	max-width: 75%;
	height: 5em;
	top: 20%;
	width: 100%;
	color: black;
`;
export const SearchList = styled.ul`
	list-style-type: none;
	display: flex;
	align-items: stretch;
	width: calc(100% - 5em);
	height: 100%;
	position: absolute;
	z-index: 0;
	transition: all 0.25s;
	font-size: 0.5em;
	opacity: 1;
	font-size: 1em;
	& li {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 2em 0 1.5em;
		position: relative;
		&:first-child {
			flex: 1.5;
		}
		&:not(:last-child)::after {
			content: "";
			display: block;
			position: absolute;
			right: 0;
			top: 20%;
			height: 60%;
			background: #ccc;
			width: 1px;
		}
		& h4 {
			font-size: calc(0.5em + 0.5vw);
		}
		& input {
			width: 100%;
		}
	}
`;

export const SearchBtn = styled.button`
  cursor: pointer;
  display: flex;
  position: absolute;
  width: 4.75em;
  height: 4.75em;
  right: 10px;
  align-items: center;
  background: ${(props) => props.theme.btnColor};
  border: none;
  border-radius: 50%;
  justify-content: center;
  margin: 0 0.5em;
  z-index: 1;
  transition: all 0.25s;
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

export const CustomeDatePicker = styled(DatePicker)({
	display: "flex",
	fontSize: "15px",
	width: "50rem",
	border: "none",
	borderRadius: "15px",
	outline: "none",
	background: `${props => props.theme.subTextColor}`,
});

export const PickerBox = styled.div`
	display: flex;
`;