import React from 'react';
import SayMyName  from './SayManyName';

const secondtext  = "World";

class App extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      sayHello : "Hello"
    }
    
  }



  render(){
    
    return(
      <div className='app-wrapper'>
        <h1>{this.state.sayHello} {secondtext}</h1>
        
        <SayMyName firstName="Shiva" lastName="Prakash"/>
        <SayMyName firstName="Manoj" lastName="Mohan"/>
        <SayMyName firstName="Kamalesh" lastName="Kumar"/>
      </div>
    )
  }
}
 export default App;