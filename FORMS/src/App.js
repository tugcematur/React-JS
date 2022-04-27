// import ReactDOM from 'react-dom';
// import React from 'react';
import faker from "faker";
import PersonelComponent from "./PersonelComponent";
import ConfirmComponent from "./ConfirmComponent"

function App() {
  return (
    <div className= "container">
       <h1>Proje</h1>
      <ConfirmComponent >
     
        <PersonelComponent name = "Şamil" surname = "Yılmaz"
         picture = {faker.image.image()} >
        </PersonelComponent>
      </ConfirmComponent>

      <ConfirmComponent>
        <PersonelComponent name = "Selen" surname="Yılmaz" 
        picture = {faker.image.image()}  >
        </PersonelComponent>
     </ConfirmComponent>

     <ConfirmComponent>
        <PersonelComponent name = "Elif" surname= "Göktan" 
        picture = {faker.image.image()} 
        ></PersonelComponent>
      </ConfirmComponent>
    </div>
  );
}

export default App;
