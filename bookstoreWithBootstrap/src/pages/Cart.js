import React from 'react';
import { useEffect, useState } from "react"; //state ve sayfa güncellenmesi için , react en vazgeçilmezkeri ,hooklar, classs yapısı yerine fonksiyon 
import axios from "axios"; // api çağırmak için daha profesyonel yolu
import Toolbar from '../Toolbars'; //Function adı 
import { DetailsList, SelectionMode, Stack, PrimaryButton } from "@fluentui/react";
import { BookStoreContext, useContext } from '../context'; // context için eklendi
//aynı useContext instance ı kullansınlar diye, farklı  bir tane oluşur yoksa import edince 


const columnProps = {
  tokens: { childrenGap: 20 },
  style: { root: { width: 100 } }
}

//rfc tab tab
//Edit ve Create olmayacak
export default function Cart() {

const [state, dispatch] = useContext(BookStoreContext); // context için eklendi
const {cart,books} = state;              //context için eklendi


  const columns = [
    //JSon nesneleri
    {

      key: "id",
      name: "Id",
      fieldName: "id",
      minWidth: 10,
      maxWidth: 50,
      isRowHeader: true

    },
    {

      key: "imgUrl",
      name: "Image", //başlık , istediğimiz ismi verebiliriz sütun başlığı 
      fieldName: "imgUrl",
      minWidth: 200,
      maxWidth: 250,
      isRowHeader: true,
      onRender: (item) => (

        <img

          src={item.imgUrl}
          style={{ width: "200px", height: "250px" }}  //react te style ı obje olarak vermeliyiz bu yüzden  bir süslü daha açtık, her defasında sayfa yeniledndiğinde URL den img ı çekiyor 
          alt={`${item.name} - ${item.author}`}

        >


        </img>
      )

    },
    {
      // genelde key ile field adının aynı olmasında sakınca yok
      key: "name",
      name: "Name", // sütun başlığı
      fieldName: "name",
      minWidth: 100,
      maxWidth: 150,
      isRowHeader: true

    },            //camel case : bu yazım tekniğinde hiçbir zaman boşluk bırakılmaz ve ilk kelime küçük harfle başladıktan sonra her bir kelimenin ilk harfi büyük harfle başlar.
    {

      key: "author",
      name: "Author",
      fieldName: "author",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true

    },
    {

      key: "about",
      name: "About",
      fieldName: "about",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true

    },
    {
      key: "process",
      name: "Action",
      fieldName: "Action",
      minWidth: 300,
      maxWidth: 500,
      isRowHeader: true,
      onRender: (item) => (
        <Stack {...columnProps} horizontal>

          <PrimaryButton text="Delete Cart"
            onClick={async () => await DeleteCart(item.id)} />
        </Stack>
      )
      //Buton eklemek için Stack oluşturuyoruz , ...columnProps spread syntax 
      //state i id yi taşımaya yarıyor
      //database e gidip silme işleminin bitmesini beklememiz gerek bu yüzden (örneğin ayfayı günceleyemem) bu yüzden asenkron 
    }
  ];

  const GetCart = () => {

    axios
      .get("https://api-bookseller.herokuapp.com/carts") // api yi yazıyoruz
      .then((response) => {
    //    setCart(response.data)// okunan veriyi books un içine atıyor //lokal state fonksiyonu bu ,bunu yerine
    dispatch({type : "FETCH_CART", payload: response.data}) // context için eklendi , lokalden globale çevrildi
      });
  }

  async function DeleteCart(cartID) { // sepetteki book un idi sine CartID diyoruz 
    const response = await axios
      .delete(`https://api-bookseller.herokuapp.com/carts/${cartID}`);


    if (response.status == 200) {   // delete status ??
      GetCart(); 
    } //silme işlemi başarılıysa 


  }

 // const [cart, setCart] = useState([]); // context kaldırıldı    useState -> Local state 


  useEffect(() => {

    axios
      .get("https://api-bookseller.herokuapp.com/carts") // api yi yazıyoruz
      .then((response) => {
        GetCart(response.data)
      });
  }, []);
  // Aşağıdaki Books in Cart yazısının sayfada gözükmesi için Toolbar componentini yazmam gerekiyor 
  return (
    <div>
      
      <div className="content">
        <div className="content-header">
          {cart.length > 0 ? "Books in Cart" : "Cart is Empty"}
        </div>
        {cart.length > 0 && (
          <DetailsList
            items={cart}
            columns={columns}
            SelectionMode={SelectionMode.none}

          />

        )}
      </div>
    </div>
  );
}
