import "./style.css"

const CurrencyInputField = () => (
    <label>
        <span className="input__label">
            Amount:*
        </span>
        <input
            className="input__ValueField"
            placeholder="Provide amount"
        />
    </label>
);

export default CurrencyInputField;