import styled, { css } from "styled-components"

const BackgroundImg = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${ 
    ({ src, gradient }) => gradient 
    ? `${gradient} , url(${src}) no-repeat center`
    : `url(${src}) no-repeat center` }
  };
  background-size: ${({ bgSize = "cover" }) => bgSize};
`

export default BackgroundImg
