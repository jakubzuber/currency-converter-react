
import { Main, Field, Title } from "./styled"

const Form = ({ children, rateDate}) => (
    <Main>
        <Field>
            <Title>Currency Calculator</Title>
            {children}
        </Field>
    </Main>
);

export default Form;