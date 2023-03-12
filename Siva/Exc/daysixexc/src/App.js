import React from 'react'

import RouterCont from './Router';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: {}
    }
  }

  // componentDidMount() {
    
  //   console.log(document.location.pathname)
  //   if(document.location.pathname === '/'){
  //     axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  //     .then(response => {
  //       console.log(response)
  //       if (response.status === 200) {
  //         this.setState({ list: response.data })
  //       }
  //     }).catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //   }
    
  // }



  render() {
    //console.log(this.state.list, "this.state.list", new Date())
    return (
      <div className='page'>
        {/* <h1>List Menu Items:</h1>
        <ul>
          {this.renderListofMenus(this.state.list)}
        </ul> */}
        <RouterCont data = {this.state} />
      </div>
    )
  }




}

export default App;
