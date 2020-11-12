import React from 'react';
import { Field, ErrorMessage } from 'formik';
/**
 * textarea component
 * return textarea formik component
 */
class TextareaFormik extends React.Component {
  render() {
    return (
        <div className="field-container-textarea">
            <label className="field-label" htmlFor={this.props.name}>
                {this.props.label}
                <Field 
                  name={this.props.name} 
                  as="textarea"  
                  className="form-textarea"
                  placeholder={this.props.placeholder}
                />
            </label>
            <ErrorMessage name={this.props.name}>{(msg) => <p className="error-message">{msg}</p>}</ErrorMessage>
        </div>
    );
  }
}

export default TextareaFormik;