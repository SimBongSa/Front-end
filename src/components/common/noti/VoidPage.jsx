import { VoidContainer, Image, TitleWrap, ContentWrap } from "./VoidPage.styled";
import { useNavigate } from "react-router-dom";

const VoidPage = () => {
	const navigate = useNavigate();
	return (
		<VoidContainer>
			<TitleWrap>
				<h1>
					이 페이지는 <span>Vongole</span>에 존재하지 않지만,(404 Not Found){" "}
				</h1>
				<h2>
					귀여운 여러분을 위해 맛있는 <span>봉골레 </span>사진을 드리겠습니다!
				</h2>
				<h3>사진 클릭시 메인 페이지로 이동합니다.</h3>
			</TitleWrap>

			<ContentWrap>
				<Image
					onClick={() => {
						navigate("/");
					}}
					src="https://mp-seoul-image-production-s3.mangoplate.com/549779_1649286751855229.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
					alt=""
				/>
				<Image
					onClick={() => {
						navigate("/");
					}}
					src="https://mp-seoul-image-production-s3.mangoplate.com/1047892_1646265208599681.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
					alt=""
				/>
				<Image
					onClick={() => {
						navigate("/");
					}}
					src="https://mp-seoul-image-production-s3.mangoplate.com/2925_1647958281475194.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
					alt=""
				/>
				<Image
					onClick={() => {
						navigate("/");
					}}
					src="https://mp-seoul-image-production-s3.mangoplate.com/463989_1649980999730759.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
					alt=""
				/>
				<Image
					onClick={() => {
						navigate("/");
					}}
					src="https://mp-seoul-image-production-s3.mangoplate.com/260851/12258_1643990900671_20324?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
					alt=""
				/>
				<Image
					onClick={() => {
						navigate("/");
					}}
					src="https://mp-seoul-image-production-s3.mangoplate.com/32408_1633494766930912.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
					alt=""
				/>
			</ContentWrap>
		</VoidContainer>
	);
};

export default VoidPage;
