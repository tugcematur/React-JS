import React from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Dropdown } from 'bootstrap';

export default function Products() {


    const location = useLocation();

    //console.log(location)
    //  console.log(location.state.id);
    //  alert("Product")

    const [plist, setPlist] = useState([])

    function FetchProductsByCatId() {
        axios
            .get("http://localhost:48302/Product/ListOfProductsByCatId/" + location.state.id) // / koymayı unutma sonuna!!
            .then((res) => {
                setPlist(res.data);
            })
    }

    useEffect(() => {
        FetchProductsByCatId();
    });//her render edildiğinde çalışacak

    const renderList = plist.map(p => {
        return (
         
                 <div className="content"  key={p.productId}>
                <ul >
                    <li className="content-header"  >
                        <a className="dropdown-toggle" data-toggle="dropdown" data-target="#"  >
                            {p.productName}
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
