import React from 'react';
import {useEffect,useState} from "react";
import { Stack, PrimaryButton, TextField } from "@fluentui/react"
import { useLocation} from "react-router-dom"
import axios from 'axios';
import { BookStoreContext, useContext } from '../context'; //context için eklendi , state paylaşımı var  eski sayfa değiştirileceği için globale çevireceğiz paylaşım var 
//rfc tab tab
export default function BookEdit() {


  const location = useLocation();

  // const [pageData, setPageData] = useState({  // contex
  //   id :0,
  //   name: "",
  //   author: "",
  //   imgUrl: "",
  //   about: ""

  // }); 


  const {state,dispatch} = useContext(BookStoreContext);
  const {book} = state;

  const onChangeText = (e) => {//bilgi giriş alanların her girdiğimiz karakter siinir eğer onChangeText i kullanmaz isel , bunu kullanmak zorundayız
    const { name, value } = e.target; // target: hedef ama burada kaynağımız bizim aslında 

    // setPageData({ ...pageData, [name]: value })   // yanındaki değerler dışınadkiler değişmeyecek anlamına geliyor,yani name i boş yap ama diğerleri aynı kalsın , neden [name] bu şekilde ????
     dispatch({ type:"FETCH_BOOK_ID", payload: {...book, [name]:value}//...   ->verileri çekerken  diğer verileri değiştirme,değişmeyen veriler aynen kalsın sadece verisini grilen şey değişsin diğer veriler payload da korunsun 

  });
};

function EditBook(){
  console.log("EditBook a girdim")
 axios
 .put("https://api-bookseller.herokuapp.com/books/" + location.state.id,
 book) //context dolayısıyla eklendi
 .then((res) => { 


  if(res.status == 200) {
    alert("Book succesfully updated")
  }
 });
}


function FetchBookById(){

  axios.get("https://api-bookseller.herokuapp.com/books/" +
  location.state.id)
  .then((res) =>{
 //  setPageData(res.data) // context için kaldırıldı
 console.log(res.data);
 dispatch({type: "FETCH_BOOK_ID",
           payload: res.data   });
  })
}

useEffect(() => {
  FetchBookById();
},[]);

  return (
   
<div className="content">
      <div className="content-header">Edit Book</div>
      <Stack

        tokens={{ childrenGap: 10 }}   // aralarında ne kadar boşluk bırakılacağına karar verilen yer , fluentui da        FluentUI Syntax
        styles={

          {
            root: {
              width: 700,
              marginLeft: 10,
              marginTop: 10
            }
          }

        }>
       <br/>
        <TextField
          label="Name"
          name="name"
         // value={pageData.name} // context dolayısıyla kaldırdık
          value={book.name} // context dolayısıyla değişti 
          onChange={onChangeText}
          required
        />

        <TextField
          label="Author"
          name="author"
         // value={pageData.author} // context dolayısıyla kaldırdık
         value={book.author} // context dolayısıyla değişti 
          onChange={onChangeText}
          required
        />


        <TextField
          label="Image"
          name="imgUrl"
         // value={pageData.imgUrl}  // context dolayısıyla kaldırdık
          value={book.imgUrl} // context dolayısıyla değişti 
          onChange={onChangeText}
          required
        />

        <TextField
          label="About"
          name="about"
          //value={pageData.about}  // context dolayısıyla kaldırdık
          value={book.about} // context dolayısıyla değişti 
          onChange={onChangeText} 
          required
        />
        <PrimaryButton
          text="Edit"
          onClick={() => EditBook()}
          style={{ width: "10%", height: "50px" , color:"white", backgroundColor:"green" }}
          // onChange={onChangeText} kullanılmalı mı?? , style taginde , koymalısın alanların arasına
        />

      </Stack>
    </div>

  );
}
