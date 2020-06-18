import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const FormField = ({ name, type, labelText }) => (
  <div>
    <label htmlFor={name}>
      {labelText}
      <Field name={name} type={type} />
    </label>
    <ErrorMessage name={name} />
  </div>
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default FormField;
