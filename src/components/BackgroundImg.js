import styled, { css } from "styled-components"

const BackgroundImg = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-repeat: no-repeat;
  background-size: ${({ bgSize = "cover" }) => bgSize};
  background-position: center;
  background-image: ${({ src }) => `url(${src})`};
`

export default BackgroundImg
