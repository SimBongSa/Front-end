import {
	FooterContainer,
	FooterUl,
	FooterItem,
	BugReport,
	EmailForm,
	EmailTitle,
	EmailBody,
} from "./Footer.styled";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useRef } from "react";

const Footer = () => {
	const emailRef = useRef();
	const [emailModal, setEmailModal] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("service_cyvresv", "template_slgvwc7", emailRef.current, "G36k-8rb7aC7t_e_-")
			.then(
				result => {
					alert("소중한 의견 감사드립니다.");
					setEmailModal(!emailModal);
				},
				error => {}
			);
	};

	return (
		<FooterContainer>
			<FooterUl>
				<li>
					<h4>Vongole</h4>
				</li>
				<FooterItem onClick={() => window.open("https://github.com/SimBongSa/Front-end", "_blank")}>
					FE: 김성호, 김경일, 장석원
				</FooterItem>
				<FooterItem onClick={() => window.open("https://github.com/SimBongSa/Back-end", "_blank")}>
					BE: 김원재, 강진구, 강창식, 김성민
				</FooterItem>
				<FooterItem onClick={() => window.open('https://www.figma.com/file/kYFvIOU803qXJAKd8Hpy5e/%EB%B4%89%EA%B3%A8%EB%A0%88-Vongole?node-id=602%3A2434&t=Y7bGfoeLPBYzHUwC-0', '_blank')}>
					DESIGN: 전혜진
				</FooterItem>
				<FooterItem onClick={() => window.open("https://github.com/SimBongSa", "_blank")}>
					https://github.com/SimBongSa
				</FooterItem>
			</FooterUl>

			<FooterUl>
				<li>
					<h4>이용 안내</h4>
				</li>
				<FooterItem>이용약관</FooterItem>
				<FooterItem>개인정보처리방침</FooterItem>
			</FooterUl>

			<FooterUl>
				<li>
					<h4>불편한 사항이 있으신가요?</h4>
				</li>
				<BugReport
					onClick={() => {
						setEmailModal(!emailModal);
					}}
				>
					버그 리포트
				</BugReport>
			</FooterUl>

			{emailModal ? (
				<EmailForm ref={emailRef} onSubmit={sendEmail}>
					<EmailTitle>
						Bug Report
						<span onClick={() => setEmailModal(!emailModal)}>X</span>
					</EmailTitle>

					<EmailBody>
						<h1>Name</h1>
						<input type="text" name="from_name" placeholder="성함을 남겨주세요" />

						<h1>Phone</h1>
						<input type="text" name="phone" placeholder="연락처를 남겨주세요" />

						<h1>Comment</h1>
						<textarea type="text" name="message" placeholder="소중한 의견을 남겨주세요" />

						<div />

						<button>Send</button>
					</EmailBody>
				</EmailForm>
			) : null}
		</FooterContainer>
	);
};

export default Footer;
