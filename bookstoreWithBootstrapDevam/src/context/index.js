import React, {useContext,useReducer, createContext} from "react";

const BookStoreContext = createContext();
//initial değerlerde her şey boş

const initialState = {

    cart : [],//dizi
    books: [] ,//dizi
    book : {} // nesne(object)
};
   //state,action her aman tanımlanacak aynı yerde ,sabit
const reducer = (state, action) =>{ //birden fazla veriyi yönettiğimizde reducer ı kullanıcaz
    console.log("Action",action);


    switch(action.type){
        case "FETCH_BOOKS":
             return {...state,books: action.payload};    //sadece bookos un state ini değiştir demek , action.payload: o action için kullananılan datayı belirtir
               // state değişkeni olduğu için {} içinde yazıyoruz
        case "FETCH_CART":
            return {...state,cart: action.payload};   
        case "FETCH_BOOK_ID":
            return {...state,book: action.payload};  
        default:
            return state;    

    }

}



const BookStoreProvider =  (props) => {

    const [state, dispatch] =useReducer(reducer,initialState);

    return(                                // neyin props olarak, hangi tagi alıyorsan onun arasında kalan, iki tagm rasında kalan 
        <BookStoreContext.Provider value= {[state, dispatch]}>
            {props.children} 
        </BookStoreContext.Provider>
    )
} 

export {BookStoreProvider,BookStoreContext, useContext}; //useContext neden ???
