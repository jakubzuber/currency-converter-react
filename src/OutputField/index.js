
import "./style.css";

const Result = ({result}) => (
    <p>
        <span className="form__labelText">Converted amount:</span>
        <strong className="form__result">{result}</strong>
    </p>
);

export default Result;