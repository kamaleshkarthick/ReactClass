import React,{Component} from 'react';
import Print from './Print';

export default class Dash extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <Print 
            changeMyName={this.props.changeMyName}
            name={this.props.name}/>
        )
    }
}