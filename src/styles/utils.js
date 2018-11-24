import { css } from "styled-components"

const breakpoint = {
  s: (...args) => css`
    @media screen and (max-width: 40em) {
      ${css(...args)};
    }
  `,
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
  ql: (...args) => css`
    @media screen and (min-width: 65em) and (max-width: 89.9em) {
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
