
import './App.css';
import "./style.css";
import ConversionCurrencyFields from './CurrencyForm';
import CurrencyInputField from './InputField/InputField';

function App() {
    return (
        <div className="body">
            <form className="form">
                <fieldset className="form__fieldset">
                    <legend className="form__title">Currency Calculator</legend>
                    <ConversionCurrencyFields titleOfLine="Conversion from:"  />
                    <CurrencyInputField />
                    <ConversionCurrencyFields titleOfLine="Conversion to:" />
                    <p><span className="form__labelText">Converted amount:</span><strong className="form__result">N/A</strong></p>
                    <p className="form__annotation">Course from 9.09.2022</p>
                    <p className="form__annotation">*required fields</p>
                </fieldset>
            </form>
        </div>
    );
}

export default App;
