import React from 'react'
import faker from 'faker'
 

  // function PersonelComponent(props) {
  const PersonelComponent = props => {
    return (
        <div className="container">
        <div>
          <h2>{props.name} - {props.surname}</h2>
          <hr/>
          <p>{faker.company.companyName()}</p>
           <a href=""><img src= {props.picture}  height ={250} ></img></a>
        </div>
        </div>
    );
}
export default PersonelComponent;
