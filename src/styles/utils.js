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

export { breakpoint }
