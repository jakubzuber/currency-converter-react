import "./style.css";
import ConversionCurrencyFields from './CurrencySelector';
import CurrencyInputField from './InputField';
import Form from './Form';
import Result from './OutputField'
import Clock from "./Clock";
import { useEffect, useState } from 'react';
import Loading from "./LoadingsAndErrors"

const API_URL = "https://api.nbp.pl/api/exchangerates/tables/a/last/1/"
function App() {
    const [options, setOptions] = useState([])
    useEffect(() => {
        const fetchRates = () => {
            fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setOptions(data[0].rates)
                setInCurrency(`${data[0].rates[0].code} // ${data[0].rates[0].currency}`)
                setOutCurrency(`${data[0].rates[0].code} // ${data[0].rates[0].currency}`)
                setDate(data[0].effectiveDate)
            })
            .catch(error => console.error(error))
        }
        setTimeout(fetchRates, 2 * 1000)
    }, [])


    const [inCurrency, setInCurrency] = useState(null);
    const [inValue, setInValue] = useState(0);
    const [outCurrency, setOutCurrency] = useState(null);
    const [date, setDate] = useState();

    console.log(inCurrency)
    console.log(outCurrency)


    const onChangeInCurrency = (newInCurrency) => {
        setInCurrency(newInCurrency)
    };

    const changeInValue = (newValue) => {
        if (newValue >= 0) {
            setInValue(newValue)
        };
        return
    };

    const onChangeOutCurrency = (newOutCurrency) => {
        setOutCurrency(newOutCurrency)
    };

    let result = "";
    let rateDate = "";

    const calculations = () => {
        if (inCurrency != null && outCurrency != null) {
            let inRate = options.find(({ code, currency }) => (`${code} // ${currency}`) === inCurrency).mid;
            let outRate = options.find(({ code, currency }) => (`${code} // ${currency}`) === outCurrency).mid;
            let fromInRateToOutRate = +inValue * inRate;
            result = (fromInRateToOutRate / outRate).toFixed(2);
            rateDate = date;
        };
    };

    calculations();

    return (
        <Form>
            <Clock />
            {(inCurrency === null || outCurrency === null) && (
                <Loading/>
            )}
            {(inCurrency !== null || outCurrency !== null) && (
                <>
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
                    <Result
                        result={result}
                        rateDate={rateDate}
                    />
                </>
            )}
        </Form>
    );
}

export default App;
