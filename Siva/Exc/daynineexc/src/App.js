import React from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction ,updateValue} from './CounterAction';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div className='application'>
        <div>
          <h1>Welcome to Redux Exc...</h1>

          <button onClick={() => this.props.decrementAction()}>Dec</button>
          <button>{this.props.count}</button>
          <button onClick={() => this.props.incrementAction()}>Inc</button>
        </div>
        <div className="calculator">
          <div className="history"></div>
          <div className="screen">
            <span className="last"></span>
            <span className="total">{this.props.answer}</span>
          </div>
          <div className="keys-btn">
            
            <div className="clearfix">
              <button onClick={() => this.props.updateValue('7')} className="calc_int" value="7">7</button>
              <button onClick={() => this.props.updateValue('8')}className="calc_int" value="8">8</button>
              <button onClick={() => this.props.updateValue('9')} className="calc_int" value="9">9</button>
              <button onClick={() => this.props.updateValue('/')} className="calc_op imp" value="/" >&divide;</button>
            </div>
            <div className="clearfix">
              <button onClick={() => this.props.updateValue('4')}className="calc_int" value="4">4</button>
              <button onClick={() => this.props.updateValue('5')} className="calc_int" value="5">5</button>
              <button onClick={() => this.props.updateValue('6')} className="calc_int" value="6">6</button>
              <button onClick={() => this.props.updateValue('*')} className="calc_op imp" value="*">&times;</button>
            </div>
            <div className="clearfix">
              <button onClick={() => this.props.updateValue('1')} className="calc_int" value="1">1</button>
              <button onClick={() => this.props.updateValue('2')}className="calc_int" value="2">2</button>
              <button onClick={() => this.props.updateValue('3')}className="calc_int" value="3">3</button>
              <button onClick={() => this.props.updateValue('-')}className="calc_op imp" value="-">-</button>
            </div>
            <div className="clearfix">
              <button onClick={() => this.props.updateValue('0')} className="calc_int" value="0">0</button>
              <button className="calc_dec" value=".">.</button>
              <button onClick={() => this.props.updateValue('=')} className="calc_eval imp" value="=">=</button>
              <button onClick={() => this.props.updateValue('+')} className="calc_op imp" value="+">+</button>
            </div>
            
          </div>
          
        </div>
      </div>
    )
  }
}

const mapPropsTopState = store => {
  return {
    count: store.count,
    answer:store.answer,
    operation:store.operation,
    currentValue:store.currentValue
  }
}



export default connect(mapPropsTopState, {
  incrementAction,
  decrementAction,
  updateValue
})(App);
