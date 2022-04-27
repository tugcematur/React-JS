import React, { Component } from 'react'

export default class Search extends Component {
    state = {text: ''}
    onInputChange = event => {
   this.setState({text: event    .target.value}) 
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmitx(this.state.text);
     }
    render() {
        return (
            <div className="col-md-7  ">
                <div className="container">
                    <form onSubmit = {this.onFormSubmit} >
                        <div className="form-group">
                            <label>Search</label>
                            <input className="form-control " 
                            type="text" value= {this.state.text} onChange = {this.onInputChange} >
                         
                            </input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
