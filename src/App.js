
import './App.css';
import "./style.css";
import ConversionCurrencyFields from './CurrencyChoose';
import CurrencyInputField from './InputField';
import Form from './Form';
import Result from './OutputField'
import { useState } from 'react';

function App() {
    const currencyList = [
        { id: 1, name: "PLN", rate: 1 },
        { id: 2, name: "EUR", rate: 4.9098 },
        { id: 3, name: "GBP", rate: 5.4185 },
        { id: 4, name: "HKD", rate: 0.5937 }
    ];
    const [inCurrency, setInCurrency] = useState("PLN")
    const [inValue, setInValue] = useState("");
    const [outCurrency, setOutCurrency] = useState("PLN")

    const onChangeInCurrency = (newInCurrency) => {
        setInCurrency(newInCurrency)
    }

    const changeInValue = (newValue) => {
        setInValue(newValue)
    }

    const onChangeOutCurrency = (newOutCurrency) => {
        setOutCurrency(newOutCurrency)
    };


    
    console.log(inCurrency)
    console.log(inValue)
    console.log(outCurrency)

    return (
        <Form>
            <ConversionCurrencyFields
                titleOfLine="Conversion from:"
                currencyList={currencyList}
                onChange={onChangeInCurrency}
            />
            <CurrencyInputField
            inValue={inValue}
            onChange={changeInValue}
            />
            <ConversionCurrencyFields
                titleOfLine="Conversion to:"
                currencyList={currencyList}
                onChange={onChangeOutCurrency}
            />
            <Result />
        </Form>
    );
}

export default App;
