
import './App.css';
import "./style.css";

function App() {
  return (
    <div className="body">
    <form className="form js-form">
        <fieldset className="form__fieldset">
            <legend className="form__title">Currency Calculator</legend>
            <p>
                <label>
                    <span className="form__labelText">Conversion from:</span>
                    <select name="currencyInput" required className="js-currencyInput form__field">
                        <option value="pln">PLN</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                        <option value="hkd">HKD</option>
                    </select>
                </label>
            </p>
            
                <label>
                    <span className="form__labelText">Amount:*</span><input type="number"  className="js-amount form__field" required step="1" min="10" autoFocus placeholder="Provide amount"/>
                </label>
            <p>
                <label><span className="form__labelText">Conversion to:</span>
                    <select name="value" required className="js-currencyOutput form__field">
                        <option value="pln">PLN</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                        <option value="hkd">HKD</option>
                    </select>
                </label>
            </p>
            <p><span className="form__labelText">Converted amount:</span><strong className="js-result form__result">N/A</strong></p>
            <p className="form__annotation">Course from 9.09.2022</p>
            <p className="form__annotation">*required fields</p>
        </fieldset>
    </form>
    </div>
  );
}

export default App;
