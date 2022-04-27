import React, { useState } from 'react';


const Search = ({ onFormSubmit }) => {

    const [text, setText] = useState('')

    const onSubmit = (event) => {
        //  setText = ("değişti")
        event.preventDefault();
        onFormSubmit(text)
    } 
// event = parametrenin geldiği tag 
    const onTextChange =(event ) =>{ 
     
       setText(event.target.value);
    //   console.log(text)
    }



    return (
        // <div>
        //     <button onClick={onSubmit}>Search</button>
        // </div>

        <div className="col-md-5">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Search</label>
                    <input className="form-control" type="text" value={text}  onChange={onTextChange}/>
                </div>
            </form>

        </div>
    )
}

export default Search;