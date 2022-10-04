
import "./style.css"

const ConversionCurrencyFields = ({titleOfLine, options, onChange}) => {
    const onChangeCurrency = (event) => {
        onChange(event.target.value)
    };
    return (
        <p>
            <label>
                <span className="input__labelText">{titleOfLine}</span>
                <select
                    className="input__CurrencyField"
                    value={options.currency}
                    onChange={onChangeCurrency}
                >
                    {options.map(currency => (
                        <option key={currency.currency}>{currency.code+ " // " + currency.currency}</option>
                    ))}
                </select>
            </label>
        </p>
    )
};

export default ConversionCurrencyFields;