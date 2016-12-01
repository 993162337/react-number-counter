/*
* @Author: woolson
* @Date:   2016-12-02 00:46:32
* @Email:   woolson.lee@gmail.com
* @Last Modified by:   woolson
* @Last Modified time: 2016-12-02 01:36:34
*/

import "./app.styl"
import React, { Component } from "react"
import { render } from "react-dom"
import NumberCounter from "./number-counter"

class Counter extends Component {
  componentDidMount() {
    this.auto()
  }

  auto() {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      let num = Math.random() * 100000 + ""
      console.log(num)
      this.refs.counter.setNumber(num.substr(0, 8))
    }, 1500)
  }

  render() {
    return <div className="content">
      <NumberCounter ref="counter" number="95279527" height={ 88 }/>

      <div className="control">
        <input defaultValue="95279527" type="number" ref="input" />
        <button
          onClick={ evt => {
            const num = this.refs.input.value
            this.refs.counter.setNumber(num)

            this.auto()
        } }>提交</button>
      </div>
    </div>
  }
}

render(<Counter />, document.getElementById("app"))