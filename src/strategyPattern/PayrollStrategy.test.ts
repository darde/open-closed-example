import Developer from "./Developer"
import TeamLeader from "./TeamLeader"
import Recruiter from './Recruiter'
import Payroll from "./Payroll"

const HOURLY_RATES = {
  developer: 40,
  teamLeader: 35,
  recruiter: 22,
}

const HIRE_BONUS = 500

describe('Payroll', () => {
  it('calculates the developer salary correctly', () => {
    const payroll = new Payroll(new Developer())
    const developerSalary = payroll.calculateSalary(10)
    
    expect(developerSalary).toBe(10 * HOURLY_RATES.developer);
  })

  it('calculates the team leader salary correctly', () => {
    const payroll = new Payroll(new TeamLeader())
    const teamLeaderSalary = payroll.calculateSalary(10)
    
    expect(teamLeaderSalary).toBe(10 * HOURLY_RATES.teamLeader);
  })

  it('calculates the recruiter salary correctly', () => {
    const payroll = new Payroll(new Recruiter())
    const recruiterSalary = payroll.calculateSalary(10)
    
    expect(recruiterSalary).toBe(10 * HOURLY_RATES.recruiter);
  })

  describe('when recruiter works more than 100 hours', () => {
    it('should receives a extra usd 500,00 bonus', () => {
      const payroll = new Payroll(new Recruiter())
      const recruiterSalary = payroll.calculateSalary(120)
      
      expect(recruiterSalary).toBe(HOURLY_RATES.recruiter * 120 + HIRE_BONUS);
    })
  })
})