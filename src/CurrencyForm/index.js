
import "./style.css"

const ConversionCurrencyFields = ({titleOfLine}) => (
    <p>
        <label>
            <span className="form__labelText">{titleOfLine}</span>
            <select className="form__field">
                <option value="pln">PLN</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="hkd">HKD</option>
            </select>
        </label>
    </p>
);

export default ConversionCurrencyFields;