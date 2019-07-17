import React, {Component} from 'react';
import axios from 'axios';
import EmployeeList from './List.js';

/*This componenet renders the add new employee functionality*/
export class EmployeeAdd extends React.Component {
    constructor(props) {
      super(props);
    this.state = {
      empId: '',
      name: '',
      unit: '',
      location: '',
      message: '',
      status: ''
      }
      this.handleChangeEmpId = this.handleChangeEmpId.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeUnit = this.handleChangeUnit.bind(this);
      this.handleChangeLocation = this.handleChangeLocation.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeEmpId() {
      this.setState({ empId: event.target.value });
    }
  
    handleChangeName() {
      this.setState({ name: event.target.value });
    }
  
    handleChangeUnit() {
      this.setState({ unit: event.target.value });
    }
  
    handleChangeLocation() {
      this.setState({ location: event.target.value });
    }
  
    handleSubmit() {
      event.preventDefault();
  
      const newEmp = {
        "emp_id" : this.state.empId,
        "name" : this.state.name,
        "unit" : this.state.unit,
        "location" : this.state.location,
      };
  
  
      axios.post(`http://127.0.0.1:8000/myapp/employees/add/`, newEmp)
        .then(res => {
          console.log(res);
          console.log(res.data);
          const message = res.data["message"];
          const status = res.data["flag"];
          this.setState({ message: message});
          this.setState({ status: status});
        })
  
    
    }  
  
    render() {
      if (this.state.status == "true"){
        return (
          <EmployeeList />
        )
      }
      return (
        <div className='container'>
          <form className='form-data' onSubmit={this.handleSubmit}>
            <label>
              Employee ID:
              <input className="form-control" type="text" name="empId" onChange={this.handleChangeEmpId} />
            </label>
            <label>
              Employee Name:
              <input className="form-control" type="text" name="name" onChange={this.handleChangeName} />
            </label>
            <label>
              Practice Unit:
              <input className="form-control" type="text" name="unit" onChange={this.handleChangeUnit} />
            </label>
            <label>
              DC Location:
              <input className="form-control" type="text" name="location" onChange={this.handleChangeLocation} />
            </label>
            <button className='btn btn-primary' type="submit">Add</button>
          </form>
          <p  className="alert alert-light">{this.state.message}</p>
        </div>
      )
    }
  }
  
/*This componenet renders the delete employee functionality*/
export class EmployeeDelete extends React.Component {
    constructor(props) {
      super(props);
    this.state = {
      empId: '',
      status: this.props.name,
      message: '',
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    

    handleChange() {
      this.setState({ empId: event.target.value });
    }
  
    handleSubmit() {
      event.preventDefault();
  
      axios.delete(`http://127.0.0.1:8000/myapp/employees/delete/${this.state.empId}/`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          const message = res.data["message"];
          const status = res.data["flag"];
          this.setState({ message: message});
          this.setState({ status: status});
        })
  
        
    }
    
    
  
    render() {
      if (this.state.status == "true"){
        return (
          <EmployeeList />
        )
      }
      return (
        <div className='container'>
          <form className='form-data' onSubmit={this.handleSubmit}>
            <label>
              Employee ID:
              <input className="form-control" type="text" name="empId" onChange={this.handleChange} />
            </label>
            <button className='btn btn-primary' type="submit">Delete</button>
          </form>
          <p className="alert alert-light">{this.state.message}</p>
        </div>
      )
    }
  }
  

/*This componenet renders the edit employee functionality*/
export class EmployeeEdit extends React.Component {
    constructor(props) {
      super(props);
    this.state = {
      empId: 'NA',
      name: '',
      unit: '',
      location: '',
      status: '',
      message: ''
    }
    this.handleChangeEmpId = this.handleChangeEmpId.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeUnit = this.handleChangeUnit.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleChangeEmpId() {
      this.setState({ empId: event.target.value });
    }
  
    handleChangeName() {
      this.setState({ name: event.target.value });
    }
  
    handleChangeUnit() {
      this.setState({ unit: event.target.value });
    }
  
    handleChangeLocation() {
      this.setState({ location: event.target.value });
    }
  
    handleSubmit() {
      event.preventDefault();
  
      const newEmp = {
        "emp_id" : this.state.empId,
        "name" : this.state.name,
        "unit" : this.state.unit,
        "location" : this.state.location,
      };
  
  
      axios.put(`http://127.0.0.1:8000/myapp/employees/update/${this.state.empId}/`, newEmp)
        .then(res => {
          console.log(res);
          console.log(res.data);
          const message = res.data["message"];
          const status = res.data["flag"];
          this.setState({ message: message});
          this.setState({ status: status});
        })
  
    
    }  
  
    render() {
      if (this.state.status == "true"){
        return (
          <EmployeeList />
        )
      }
      return (
        <div className='container'>
          <form className='form-data' onSubmit={this.handleSubmit}>
            <label>
              Employee ID:
              <input className="form-control" type="text" name="empId" onChange={this.handleChangeEmpId} />
            </label>
            <label>
              Employee Name:
              <input className="form-control" type="text" name="name" onChange={this.handleChangeName} />
            </label>
            <label>
              Practice Unit:
              <input className="form-control" type="text" name="unit" onChange={this.handleChangeUnit} />
            </label>
            <label>
              DC Location:
              <input className="form-control" type="text" name="location" onChange={this.handleChangeLocation} />
            </label>
            <button className='btn btn-primary' type="submit">Edit</button>
          </form>
          <p className="alert alert-light">{this.state.message}</p>
        </div>
      )
    }
  }