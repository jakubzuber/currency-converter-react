
import './App.css';
import "./style.css";
import ConversionCurrencyFields from './CurrencyChoose';
import CurrencyInputField from './InputField';
import Form from './Form';
import Result from './OutputField'
import { useEffect, useState } from 'react';

const API_URL = "http://api.nbp.pl/api/exchangerates/tables/a/last/1/" 

function App() {

     const [options, setOptions] = useState ([])
  
      useEffect(() => {
          fetch(API_URL)
          .then(res => res.json())
          .then(data => {
            setOptions(data[0].rates)
            setInCurrency(data[0].rates[0].code)
            setOutCurrency(data[0].rates[0].code)
          })}, [])

    const [inCurrency, setInCurrency] = useState();
    const [inValue, setInValue] = useState(0);
    const [outCurrency, setOutCurrency] = useState();

    const onChangeInCurrency = (newInCurrency) => {
        setInCurrency(newInCurrency)
    };

    const changeInValue = (newValue) => {
        setInValue(newValue)
    };

    const onChangeOutCurrency = (newOutCurrency) => {
        setOutCurrency(newOutCurrency)
    };
    
    let result = "";

    const calculations = () => {
        if (inCurrency != null && outCurrency != null) {
            let inRate = options.find(({code}) => code === inCurrency).mid
            let outRate = options.find(({code}) => code === outCurrency).mid
            let inSideResult = +inValue * inRate
            result = (inSideResult / outRate).toFixed(2)
        };
    };

    calculations();

    return (
        <Form>
            <ConversionCurrencyFields
                titleOfLine="Conversion from:"
                options={options}
                onChange={onChangeInCurrency}
            />
            <CurrencyInputField
                inValue={inValue}
                onChange={changeInValue}
            />
            <ConversionCurrencyFields
                titleOfLine="Conversion to:"
                options={options}
                onChange={onChangeOutCurrency}
            />
            <Result result={result} />
        </Form>
    );
}

export default App;
