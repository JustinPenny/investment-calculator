import ResultCalculation from "./ResultCalculation"

export default function Result({userInput}){
    
    //TODO: lift state so result of field entry can be passed to investments and calculated
    return(
        <table id="result">
                <thead>
                    <tr>
                        <th>
                            Year 
                        </th>
                        
                        <th>
                            Investment Value
                        </th>

                        <th>
                            Interest (Year) 
                        </th>

                        <th>
                            Total Interest 
                        </th>

                        <th>
                        Invested Capital 
                        </th>
                    </tr>
                    
                </thead>
            <tbody>
            <ResultCalculation userInput={userInput}/>
            </tbody>
        </table>

    )
}