import Payroll from "./Payroll";

const HOURLY_RATES = {
    developer: 40,
    teamLeader: 35,
    recruiter: 22,
};
const HIRE_BONUS = 500;

describe('Payroll', () => {
    it('set correct payment values', () => {
        const payroll = new Payroll();
        const developerSalary = payroll.calculateSalary('developer', 100);
        const teamLeaderSalary = payroll.calculateSalary('teamLeader', 80);
        const recruiterSalary = payroll.calculateSalary('recruiter', 90);
        const recruterSalaryWithBonus = payroll.calculateSalary('recruiter', 120);

        expect(developerSalary).toBe(100 * HOURLY_RATES.developer);
        expect(teamLeaderSalary).toBe(80 * HOURLY_RATES.teamLeader);
        expect(recruiterSalary).toBe(90 * HOURLY_RATES.recruiter);
        expect(recruterSalaryWithBonus).toBe(120 * HOURLY_RATES.recruiter + HIRE_BONUS);
    });
});
