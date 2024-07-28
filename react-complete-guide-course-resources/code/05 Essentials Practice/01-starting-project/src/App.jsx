import React, { useState } from 'react';
import InvestmentForm from '../src/components/InvestmentForm'
import InvestmentResults from '../src/components/InvestmentResults'
import { calculateInvestmentResults } from '../src/util/utils'; // Asegúrate de tener la función calculateInvestmentResults en un archivo utils.js

const App = () => {
  const [investmentResults, setInvestmentResults] = useState([]);

  const handleCalculate = (investmentData) => {
    const results = calculateInvestmentResults(investmentData);
    setInvestmentResults(results);
  };

  return (
    <div>
      <h1>Calculadora de Inversión</h1>
      <InvestmentForm onCalculate={handleCalculate} />
      {investmentResults.length > 0 && <InvestmentResults results={investmentResults} />}
    </div>
  );
};

export default App;
