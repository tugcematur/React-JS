import React from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Products() {


    const location = useLocation();

    //console.log(location)
    console.log(location.state.id);
    //  alert("Product")

    const [plist, setPlist] = useState([])

    function FetchProductsByCatId() {
        axios
            .get("http://localhost:48302/Product/ListOfProductsByCatId" + location.state.id)
            .then((res) => {
                setPlist(res.data);
            })
    }

    useEffect(() => {
        FetchProductsByCatId();
    }, []);

    const renderList = plist.map(p => {
        return (
            <div className='header-navigation'>
                <ul>
                    <li className="dropdown" >
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
