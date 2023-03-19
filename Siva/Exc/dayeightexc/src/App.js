import React from 'react';
import RouterCont from './Routers';
import { connect } from 'react-redux';

import { fetchMenulist } from './Actions/CRUDAction';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchMenulist();
  }
  render() {
    return (
      <div className="App">
        <RouterCont />
      </div>
    );
  }

}

export default connect(null, {
  fetchMenulist
})(App);
