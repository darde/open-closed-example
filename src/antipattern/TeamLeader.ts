export default class TeamLeader {
  hours: number
  hourlyRate: number = 35

  calculateTeamLeaderSalary(hours: number): number {
    return hours * this.hourlyRate
  }
}