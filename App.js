import React, {Component} from 'react';
import axios from 'axios';
import {EmployeeEdit} from './Employee.js';
import {EmployeeAdd} from './Employee.js';
import {EmployeeDelete} from './Employee.js';
import EmployeeList from './List.js';


/*This componenet renders the 1st view of application*/
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    empData: ( 
        <EmployeeList />
    )
  }
  this.handleHome = this.handleHome.bind(this);
  this.handleAdd = this.handleAdd.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
}

handleHome() {
  event.preventDefault();
  this.setState({ empData: (<EmployeeList />) });
}

handleAdd() {
    event.preventDefault();
    this.setState({ empData: (<EmployeeAdd />) });
 }

 handleEdit() {
  event.preventDefault();
  this.setState({ empData: (<EmployeeEdit />) });
}

 handleDelete() {
  event.preventDefault();
  this.setState({ empData: (<EmployeeDelete name='false' />) });
}

  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
        <form onSubmit={this.handleHome}>
          <button className='btn btn-dark btn-lg font-italic' type="submit">DataManage</button>
        </form>
        <form onSubmit={this.handleAdd}>
          <button className='btn btn-link btn-sm' data-toggle="tooltip" title="Add Employeee" type="submit"><i className="fa fa-user-plus fa-2x" aria-hidden="true"></i></button>
        </form>
        <form onSubmit={this.handleEdit}>
          <button className='btn btn-link btn-sm' data-toggle="tooltip" title="Edit Employee" type="submit"><i className="fa fa-user-edit fa-2x" aria-hidden="true"></i></button>
        </form>
        <form onSubmit={this.handleDelete}>
          <button className='btn btn-link btn-sm' data-toggle="tooltip" title="Delete Employee" type="submit"><i className="fa fa-user-minus fa-2x" aria-hidden="true"></i></button>
        </form>
        </nav>
        {this.state.empData}
      </div>
         
    )
  }
}