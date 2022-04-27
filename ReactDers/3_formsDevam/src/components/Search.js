import React, { Component } from 'react'

export default class Search extends Component {
    state = {text: ''}
     
    onInputChange = (event)=> {
        this.setState ({
            text: event.target.value
        });
    }
    onFormSubmit = (event)=> {
        event.preventDefault()
        this.props.onSubmit(this.state.text)
    }
    render() {
        return (
            <div className="container">
                <br></br>
                <form onSubmit={this.onFormSubmit}>
                     <input type="text" value={this.state.text} 
                     onChange={this.onInputChange}/>
                </form>
                <p>{this.state.text}</p>
            </div>
        )
    }
}
