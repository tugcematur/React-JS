import React, { useEffect, useState,useContext } from 'react';
import axios from "axios";



export default function EmployeesList() {
//  const [empList, setEmpList] = useState([]); context için kaldırıldı
  // localda yapıyoruz dispatch yok

  const [state,dispatch] = useContext(AppContext) // context için eklendi
  const getEmployees = () => {
    axios
      .get("http://localhost:3000/employees")
      .then((response) => {
      //  setEmpList(response.data) context için kaldırıldı
      dispatch({ type:"FETCH_EMPLOYEES", payload: response.data}) // context içn eklendi
      });
  }

  // const getEmployee = (employeeID) => {
  //  axios
  //  .get(`http://localhost:3000/employees/${employeeID}`)
  //  .then((res) => {
  //    dispatch({type:"FETCH_EMPLOYEE_ID", payload: response.data})
  //  });
  // }

  const elist = empList.map(e => (
    <>

      <tr>
        <td>{e.id}</td>
        <td>{e.first_name}</td>
        <td>{e.last_name}</td>
        <td>{e.email}</td>
      </tr>

    </>

  ))

  useEffect(() => {
    getEmployees();
    console.log(empList)
  }, []);


  return (
    <div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {elist}
        </tbody>
      </table>
      
    </div>
  )
}
