import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeesList from './Components/EmployeesList';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/employees" element={<EmployeesList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
