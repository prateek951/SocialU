import React, { Component } from "react";
import { SalaryInput } from "../components/SalaryInput";
import { SalaryOutput } from "../components/SalaryOutput";
export class Salary extends Component {
  constructor(props) {
    super(props);
    this.sal = 0;
    this.tax = 0;
    this.state = { salary: this.sal, pf: 0, tax: this.tax };
  }
  printTax() {
    // this.state = {}
    this.setState({ salary: this.sal, pf: 0, tax: this.tax });
  }
  getTax(event) {
    this.tax = event.target.value;
  }
  getPF() {
    this.setState({ salary: this.sal, pf: this.refs.pf.value });
  }
  takeSalary(event) {
    this.sal = event.target.value;
    this.setState({ salary: this.sal });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          placeholder="Type tax"
          onChange={this.getTax.bind(this)}
        />
        <button onClick={this.printTax.bind(this)}>Print tax</button>
        <br />
        Tax is {this.state.tax}
        <br />
        <input type="text" placeholder="Type PF Here" ref="pf" />
        <button onClick={this.getPF.bind(this)}>Get PF</button>
        <br />
        PF is {this.state.pf}
        <SalaryInput takeSal={this.takeSalary.bind(this)} />
        Salary is {this.state.salary}
        <br />
        <hr />
        <SalaryOutput salary={this.state.salary} />
      </div>
    );
  }
}
