import { css } from "styled-components"

const breakpoint = {
  s: (...args) => css`
    @media screen and (max-width: 639px) {
      ${css(...args)};
    }
  `,
  ns: (...args) => css`
    @media screen and (min-width: 640px) {
      ${css(...args)};
    }
  `,
  m: (...args) => css`
    @media screen and (min-width: 640px) and (max-width: 1039px) {
      ${css(...args)};
    }
  `,
  ql: (...args) => css`
    @media screen and (min-width: 1040px) and (max-width: 1439px) {
      ${css(...args)};
    }
  `,

  l: (...args) => css`
    @media screen and (min-width: 1040px) {
      ${css(...args)};
    }
  `,
}

export { breakpoint }
