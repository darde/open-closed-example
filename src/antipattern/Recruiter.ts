export default class Recruiter {
  hourlyRate: number = 22
  hireBonus: number = 500

  calculateBonus(hoursWorked: number) {
    if (hoursWorked > 100) {
      return 500
    }
    return 0
  }

  calculateTotalSalary(hours: number): number {
    return (hours * this.hourlyRate) + this.calculateBonus(hours)
  }
}