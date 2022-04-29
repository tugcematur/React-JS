import React, { useState } from 'react';
import axios from "axios";
import { Stack, PrimaryButton, TextField } from "@fluentui/react"

//rfc tab tab
export default function BookCreate() {

  const [pageData, setPageData] = useState({
     
    name: "",
    author: "",
    imgUrl: "",
    about: ""

  }); // propertyleri boş olan state nesnesi oluşturduk, bunu globale çevirmemize gerek yok


  const onChangeText = (e) => {//bilgi giriş alanların her girdiğimiz karakter siinir eğer onChangeText i kullanmaz isel , bunu kullanmak zorundayız
    const { name, value } = e.target; // target: hedef ama burada kaynağımız bizim aslında 

    setPageData({ ...pageData, [name]: value })   // yanındaki değerler dışınadkiler değişmeyecek anlamına geliyor,yani name i boş yap ama diğerleri aynı kalsın , neden [name] bu şekilde ????name olmalı
  };

  function createBook() {

    axios
      .post("https://api-bookseller.herokuapp.com/books", pageData)
      .then((res) => {
        console.log("Response:", res);

        if (res.status == 201) {
          alert("Book created successfully")
        }
      });
  }


  return (
    <div className="content">
      <div className="content-header">Create Book</div>
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
          value={pageData.name}
          placeholder={"Please enter the name"}
          onChange={onChangeText}
          required
        />

        <TextField
          label="Author"
          name="author"
          value={pageData.author}
          placeholder={"Please enter author"}
          onChange={onChangeText}
          required
        />


        <TextField
          label="Image"
          name="imgUrl"
          value={pageData.imgUrl}
          placeholder={"Please enter image URL here"}
          onChange={onChangeText}
          required
        />

        <TextField
          label="About"
          name="about"
          value={pageData.about}
          placeholder={"Please enter about here"}
          onChange={onChangeText}
          required
        />
        <PrimaryButton
          text="Create book"
          onClick={() => createBook()}
          style={{ width: "10%", height: "50px" , color:"white", backgroundColor:"green" }}
          // onChange={onChangeText} kullanılmalı mı?? , style taginde , koymalısın alanların arasına
        />

      </Stack>
    </div>

  );
}
