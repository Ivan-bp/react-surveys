import React from 'react';
import { Field, ErrorMessage } from 'formik';
/**
 * input component
 * return input formik element
 */
class InputFormik extends React.Component {
  render() {
    return (
        <div className="field-container">
            <label className="field-label" htmlFor={this.props.name}>
                {this.props.label}
                <Field
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                />
            </label>
            <ErrorMessage name={this.props.name}>{(msg) => <p className="error-message">{msg}</p>}</ErrorMessage>
        </div>
    );
  }
}

export default InputFormik;