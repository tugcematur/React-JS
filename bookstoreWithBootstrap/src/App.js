import React from 'react';   // React ın son versiypnu kullanıyoruz
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
 import Books2 from "./pages/Books2"; 
import Cart from "./pages/Cart";
import BookCreate from "./pages/BookCreate";
import BookEdit from "./pages/BookEdit";
import Header from "./components/Header";
import NotFound from './pages/NotFound';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='ms-Grid' dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm-1 mx-xl1">
            <Header />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 50 }}>
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/books2" element={<Books2 />}></Route>
          <Route path="/" element={<Books />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/books/create" element={<BookCreate />}></Route>
          <Route path="/books/edit/:id" element={<BookEdit />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
//index.js  urleri ile karşılaştır 
export default App;
