import { useEffect, useState } from 'react';

export const useData = () => {
    const API_URL = "https://api.nbp.pl/api/exchangerates/tables/a/last/1/"

    const [options, setOptions] = useState([])
    useEffect(() => {
        const fetchRates = () => {
            fetch(API_URL)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(res.statusText);
                    }
                    setError("done")
                    return res;
                })
                .then(res => res.json())
                .then(data => {
                    const firstCurrency = (`${data[0].rates[0].code} // ${data[0].rates[0].currency}`)
                    setOptions(data[0].rates)
                    setInCurrency(firstCurrency)
                    setOutCurrency(firstCurrency)
                    setDate(data[0].effectiveDate)
                })
                .catch(() => setError("dataLoadingFaild"))
        }
        setTimeout(fetchRates, 2 * 1000)
    }, [])

    const [error, setError] = useState("")
    const [inCurrency, setInCurrency] = useState(null);
    const [inValue, setInValue] = useState(0);
    const [outCurrency, setOutCurrency] = useState(null);
    const [date, setDate] = useState();

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

    return [error, options, onChangeInCurrency, inValue, changeInValue, onChangeOutCurrency, result, rateDate]
}