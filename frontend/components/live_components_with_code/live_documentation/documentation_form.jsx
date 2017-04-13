import React from 'react';
import FlatButtonFormType from './individual_component_forms/flat_button_form_type';
import CircularProgressFormType from './individual_component_forms/circular_progress_form_type';
import DatePickerFormType from './individual_component_forms/date_picker_form_type';

class DocumentationForm extends React.Component {
  constructor(props) {
    super(props);
    this.correctForm = this.correctForm.bind(this);
  }

  render() {
    return(
      <div>
        { this.correctForm() }
      </div>
    );
  }

  correctForm() {
    const {componentName, currentTab } = this.props;
    switch(componentName) {
      case "FlatButton":
        return <FlatButtonFormType currentTab={currentTab}/>;
      case "CircularProgress":
        return <CircularProgressFormType currentTab={currentTab}/>;
      case "DatePicker":
        return <DatePickerFormType currentTab={currentTab}/>;
      default:
        return <div></div>;
    }
  }
}

export default DocumentationForm;
