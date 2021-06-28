import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Keys from "./components/Keys";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if (button === "=") {
      this.calculate()
    }
    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }
    else if (button === "Draw") {
      this.handleDraw()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  handleDraw = () => {
    const { result } = this.state
    let completeString = `f(x)=${result}`
    this.setState({
      result: completeString
    })

    // Check paranthesis of the function passed
  }


  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <Result result={this.state.result} />
          <Keys onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
