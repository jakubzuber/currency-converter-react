
import { Main, Field, Title, Annotation } from "./styled"

const Form = ({ children, rateDate}) => (
    <Main>
        <Field>
            <Title>Currency Calculator</Title>
            {children}
            <Annotation>Conversion rate from {rateDate}</Annotation>
            <Annotation>*required fields</Annotation>
        </Field>
    </Main>
);

export default Form;