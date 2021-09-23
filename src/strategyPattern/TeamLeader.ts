import IEmployee from "./IEmployee";

export default class TeamLeader implements IEmployee {
  hourlyRate: number = 35

  calculateSalary(hours: number): number {
    return hours * this.hourlyRate
  }
}