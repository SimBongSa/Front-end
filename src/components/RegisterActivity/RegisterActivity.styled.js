import styled from "styled-components";

export const Wrap = styled.form``;

export const ImgWrap = styled.form``;

export const UserName = styled.p`
  width: 50%;
  height: 50%;
  border: 1px solid #000000;
  font-size: 20px;
`;

export const PhotoWrap = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  /* overflow: hidden; */
`;

export const ImageLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;

  background-color: transparent;
`;

export const ImageInput = styled.input``;

export const ImagePreview = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
