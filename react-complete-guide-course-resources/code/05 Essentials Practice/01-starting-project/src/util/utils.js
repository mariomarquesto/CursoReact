export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }) {
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      annualData.push({
        year: i + 1, // identificador del año
        interest: interestEarnedInYear, // cantidad de interés ganado en este año
        valueEndOfYear: investmentValue, // valor de la inversión al final del año
        annualInvestment: annualInvestment, // inversión agregada en este año
      });
    }
  
    return annualData;
  }
  
  export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  