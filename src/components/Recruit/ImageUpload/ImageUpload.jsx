import { useRef } from "react";
import styled from "styled-components";
import { BsUpload } from "react-icons/bs";


const ImageUpload = ({ onChangeImage, uploadPreview }) => {

  // Image State
  const uploadBoxRef = useRef();
	const imageRef = useRef();

  return (
    <ImageUploadBox>
      <label htmlFor="image" ref={uploadBoxRef}>
        <div className="textBox">
          <h4>클릭하여 업로드</h4>
          <span>권장사항: 000MB 이하 고화질</span>
        </div>
        <BsUpload className="uploadBtn"/>
      </label>
      <input 
        type="file" 
        accept="image/*" 
        id="image" 
        ref={imageRef} 
        onChange={onChangeImage}
      />
      <ImagePreview>
        <img src={uploadPreview} alt="previewImage"/>
      </ImagePreview>
    </ImageUploadBox>
  )
};

export default ImageUpload;

export const ImageUploadBox = styled.div`
	& input[type="file"] {
		display: none;
	}
	& label {
		cursor: pointer;
		display: flex;
		width: 100%;
		justify-content: center;
		margin: 0 auto;
		margin: 1rem;
		padding: 1rem;
		background: #aaaaaa;
		& .uploadBtn {
			font-size: 2rem;
			margin-left: 1.5rem;
		}
		& .textBox {
      color: ${(props) => props.theme.textColor};
      & h4 {
        text-align: center;
      }
		}
	}
`

export const ImagePreview = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  & img {
    width: 200px;
  }
`