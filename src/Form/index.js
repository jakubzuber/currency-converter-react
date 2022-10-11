
import { Main, Field, Title } from "./styled"

const Form = ({ children}) => (
    <Main>
        <Field>
            <Title>Currency Calculator</Title>
            {children}
        </Field>
    </Main>
);

export default Form;