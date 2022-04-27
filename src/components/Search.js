import React, { Component } from 'react'

export default class Search extends Component {
    state = {text: ''}
    onInputChange(event) {
        console.log(event.target.value);
    }
    onInputChange2 = (event)=> {
        this.setState ({
            text: event.target.value.toUpperCase()
        });
    };
    render() {
        return (
            <div className="container">
                <br></br>
                <form>
                     <input type="text" onChange={this.onInputChange}/>
                     <br></br>
                     {/* <input type="text" onChange={(e)=> console.log(e.target.value)}  /> */}
                     <input type="text" value={this.state.text} onChange={this.onInputChange2}/>
                </form>
            </div>
        )
    }
}
