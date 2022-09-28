
import './App.css';
import "./style.css";
import ConversionCurrencyFields from './CurrencyChoose';
import CurrencyInputField from './InputField';
import Form from './Form';
import Result from './OutputField'
import { useState } from 'react';

function App() {
    const [currencyList, setCurrencyList] = useState ([
        {id: 1, name: "PLN", rate: 1},
        {id: 2, name: "EUR", rate: 4.9098},
        {id: 3, name: "GBP", rate: 5.4185},
        {id: 4, name: "HKD", rate: 0.5937}
    ]);

    

    return (
        <Form>
            <ConversionCurrencyFields
                titleOfLine="Conversion from:"
                currencyList={currencyList}    
            />
            <CurrencyInputField />
            <ConversionCurrencyFields
                titleOfLine="Conversion to:"
                currencyList={currencyList}  
            />
            <Result />
        </Form>
    );
}

export default App;
