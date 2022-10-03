import "./style.css"

const CurrencyInputField = ({ onChange, inValue }) => {

    const changeInValue = (event) => {
        onChange(event.target.value)
    };

    return (
        <label>
            <span className="input__label">
                Amount:*
            </span>
            <input
                autoFocus={true}
                className="input__ValueField"
                placeholder="Provide amount"
                type="number"
                value={inValue}
                onChange={changeInValue}
            />
        </label>
    );
};

export default CurrencyInputField;