import React, { Component, useState, useEffect } from 'react';
import axios from "axios";

export default function Categories() {
    const [clist, setClist] = useState([]) //[null]

    function GetCategories() {

        axios
            .get("http://localhost:48302/Category/ListOfCategories")
            .then((response) => {
                setClist(response.data)

            });
    }

    useEffect(() => {
        GetCategories();
        //alert("ji")

    }, []);
    console.log(clist)
    const renderList = clist.map(c => {
        return (
            <div className='header-navigation'>
                <ul>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" >
                            {c.categoryName}
                        </a>
                    </li>
                </ul>

            </div>

        )
    }

    )

    return (
        <div>

            {renderList}
        </div>
    )
}
