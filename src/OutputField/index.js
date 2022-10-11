
import { ResultField, Annotation } from "./styled";

const Result = ({ result, rateDate }) => (
    <>
        <span>Converted amount:</span>
        <ResultField>{result}</ResultField>
        <Annotation>Rates are downloaded from side of National Bank in Poland</Annotation>
        <Annotation>Conversion rate from {rateDate}</Annotation>
        <Annotation>*required fields</Annotation>
        <Annotation>Announcement of new courses are everyday between 11:45 am and 0:15 pm polish time</Annotation>
    </>
);

export default Result;