import React, { useState } from 'react';

const InvestmentForm = ({ onCalculate }) => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(5);
  const [duration, setDuration] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ initialInvestment, annualInvestment, expectedReturn, duration });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Inversión Inicial:</label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Inversión Anual:</label>
        <input
          type="number"
          value={annualInvestment}
          onChange={(e) => setAnnualInvestment(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Tasa de Retorno Esperada (%):</label>
        <input
          type="number"
          value={expectedReturn}
          onChange={(e) => setExpectedReturn(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Duración (años):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
      </div>
      <button type="submit">Calcular</button>
    </form>
  );
};

export default InvestmentForm;


