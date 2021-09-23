import Developer from "./Developer"
import TeamLeader from "./TeamLeader";
import Recruiter from "./Recruiter";

export default class Payroll {
  calculateSalary(employee: String, hours: number,): number {
    if (employee === 'developer') {
      const salary = new Developer().calculateSalary(hours)
      return salary
    } else if (employee === 'teamLeader') {
      const salary = new TeamLeader().calculateTeamLeaderSalary(hours)
      return salary
    } else if (employee === 'recruiter') {
      const salary = new Recruiter().calculateTotalSalary(hours);
      return salary
    }
    return 0
  }
}