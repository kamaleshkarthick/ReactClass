import React, { Component } from 'react';
import SayName from './SayName';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>

//       </form>
//     </div>
//   );
// }

// export default App;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      isLoggedIn: false,
      say:null
    }
  }

  hanldeSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state)
    if (this.state.userName === this.state.password) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }


  }

  handleInputValue = (evt, key) => {
    const value = evt.target.value;
    console.log(key)
    this.setState(
      { [key]: value }
    );
  }

  render() {
    let toBePrinted = '';

    if(this.state.isLoggedIn){
      toBePrinted = "Welecome you are logged in!!!"  
    }else{
      toBePrinted = "Havn't logged in..."  
    }
    const name = {
      fistName : "Kamalesh",
      lastName : "Kumar"
    }
    
    return (
      <form onSubmit={this.hanldeSubmit} className='makeme-centered' autoComplete='off'>
        <div style={{ marginBottom: 10 }}>
          <input type="text" value={this.state.userName} onChange={(evt) => this.handleInputValue(evt, "userName")} />
        </div>

        <div style={{ marginBottom: 10 }}>
          <input type="password" value={this.state.password} onChange={(evt) => this.handleInputValue(evt, "password")} />
        </div>
        <button>Submit</button>

        <div className=''>
          {this.state.isLoggedIn && <p>Welecome you are logged in!!!</p>}
          {!this.state.isLoggedIn && <p>You are yet to logg in</p>}
        </div>

        <div>----------------------------------------</div>

        <div className=''>
          {this.state.isLoggedIn ? <p>Welecome you are logged in!!!</p> : <p>You are yet to logg in</p> } 
          
        </div>

        <div>----------------------------------------</div>
        
        <div>
          <p>{toBePrinted}</p>
        </div>

      <div className='4'>
        <p>{this.state.say || "Hello"}</p>
      </div>

      <SayName name={name} fullName="Shiva Prakash" />
      </form>
    )
  }
}
