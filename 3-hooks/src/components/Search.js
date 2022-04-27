import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [text, setText] = useState("");
    const [results, setResult] = useState([]);


    useEffect(() => {
        const search = async () => {
            const { data } = await axios('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: text,
                }
            })
            setResult(data.query.search);
        }
       const timeoutId =  setTimeout(() => {
            if (text) {
                search()
            }
        },500);
        return  () => {
            clearTimeout(timeoutId)
        }
    }, [text]);
    const renderedResult = results.map((result) => {
        return (
            <tr key={result.pageid}>
                <th>{result.title}</th>
                <td><span dangerouslySetInnerHTML={{ __html: result.snippet }}></span></td>
                <td><a className="btn btn-dark" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Details</a></td>
            </tr>
        );
    });
    console.log(renderedResult)
    return (
        <div className="container row" >
            <div className="form-group">
                <div className="col-md-5">
                    <label>Search</label>
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className="form-control" type="text" />
                </div>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>

                    {renderedResult}

                </tbody>
            </table>
        </div>


    )
}
export default Search;
