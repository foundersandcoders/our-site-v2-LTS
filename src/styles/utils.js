import { css } from "styled-components"

const breakpoint = {
  ns: (...args) => css`
    @media screen and (min-width: 40em) {
      ${css(...args)};
    }
  `,
  m: (...args) => css`
    @media screen and (min-width: 40em) and (max-width: 65em) {
      ${css(...args)};
    }
  `,
  l: (...args) => css`
    @media screen and (min-width: 65em) {
      ${css(...args)};
    }
  `,
}

const responsiveSizing = ({
  Height: {
    ns: Height_ns,
    l: Height_l,
    m: Height_m,
    s: Height_s,
  },
  Width: {
    ns: Width_ns,
    l: Width_l,
    m: Width_m,
    s: Width_s,
  },
}) => { 
  
  css``
}

export { breakpoint }
