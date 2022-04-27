import React, { Component } from 'react'

export default class Search extends Component {
    state = { text: '' }
    onTextChange = (event) => {
        this.setState({ text: event.target.value })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.text)
    }
    render() {
        return (
            <div className="col-md-5">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label>Search</label>
                        <input className="form-control "
                            type="text" onChange={this.onTextChange}
                            value={this.state.text} />
                    </div>
                </form>
            </div>
        )
    }
}
