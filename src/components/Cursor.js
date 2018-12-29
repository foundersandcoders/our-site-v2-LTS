import React, { Component } from "react"
import {
  NEXT_CURSOR,
  DOWN_CURSOR,
  RIGHT_CURSOR,
  HIDE_CURSOR,
  CROSS_CURSOR,
} from "../constants"

import styled from "styled-components"

import down_cursor_blue from "../assets/ui/arrow_down_blue.svg"
import down_cursor_red from "../assets/ui/arrow_down_red.svg"
import down_cursor_green from "../assets/ui/arrow_down_green.svg"
import right_cursor_blue from "../assets/ui/arrow_right_blue.svg"
import right_cursor_red from "../assets/ui/arrow_right_red.svg"
import right_cursor_green from "../assets/ui/arrow_right_green.svg"
import right_cursor_yellow from "../assets/ui/arrow_right_yellow.svg"
import cross_cursor_black from "../assets/ui/cross_cursor_black.svg"

const mouseOnNext = component => {
  component.setState({
    cursor: NEXT_CURSOR,
  })
}

const mouseOff = component => {
  component.setState({
    cursor: DOWN_CURSOR,
  })
}

const mouseOnCarousel = component => {
  component.setState({
    cursor: RIGHT_CURSOR,
  })
}

const mouseOnMenu = component => {
  component.setState({
    cursor: CROSS_CURSOR,
  })
}

const mouseOnHide = component => {
  component.setState({
    cursor: HIDE_CURSOR,
  })
}

const returnCursorImage = ({ cursor, colour }) => {
  const cursorImage = {
    [DOWN_CURSOR]: {
      red: down_cursor_red,
      blue: down_cursor_blue,
      green: down_cursor_green,
    },
    [RIGHT_CURSOR]: {
      red: right_cursor_red,
      blue: right_cursor_blue,
      green: right_cursor_green,
    },
    [NEXT_CURSOR]: {
      red: right_cursor_yellow,
      blue: right_cursor_yellow,
      green: right_cursor_yellow,
    },
    [CROSS_CURSOR]: {
      red: cross_cursor_black,
      blue: cross_cursor_black,
      green: cross_cursor_black,
    },
  }
  return cursorImage[cursor][colour]
}

const _Cursor = styled.div.attrs({
  className: ({ hide }) => `absolute dn ${!hide && "db-l"}`,
  style: ({ left, top, scrolling }) => ({
    left,
    top,
    opacity: scrolling ? 0 : 1,
  }),
})`
  z-index: 3000;
  overflow: hidden;
  width: ${({ cursor }) =>
    cursor === RIGHT_CURSOR || NEXT_CURSOR ? "15rem" : "10rem"};
  height: 15rem;
  transition: opacity 0.3s;
  background: url(${({ cursor, colour }) =>
      cursor !== HIDE_CURSOR && returnCursorImage({ cursor, colour })})
    center bottom no-repeat;
  background-size: contain;
  pointer-events: none;
`

class Cursor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseX: 0,
      mouseY: 0,
      scrolling: false,
    }
    this._timeout = null
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("mousemove", this.handleMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("mousemove", this.handleMouseMove)
  }

  handleMouseMove = e => {
    const event = e || window.event
    setTimeout(
      () =>
        this.setState({
          mouseX: event.pageX,
          mouseY: event.pageY,
        }),
      50
    )
  }

  handleScroll = () => {
    const { scrolling } = this.state
    this._timeout && clearTimeout(this._timeout)

    if (!scrolling) {
      this.setState({
        scrolling: true,
      })
    }

    this._timeout = setTimeout(() => {
      this._timeout = null

      if (scrolling) {
        this.setState({
          scrolling: false,
        })
      }
    }, 300)
  }

  render() {
    const { mouseX, mouseY, scrolling } = this.state
    const { cursor, colour, menuActive } = this.props
    return (
      <_Cursor
        left={mouseX}
        top={mouseY}
        cursor={cursor}
        colour={colour}
        scrolling={scrolling ? "scrolling" : undefined}
        hide={cursor === HIDE_CURSOR}
        menuActive={menuActive}
      />
    )
  }
}

export {
  Cursor,
  mouseOnCarousel,
  mouseOnMenu,
  mouseOnNext,
  mouseOff,
  mouseOnHide,
}
