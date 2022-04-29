import { useEffect, useState } from "react";
import axios from "axios";
import { BookStoreContext, useContext } from '../context';

export default function Cart2() {

    const [state, dispatch] = useContext(BookStoreContext); // context için eklendi
   // const { cart2 } = state;


    const GetCart = () => {

        axios
            .get("https://api-bookseller.herokuapp.com/carts") // api yi yazıyoruz
            .then((response) => {
                //    setCart(response.data)// okunan veriyi books un içine atıyor //lokal state fonksiyonu bu ,bunu yerine
                dispatch({ type: "FETCH_CART", payload: response.data }) // context için eklendi , lokalden globale çevrildi
            });


    }


    useEffect(() => {
        GetCart()


    }, []);

    console.log(state)

    const clist = state.cart.map(c => {
        return (
            <>
                <tr>
                    <td>{c.id}</td>
                    <td><img src={c.imgUrl} style={{heigth:100, width:100}} /> </td>
                    <td>{c.name}</td>
                    <td>{c.author}</td>
                    <td>{c.about}</td>
                    <button  className="btn btn-primary ">Delete Cart</button>
                    
                </tr>
            </>

        )
    })
    return (
        <div >
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>About</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { clist}
                </tbody>
            </table>
        </div>
    )
}
