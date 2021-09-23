import IEmployee from "./IEmployee";

export default class Developer implements IEmployee {
  hourlyRate: number = 40

  calculateSalary(hours: number): number {
    return hours * this.hourlyRate
  }
}