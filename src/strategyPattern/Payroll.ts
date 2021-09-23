import IEmployee from "./IEmployee";

export default class Payroll {
  Employee: IEmployee
  
  constructor(Employee: IEmployee) {
    this.Employee = Employee
  }

  calculateSalary(hours: number): number {
    return this.Employee.calculateSalary(hours)
  }
}