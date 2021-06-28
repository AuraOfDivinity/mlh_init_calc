import React, { Component } from 'react';

class Keys extends Component {

    render() {
        return (
            <>
                <div className="button">
                    <button id="b-element" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                    <button id="b-element" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                    <button id="b-element" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                    <button id="b-element" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br />


                    <button id="b-element" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button id="b-element" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button id="b-element" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                    <button id="b-element" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br />


                    <button id="b-element" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button id="b-element" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button id="b-element" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                    <button id="b-element" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br />

                    <button id="b-element" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button id="b-element" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button id="b-element" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                    <button id="b-element" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br />


                    <button id="b-element" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button id="b-element" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button id="b-element" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                    <button id="b-element" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br />

                    <button id="b-element" name="sin" onClick={e => this.props.onClick(e.target.name)}>sin</button>
                    <button id="b-element" name="tan" onClick={e => this.props.onClick(e.target.name)}>tan</button>
                    <button id="b-element" name="cos" onClick={e => this.props.onClick(e.target.name)}>cos</button>
                    <button id="b-element" name="x" onClick={e => this.props.onClick(e.target.name)}>x</button><br />
                </div>
                <div className="draw">
                    <button id="b-element-draw" name="Draw" onClick={e => this.props.onClick(e.target.name)}>Draw Graph</button>
                </div>
            </>
        );
    }
}


export default Keys;