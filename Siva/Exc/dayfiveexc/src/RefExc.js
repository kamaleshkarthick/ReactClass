import React from 'react';


export default class RefsExc extends React.Component {

    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();

    }

    handleOnlyMyself = (e) => {
        e.stopPropagation();
        alert("hey I am Child Div");
    }
    handleOnlyMyself2 = (e) => {
        e.preventDefault();
        alert("my default begaviour stopped")
    }
    

    handlFormData = (e) => {
        e.preventDefault();
        console.log(this.nameRef.current.value);
        console.log(this.emailRef.current.value)
    }

    render() {
        return (
            <form onSubmit={this.handlFormData}>
                <div><input ref={this.nameRef} placeholder='Enter Name' type='text' /></div>
                <div> <input ref={this.emailRef} style={{ margin: '30px 0' }} placeholder='Enter Email' text='email' /></div>
                <button>Get My Data</button>

                <a 
                onClick={(e) => this.handleOnlyMyself2(e)} 
                target="_blank" href="https://www.google.com">go Google</a>
                
                <h1>Events</h1>
                <div onClick={(e) => alert("i am parent")} className='div1'>
                    <div onClick={(e) => this.handleOnlyMyself(e)} className='div2'>

                    </div>
                </div>
            </form>
        )
    }
}