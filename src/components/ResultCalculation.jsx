import { calculateInvestmentResults, formatter } from "../util/investment"
export default function ResultCalculation({userInput}){
    
    const annualData = calculateInvestmentResults(userInput);
    
    const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;
    return(
        <>
        {annualData.map(data => 
        <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.valueEndOfYear - userInput.annualInvestment * data.year - initialInvestment)}</td>
            <td>{formatter.format(data.valueEndOfYear - (data.valueEndOfYear - userInput.annualInvestment * data.year - initialInvestment))}</td>
        </tr>
        )}
        </>

    )
}