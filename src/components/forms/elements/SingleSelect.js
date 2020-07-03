import React, { Component } from 'react';

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
        console.log(this.props.value)
        return (
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={this.props.name}>
                {this.props.label}
            </label>
            <Select
                className="basic-select"
                classNamePrefix="select"
                placeholder={this.props.placeholder}
                name={this.props.name}
                options={this.props.options}
                value={this.props.value}
                onChange={(value) => this.props.handleChange(this.props.name, value.value)}
            />
            </div>
        );
    }
}