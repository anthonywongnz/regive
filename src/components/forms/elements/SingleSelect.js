import React, { Component, Fragment } from 'react';

import Select from 'react-select';

/*
Props Required:
    name
    label
    placeholder
    value
    onChange
*/

export default class SingleSelect extends Component {
  render() {
    return (
      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={this.props.placeholder}
          name={this.props.name}
          options={this.props.options}
        />
      </Fragment>
    );
  }
}