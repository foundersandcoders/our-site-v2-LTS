import React, { Component } from 'react'
import styled from 'styled-components'
import down_cursor from '../assets/ui/arrow_down_blue.svg'
import right_cursor from '../assets/ui/arrow_right_yellow.svg'

const _Cursor = styled.div.attrs({
  className: 'absolute z-999',
  style: ({ left, top }) => ({ left, top }),
})`
  width: ${({ next }) => (next ? '15rem' : '10rem')};
  height: ${({ next }) => (next ? '10rem' : '15rem')};
  opacity: ${({ scrolling }) => (scrolling ? '0' : '1')};
  transition: opacity 0.5s;
  background: url(${({ next }) => (next ? right_cursor : down_cursor)}) center
    bottom no-repeat;
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
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('mousemove', this.handleMouseMove)
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
    this._timeout && clearTimeout(this._timeout)

    this.setState({
      scrolling: true,
    })

    this._timeout = setTimeout(() => {
      this._timeout = null
      this.setState({
        scrolling: false,
      })
    }, 300)
  }

  render() {
    const { mouseX, mouseY, scrolling } = this.state
    const { next } = this.props
    return (
      <_Cursor left={mouseX} top={mouseY} next={next} scrolling={scrolling} />
    )
  }
}

export default Cursor