import styled, { css } from "styled-components"

const BackgroundImg = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${({ src }) =>
    css`
      background-image: url(${src});
    `};
`

export default BackgroundImg
