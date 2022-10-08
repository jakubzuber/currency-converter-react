import { Title, Input } from "./styled"

const ConversionCurrencyFields = ({ titleOfLine, options, onChange }) => {
    const onChangeCurrency = (event) => {
        onChange(event.target.value)
    };
    return (
        <p>
            <label>
                <Title>{titleOfLine}</Title>
                <Input
                    value={options.currency}
                    onChange={onChangeCurrency}
                >
                    {options.map(currency => (
                        <option key={currency.currency}>{currency.code + " // " + currency.currency}</option>
                    ))}
                </Input>
            </label>
        </p>
    )
};

export default ConversionCurrencyFields;