import styled, { css } from "styled-components";

export const StBadge = styled.img`
  position: absolute;
  margin-left: calc(100% - 275px) !important;
  margin-top: calc(100% - 290px) !important;
  width: 35px !important;
  height: 35px !important;
  border: none !important;
  ${({ count }) => {
    switch (count) {
      case (count = 0):
        return css`
          background: url('/image/32badge1.png') !important;
        `
      case (count = 5):
        return css`

        `
      default:
        break;
    }
  }}
`