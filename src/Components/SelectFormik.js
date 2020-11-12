import React from 'react';
import { Field, ErrorMessage } from 'formik';
/**
 * select component
 * return select formik component
 */
class SelectFormik extends React.Component {
  render() {
    let options = this.props.options.map((option, i) => {
        return <option 
                    key={i}
                    value={option.value}
                >
                    {option.text}
                </option>
    });

    return (
        <div className="field-container">
            <label className="field-label" htmlFor={this.props.name}>
                {this.props.label}
                <Field 
                    name={this.props.name} 
                    as="select" 
                    className="my-select">
                    <option value="0"></option>
                    {options}
                </Field>
            </label>
            <ErrorMessage name={this.props.name}>{(msg) => <p className="error-message">{msg}</p>}</ErrorMessage>
        </div>
    );
  }
}

export default SelectFormik;