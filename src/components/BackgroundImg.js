import styled, { css } from "styled-components"

const BackgroundImg = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${ 
`${ gradient + ' ,'  || '' } url(${src}) no-repeat center`
  background-size: ${({ bgSize = "cover" }) => bgSize};
`

export default BackgroundImg
