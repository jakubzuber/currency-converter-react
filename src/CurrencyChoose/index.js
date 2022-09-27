
import "./style.css"

const ConversionCurrencyFields = ({titleOfLine}) => (
    <p>
        <label>
            <span className="input__labelText">{titleOfLine}</span>
            <select className="input__CurrencyField">
                <option value="pln">PLN</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="hkd">HKD</option>
            </select>
        </label>
    </p>
);

export default ConversionCurrencyFields;