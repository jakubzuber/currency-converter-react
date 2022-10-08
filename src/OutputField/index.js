
import { ResultField } from "./styled";

const Result = ({ result }) => (
    <p>
        <span>Converted amount:</span>
        <ResultField>{result}</ResultField>
    </p>
);

export default Result;