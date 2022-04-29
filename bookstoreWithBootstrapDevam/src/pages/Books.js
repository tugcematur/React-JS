import React from 'react';
import { useEffect, useState } from 'react'; //sayfa render olurken farklı işlemin de olması için useEffect
import axios  from "axios";
import { DetailsList, SelectionMode, Stack, PrimaryButton, CommandBar } from '@fluentui/react'; //SelectionMode chackleri kaldırmak için kullanıcaz 
import { useNavigate } from "react-router-dom";
import Toolbar from '../Toolbars'; //Function adı 
import { BookStoreContext,useContext } from '../context'; 



const columnProps = {
  tokens: { childrenGap: 20 },
  style: { root: { width: 100 } }
}


//rfc tab tab
export default function Books() {
  // return (
  //     <>
  //     <br/>
  //     <br/>
  //     <h1>Books</h1>
  //     </>

  // );

  //içinde veri tuttuğumuz her şey bir state

  // const [books, setBooks] = useState([]); // ilk başta  içi boş array veya (" ") da olabilirdi // Local statei iptal ettik
  const [state, dispatch] = useContext(BookStoreContext); //geleneksel bir şekilde böyle tanımlanır.
  const navigate = useNavigate();
  //Details List tanımlıyoruz, c# ta Gridview tablo gibi 
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
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
      onRender: (item) => (
        <Stack {...columnProps} horizontal>
          <PrimaryButton 
            text="Add to Cart"
            onClick={() => AddToCart(item)} />
          <PrimaryButton
          text="Edit Book"
          onClick={() => navigate("/books/edit/" + item.id,
              { state: { id: item.id } })} />
          <PrimaryButton text="Delete Book"
            onClick={async () => await DeleteBook(item.id)} />
        </Stack>
      )
      //Buton eklemek için Stack oluşturuyoruz , ...columnProps spread syntax 
      //state i id yi taşımaya yarıyor
      //database e gidip silme işleminin bitmesini beklememiz gerek bu yüzden (örneğin ayfayı günceleyemem) bu yüzden asenkron 
    }

  ]
  //database e birşeyler ekliyoruz bu yüzden post, bir cevap döndürecek yapılan işleme dair
  function AddToCart(cartItem) {
    axios
      .post("https://api-bookseller.herokuapp.com/carts",cartItem)
      .then((response) => {
        console.log(response.data);
      })

  }

  async function DeleteBook(bookID) {
    await axios
      .delete(`https://api-bookseller.herokuapp.com/books/${bookID}`);
    GetBooks();
  }

  function GetBooks() {

    axios
      .get("https://api-bookseller.herokuapp.com/books") // api yi yazıyoruz
      .then((response) => {
        // setBooks(response.data)// okunan veriyi books un içine atıyor // setBooks uiptal ettik
        dispatch({type: "FETCH_BOOKS",payload: response.data}) //context.js teki switch case teki action.payload un payload u
      });
  }

  //Promise lerde de then var
  useEffect(() => {
    // fetch("https://api-bookseller.herokuapp.com/books") // Fetch asenkron komut, verileri çek ,aşağıdaki komutlar birbirini beklemesi gereken komutlar(asenkron) olsuğu için .then komutunu  kullanıyoruz 
    // .then((responseJson) => responseJson.json())// json verisini çek
    // .then((response) => console.table(response)); //verileri bir tabloya yazdır

    GetBooks();
  }, []);// [] bir kez yap bu işlemleri anlamına geliyor 


  return (
    <div>
      <Toolbar />
      <div className="content">
        <div className="content-header">Books</div>
        <DetailsList   
        items={state.books}
         columns={columns} 
         SelectionMode= {SelectionMode.none} /> 
        
      </div>
    </div>
  )
}
//SelectionMode işe yaramadı kaldıramadık


//https://bettersolutions.com/javascript/fluent-ui/components-react-detailslist.htm
//https://book-store-api-test.herokuapp.com/

//https://api-bookseller.herokuapp.com/

//npm install

//fluentui ile yaptık bootstrap ve css ile de yapabilirdik

//https://openbase.com/js/@fluentui/react-icons/documentation

//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
// bootstrap geliştirirken  public-> index.html de head içine bir yere 