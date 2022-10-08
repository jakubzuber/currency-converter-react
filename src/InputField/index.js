import { InputTitle, InputField } from "./styled"

const CurrencyInputField = ({ onChange, inValue }) => {

    const changeInValue = (event) => {
        onChange(event.target.value)
    };

    return (
        <label>
            <InputTitle>
                Amount:*
            </InputTitle>
            <InputField
                autoFocus={true}
                placeholder="Provide amount"
                type="number"
                value={inValue}
                onChange={changeInValue}
            />
        </label>
    );
};

export default CurrencyInputField;