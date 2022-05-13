

import Categories from './components/Categories';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './components/Products';


function App() {
  return (
    <BrowserRouter>

      <Header />
      <div className="row">
        <div className="col-md-7">

          <Categories />
        </div>
      </div>

      <div style={{ paddingTop: 100 }}>
        
        <Routes>
          <Route path="/products/:id" element={<Products />}></Route>
        </Routes>
      </div>
    </BrowserRouter>



  );
}

export default App;
