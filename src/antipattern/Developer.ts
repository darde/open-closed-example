export default class Developer {
  hourlyRate: number = 40

  calculateSalary(hours: number): number {
    return hours * this.hourlyRate
  }
}