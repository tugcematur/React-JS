import React, { Component, useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function Categories() {
    const [clist, setClist] = useState([]) //[null]
    const navigate = useNavigate();
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
   //console.log(clist)

    const renderList = clist.map(c => {
        return (
            <div className='header-navigation'>
                <ul>
                    <li className="dropdown" >
                        <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" onClick={()=> navigate("/Products/" + c.categoryId,
                        {state: { id: c.categoryId } })} >
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
