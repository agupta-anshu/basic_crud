import React, {Component} from 'react';
import axios from 'axios';

/*This componenet renders the list of employee functionality*/
export default class EmployeeList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      empList: [],
      count:'',
      next:'',
      previous:'',
      url: `http://127.0.0.1:8000/myapp/employees/`,
      classPrevious:'page-item', 
      classNext:'page-item',    
      }
      this.dataCall = this.dataCall.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
      this.handleNext = this.handleNext.bind(this);
    }
    

    /*This function will fetch data from API*/
    dataCall(url) {
      axios.get(url)
        .then(res => {
          const empList = res.data["results"];
          const count = res.data["count"];
          const next = res.data["next"];
          const previous = res.data["previous"];
          this.setState({ empList : empList});
          this.setState({ count : count });
          this.setState({ next : next });
          this.setState({ previous : previous });
          console.log(res.data);
          if (this.state.next == null){
            this.setState({ classNext:'page-item disabled' });
          }
          if (this.state.previous == null){
            this.setState({ classPrevious:'page-item disabled' });
          }
        })
    }
  
    handleNext() {
      event.preventDefault();
      this.dataCall(this.state.next);
      this.setState({ classPrevious:'page-item' });
    }

    handlePrevious() {
      event.preventDefault();
      this.dataCall(this.state.previous);
      this.setState({ classNext:'page-item' });
    }


    componentDidMount() {
      this.dataCall(this.state.url);
    }
    
    render() {
      if((this.state.empList).length ===0){
        return(
          <div>
            <h2>No Employee Data present</h2>
          </div>
        )
      }
      return (   
        <div className='container'>
          <h6>Total Count: {this.state.count}</h6>
          <table className='table table-hover'>
            <thead>
            <tr className='tableRow'>
              <th>Employee ID</th>
              <th>Employee Name</th> 
              <th>Practice Unit</th>
              <th>DC Location</th>
            </tr>
            </thead>
            <tbody>
            { this.state.empList.map(employee => <tr key={employee.emp_id}>
              <td>{employee.emp_id}</td>
              <td>{employee.name}</td>
              <td>{employee.unit}</td>
              <td>{employee.location}</td>
            </tr>)}
            </tbody>
          </table>
          <div className="pagination">
            <form className={this.state.classPrevious} onSubmit={this.handlePrevious}>
              <button className="page-link" type="submit">Previous</button>
            </form>
            <form className={this.state.classNext} onSubmit={this.handleNext}>
              <button className="page-link" type="submit">Next</button>
            </form>
          </div>
        </div>
        )
      }
    }
  