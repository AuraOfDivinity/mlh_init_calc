import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Keys from "./components/Keys";
import Graph from './components/Graph';
import { checkBrackets } from './utils/utils'
import { create, all } from 'mathjs'

const config = {
}

const math = create(all, config)

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      showGraph: false,
      labels : [],
      results: [],
      completeString: "" 
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
    else if (button === "Hide") {
      this.setState({
        showGraph: false,
        result: ''
      })
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
    if (result.length === 0) {
      alert('Please enter a valid function to be drawn.')
    }

    // Check paranthesis of the function passed
    if (!checkBrackets(result)) {
      alert('The function provided has missing paranthesis.')
    }

    this.generateGraphDataAndLabels(result)

    if (result.length > 0) {
      this.setState({
        result: completeString,
        showGraph: true,
        completeString
      })
    }
  }

  generateGraphDataAndLabels=(eq)=> {
    const parser = math.parser()
    const labels = []
    const results = []
    for(let i =0; i < 20; i++){
      labels.push(i)
      parser.set('x', i)
      results.push(parser.evaluate(eq))
    }
    this.setState({
      labels,
      results
    })
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
          <Graph showGraph={this.state.showGraph} labels={this.state.labels} results={this.state.results} func={this.state.completeString}></Graph>
        </div>
      </div>
    );
  }
}

export default App;
