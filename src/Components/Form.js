import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";

import InputFormik from './InputFormik';
import TextareaFormik from './TextareaFormik';
import SelectFormik from './SelectFormik';
import Fields from '../Data/Fields';

const superagent = require('superagent');

/**
 * main Component
 */
class FormSurveys extends React.Component {
  /**
   * get object with initial values, Yup validators and elements JSX
   * return object {
   *  initials: Object
   *  validations: Object
   *  elements: Array<elements>
   * }
   */
  getFields() {
    let objInitials = {};
    let objValidations = {};
    let elements = Fields.map((field, i) => {
        objInitials[field.name] = field.value ? field.value: '';
        objValidations[field.name] = this.getValidations(field);
        switch(field.type){
          case 'textarea':
            return <TextareaFormik key={i} name={field.name} label={field.label} placeholder={field.placeholder ? field.placeholder : ''}/>;
          case 'select':
            return <SelectFormik key={i} name={field.name} label={field.label} options={field.options}/>;
          default:
            return <InputFormik key={i} name={field.name} label={field.label} type={field.subtype}/>;
        }
    });
    return {
      initials: objInitials,
      validations: objValidations,
      elements: elements
    }
  }
  /**
   * get Yup validators
   * @param {Object} field
   * return Yup object 
   */
  getValidations(field) {
    let validations;
    if(field.type === 'input' || field.type === 'textarea'){
      validations = Yup.string();
      if(field.required) {
        validations = validations.required("Dato requerido");
      }
      if(field.subtype === 'email') {
        validations = validations.email("Email con error");
      }
    } else {
      validations = Yup.number().moreThan(0, "Dato requerido");
    }
    
    return validations;
  }

  render() {
    const fieldsData = this.getFields();
    console.log(fieldsData);

    let initialValues = { ...fieldsData.initials };
    let validationSchema = Yup.object().shape(fieldsData.validations);
    let onSubmit = (values, { setSubmitting }) => {
      superagent.post('https://apitest.com/survey')
                .send(values)
                .end((err, res) => {
                    alert('Información enviada: '+ JSON.stringify(values));
                    setSubmitting(false);
                });
    };

    return (
      <>
        <div className="left"></div>
        <div className="container">
            <h1 className="title">Encuesta</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(e) => {
                  return (
                    <Form name="contact" method="post" onSubmit={e.handleSubmit}>
                        {fieldsData.elements}
                        <button type="submit" disabled={e.isSubmitting || !e.isValid || !Object.keys(e.touched).length}>
                            {e.isSubmitting ? `Submiting...` : `Submit`}
                        </button>
                    </Form>
                  );
              }}
          </Formik>
        </div>
        <div className="right"></div>
      </>
    );
  }
}

export default FormSurveys;