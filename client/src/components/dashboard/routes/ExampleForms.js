import React from 'react';
import {Form, Control, Errors} from 'react-redux-form';
import {connect} from 'react-redux';
import TextInput from '../components/TextInput';

const mapStateToProps = state => {
  console.log("state LOG", state);
  return {user: state.exampleForm.user}
};

class ExampleForms extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(values) {
    console.log('values handleChange LOG', values);
  }

  render() {
    console.log("this.props ExampleForms LOG", this.props);
    const required = value => value && value.length;
    return (
      <div className="content">
        <Form
          model="userForm"
          onSubmit={values => this.handleSubmit(values)}
        >
            <Control.text
              model=".username" component={TextInput} placeholder="Placeholder" validators={{required}}
              validateOn="change" mapProps={{allProps: (props) => props}}
            />
            <Errors
              model=".username"
              show="touched"
              messages={{
                required: 'Please provide an email address.',
              }}
            />
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ExampleForms);
