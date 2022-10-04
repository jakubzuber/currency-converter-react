
import "./style.css"

const Form = ({ children, rateDate, renderDate, renderTime }) => (
    <form className="body">
        <fieldset className="form__fieldset">
            <legend className="form__title">Currency Calculator</legend>
            <p className="form_dateTime">Current date: {renderDate}</p>
            <p className="form_dateTime">Current hour: {renderTime}</p>
            {children}
            <p className="form__annotation">Conversion rate from {rateDate}</p>
            <p className="form__annotation">*required fields</p>
        </fieldset>
    </form>
);

export default Form;