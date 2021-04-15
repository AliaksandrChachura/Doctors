import React, { Component, useState } from "react";
import { getEmployees, getWorklog } from "./api";
import DoctorItem from "./components/DoctorItem"


// console.log(getEmployees())
// console.log(getWorklog())

class App extends Component {
  state = {
    loading: true,
    employees: null,
    worklog: []
  };

  
  
  promiseHandler() {
    // const [doctors, setDoctors] = useState([]);
    getEmployees()
    .then( result => {
      // this.state.employees = result;
      // console.log(this.state.employees)
      return result;
     })
     .then( data => {
        this.state.employees = data;
       console.log(data)
     });
  }

  
      
  render() {
    
    const { loading } = this.state;

    // this.state.employees = this.promiseHandler()
    console.log(this.state.employees)

    if (loading) {
      return "Loading...";
    }

    return (
      <div>        
        <table style={{width:"100%"}}>
        <caption>Doctors</caption>
          <tbody>
            <tr>
              <th>Id: </th>
              <th>Name: </th>
              <th>Birth: </th>            
            </tr> 
            <DoctorItem
              id="{e[0].id}"
            ></DoctorItem> 
          </tbody>    
        </table>
      </div>);
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }
}

export default App;
