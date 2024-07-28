import React from 'react';
import { formatter } from '../util/utils'; 

const InvestmentResults = ({ results }) => {
  return (
    <div>
      <h2>Resultados de la Inversión</h2>
      <table>
        <thead>
          <tr>
            <th>Año</th>
            <th>Interés Ganado</th>
            <th>Valor al Final del Año</th>
            <th>Inversión Anual</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentResults;
