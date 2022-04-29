import React from 'react'
import { Link } from "react-router-dom"
import { Layer, getTheme, FontIcon } from "@fluentui/react"
import "./header.css";

//ROUTING = Sayfaya yönlendirme

const theme = getTheme();

const contentStyle = {                                            //style ı obje olarak tanımladık
    backgroundColor: theme.palette.greenDark,
    color: theme.palette.white,
    lineHeight: "50px"

}

export default function Header() {



    // url lerini burada classlardan bağımsız , istediğim isimleri verebilirim, App.js de ne tanımladıysam burda da o şekilde olacak
    //diğer yol süslü içinde süslü aynı şekilde yazacaktık contentStyle içindekileri
    const content = (                                                                                      //content ->JSX Object


        <div style={contentStyle}>
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row"

                    style={{
                        paddingLeft: 32,
                        paddingRight: 20
                    }} >
                    <Link to="/" // {"/"} şeklinde de kullanılır
                        style={{
                            textDecoration: "none"
                        }}
                        className="header-text">
                        BookStore&nbsp;&nbsp;
                    </Link>

                    <Link to="/cart"
                        className='header-button' >
                        <FontIcon iconName="ShoppingCart" />
                    </Link>
                </div>
            </div>
        </div>
    )

    return (
        // <Layer>
        //     <div style={contentStyle}  >
        //         <div className="ms-Grid" dir="ltr">
        //             <div>
        //                 <Link to={"/"}>BookStore&nbsp;&nbsp;</Link>
        //                 {/* <Link to = {"/books"}>Books&nbsp;&nbsp;</Link> */}
        //                 <Link to={"/books/create"}>Create&nbsp;&nbsp;</Link>
        //                 {/* <Link to = {"/books/edit"}>Edit&nbsp;&nbsp;</Link> */}
        //                 <Link to={"/cart"}>Cart&nbsp;&nbsp;</Link>
        //                 {/* <Link to = {"/books2"}>Books2&nbsp;&nbsp;</Link> */}
        //             </div>
        //         </div>
        //     </div>
        // </Layer>

        <Layer>
            {content}
        </Layer>

    );
}

//dir="ltr" -> direction left to right

// htmlde boşluk bırakma &nbsp

// React js Sayfanın eğişen kısmını render eder