import styled, { css } from "styled-components"

const PartnerLogo = styled.div.attrs({
  className: "h5 w5 mt4",
})`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${({ src }) =>
    css`
      background-image: url(${src});
    `};
`

export default PartnerLogo
