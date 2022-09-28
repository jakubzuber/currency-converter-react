
import "./style.css"

const ConversionCurrencyFields = ({titleOfLine, currencyList}) => (
    <p>
        <label>
            <span className="input__labelText">{titleOfLine}</span>
            <select className="input__CurrencyField">
                {currencyList.map(currency => (
                    <option key={currency.id}>{currency.name}</option>
                ))}
            </select>
        </label>
    </p>
);

export default ConversionCurrencyFields;