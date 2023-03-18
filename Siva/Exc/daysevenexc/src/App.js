import logo from './logo.svg';
import './App.css';
import React from 'react';

import { increment, decrement } from './Action/AppAction';
import { connect } from 'react-redux';



class App extends React.Component {

  constructor (props){
    super(props);
  }
  
  
  render() {
    console.log("uicount",this.props)
    return (
      <div className="App">
        <div className='add-cal'>
          <button onClick={() => this.props.decrement()}>Sub</button>
          <span className='valu-pl'>{this.props.uicount}</span>
          <button onClick={() => this.props.increment()}>Add</button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    uicount: state.count,
    appred : state
  }
}

const mapDispachToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

//export default App;
export default connect(mapStateToProps, {
  increment,
  decrement
})(App);