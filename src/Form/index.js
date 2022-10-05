
import "./style.css"

const Form = ({ children, rateDate}) => (
    <form className="body">
        <fieldset className="form__fieldset">
            <legend className="form__title">Currency Calculator</legend>
            {children}
            <p className="form__annotation">Conversion rate from {rateDate}</p>
            <p className="form__annotation">*required fields</p>
        </fieldset>
    </form>
);

export default Form;