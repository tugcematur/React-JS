import React from 'react';
import { CommandBar } from "@fluentui/react";
import { useNavigate } from "react-router-dom";




export default function Toolbar() { // başka sayfaya git kullanıcı eğer Create iconuna tıklarsa create sayafasına git,daha sonra Update için de yapıcaz 

    const navigate = useNavigate();           //nesne oluşturduk
    return (
        <div>         

            <CommandBar   //
                items={
                    [
                        {
                            key: "add",
                            text: "Create",
                            iconProps: { iconName: "Add" },                         // Header ın altındaki Create deki + işareti
                            onClick: () => navigate("/books/create")
                        }
                    ]
                }
            />
            <hr style={{border:"1px solid #eee", margin: 0}}/>

        </div>
    )
}

//Alt shift F

// use ile başlayan methodlar Hooks