
import './App.css';
import "./style.css";
import ConversionCurrencyFields from './CurrencyChoose';
import CurrencyInputField from './InputField';
import Form from './Form';
import Result from './OutputField'

function App() {
    return (
        <Form>
            <ConversionCurrencyFields titleOfLine="Conversion from:" />
            <CurrencyInputField />
            <ConversionCurrencyFields titleOfLine="Conversion to:" />
            <Result />
        </Form>
    );
}

export default App;
