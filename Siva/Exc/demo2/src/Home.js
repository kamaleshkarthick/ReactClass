import React from "react";
import Dash from "./Components/Dashboard";
import SayMyName from './SayMyName';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchKey: 'shiva',
            childCompoName: "Kamalesh"
        }
        this.handleScrollEvent = this.handleScrollEvent.bind(this)
    }

    handleInputValue = (evt) => {
        this.setState({ searchKey: evt.target.value })
    }


    componentDidMount() {
        //this.setState({ searchKey: "Kamalesh" })
        document.addEventListener("scroll", this.handleScrollEvent, false)
    }

    handleScrollEvent(e) {
        console.log(e)
    }


    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.searchKey + "**********" + this.state.searchKey);
    }

    componentWillUnmount() {
        console.log("UNMOUNTER");
        document.removeEventListener("scroll", this.handleScrollEvent, false);
    }


    changeMyName = (nameString) => {
        this.setState(
            { 
                childCompoName: nameString,
                searchKey: nameString 
            },() =>{
                console.log(this.state); 
            }
        );
    }

    render() {

        return (
            <div className="main">
                <Dash changeMyName={this.changeMyName} name={this.state.childCompoName} />
                <Dash changeMyName={this.changeMyName} name={this.state.searchKey} />
            </div>
        )
    }
}