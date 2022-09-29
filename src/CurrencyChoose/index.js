
import "./style.css"

const ConversionCurrencyFields = ({titleOfLine, currencyList, onChange}) => {

    const onChangeCurrency = (event) => {
        onChange(event.target.value)
    };

    return (
        <p>
            <label>
                <span className="input__labelText">{titleOfLine}</span>
                <select
                    className="input__CurrencyField"
                    value={currencyList.name}
                    onChange={onChangeCurrency}
                >
                    {currencyList.map(currency => (
                        <option key={currency.id}>{currency.name}</option>
                    ))}
                </select>
            </label>
        </p>
    )
};

export default ConversionCurrencyFields;