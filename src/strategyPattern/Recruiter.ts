import IEmployee from "./IEmployee";

export default class Recruiter implements IEmployee {
  hourlyRate: number = 22

  calculateBonus(hoursWorked: number) {
    if (hoursWorked > 100) {
      return 500
    }
    return 0
  }

  calculateSalary(hours: number) {
    return (hours * this.hourlyRate) + this.calculateBonus(hours)
  }
}