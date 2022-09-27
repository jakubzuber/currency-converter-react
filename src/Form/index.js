
import "./style.css"

const Form = ({ children }) => (
    <form className="body">
        <fieldset className="form__fieldset">
            <legend className="form__title">Currency Calculator</legend>
            {children}
            <p className="form__annotation">Course from 9.09.2022</p>
            <p className="form__annotation">*required fields</p>
        </fieldset>
    </form>
);

export default Form;