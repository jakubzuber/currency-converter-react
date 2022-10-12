import "./style.css";
import ConversionCurrencyFields from './CurrencySelector';
import CurrencyInputField from './InputField';
import Form from './Form';
import Result from './OutputField'
import Clock from "./Clock";
import Download from "./DownloadData"
import Error from "./Error"
import { useData } from "./useData";



function App() {

    const [
        error,
        options,
        onChangeInCurrency,
        inValue,
        changeInValue,
        onChangeOutCurrency,
        result,
        rateDate,
    ] = useData()


    return (
        <Form>
            <Clock />
            {(error === "") && (
                <Download
                />
            )}

            {(error === "dataLoadingFaild") && (
                <Error/>
            )}

            {(error === "done") && (
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
