
export default function UserInput({onChangeInput, userInput}){

    {/* going with single useState with identifier instead of state per field
    const [initialInvestment, setInitialInvestment] = useState('');
    const [annualInvestment, setAnnualInvestment] = useState('');
    const [expectedReturn, SetExpectedReturn] = useState('');
    const [duration, setDuration] = useState('')
    */}





    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                <label className="initial-investment">
                    Initial Investment
                </label>
                    <input type="number" 
                    id="initial-investment" 
                    required
                    value = {userInput.initialInvestment}
                    onChange={(event) => onChangeInput('initialInvestment', event.target.value)}
                    />
                </p>

                <p>
                <label className="annual-investment">
                    Annual Investment
                </label>
                    <input type="number" 
                    id="annual-investment" 
                    required
                    value = {userInput.annualInvestment}
                    onChange={(event) => onChangeInput('annualInvestment', event.target.value)}
                    />
                </p>
                
            </div>
            <div className="input-group">
                <p>
                <label className="expected-return">
                    Expected Return
                    </label>
                    <input type="number" 
                    id="expected-return" 
                    required
                    value = {userInput.expectedReturn}
                    onChange={(event) => onChangeInput('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                <label className="duration">
                    Duration
                    </label>
                    <input type="number" 
                    id="duration" 
                    required
                    value = {userInput.duration}
                    onChange={(event) => onChangeInput('duration', event.target.value)}
                    />
                
                </p>
            </div>
        </section>
    )
}