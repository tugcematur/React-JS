import React from 'react' 
import Accordion from './components/Accordion'
import Search from './components/Search'
const items = [
  {
    title:"Ankara",
    content: "Türkiyenin Başkenti"
  },
  {
    title:"İstnbul",
    content: "Türkiyenin En Büyük Şehri"
  },
  {
    title:"Eskişehir",
    content: "Anadolu İncisi"
  },
]
const   App =()=>  {
  return (
    // <Accordion items= {items}></Accordion>
    <Search></Search>
  );
}

export default App;
