/**
* @Author: woolson
* @Date:   2016-11-30 12:11:00
* @Email:  woolson.lee@gmail.com
* @Last modified by:   woolson
* @Last modified time: 2016-11-30 14:11:58
*/

import "./style.styl"
import React, { Component, PropTypes } from "react"

export default class Counter extends Component {
  // static propTypes = {
  //   number: PropTypes.oneOf([
  //     PropTypes.string,
  //     PropTypes.number,
  //   ]).isRequired,
  //   height: PropTypes.oneOf([
  //     PropTypes.string,
  //     PropTypes.number,
  //   ]),
  // }

  static defaultProps = {
    height: 20,
  }

  constructor(props) {
    super(props)

    this.state = {
      number: this.getNumberObj(props.number),
    }
  }

  getNumberObj = num => {
    num += ""
    return num.split("")
  }

  setNumber = num => {
    this.setState({number: this.getNumberObj(num)})
  }

  renderNumbers() {
    const numberItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."]
    return this.state.number.map((item, index) => {
      const _num = Number(item)

      const spanHei = this.props.height
      const thisTop = -(isNaN(_num) ? 10 : _num) * spanHei + "px";

      return <div
        key={ index }
        className="_number-counter__item"
        style={{
          "transform": `translateY(${thisTop})`,
          "msTransform": `translateY(${thisTop})`,
          "MozTransform": `translateY(${thisTop})`,
          "WebkitTransform": `translateY(${thisTop})`,
          "Otransform": `translateY(${thisTop})`,
          "mstransition": 1 + "s",
          "Moztransition": 1 + "s",
          "WebkitTransition": 1 + "s",
          "Otransition": 1 + "s",
          "transition": 1 + "s"
        }}
      >
        {
          numberItems.map((item, index) => {
            return <span
              key={ index }
              className="_number-counter__item_number"
            >
              { item }
            </span>
          })
        }
      </div>
    })
  }

  render() {
    return <div className="_number-counter">
      { this.renderNumbers() }
    </div>
  }
}
