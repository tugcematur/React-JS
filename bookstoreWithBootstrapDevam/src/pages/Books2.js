import { React, useState, useEffect } from 'react';
import axios from "axios";
import { BookStoreContext, useContext } from '../context';


export default function Books2() {
    //const [bookList,setBookList] = useState([])         // context kullanmadığımızda, localden yönetiyoru<
    const [state, dispatch] = useContext(BookStoreContext); // context kullandığımızda bunu , merkezi olarak yönetiyoruz
    function GetBooks() {
        axios
            .get("https://api-bookseller.herokuapp.com/books") // api yi yazıyoruz
            .then((response) => {
                dispatch({ type: "FETCH_BOOKS", payload: response.data }) //context.js teki switch case teki action.payload un payload u


            });
    }

    useEffect(() => {
        GetBooks();

    }, []);// [] bir kez yap bu işlemleri anlamına geliyor yoksa devamlı çalıştırır

    // console.log(state)

    const blist = state.books.map(b => {
        return (

            <>

                <tr>
                    <td>{b.id}</td>
                    <td><img src={b.imgUrl} style={{ heigth: 200, width: 200 }} /></td>
                    <td>{b.name}</td>
                    <td>{b.author}</td>
                    {/* <td>{b.about}</td> */}
                    <td className="btn btn-primary">Add To Cart</td>
                    <td className="btn btn-primary">Book Edit</td>
                    <td className="btn btn-danger"> Delete Book</td>


                </tr>

            </>

        )
    })
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Author</th>
                        {/* <th>About</th> */}
                        <th>Action</th>

                    </tr>
                </thead>

                <tbody>
                    {blist}
                </tbody>


            </table>
        </div>

    )



}
