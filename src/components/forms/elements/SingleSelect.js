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
        return (
            <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor={this.props.name}>
                <h2>{this.props.label}</h2>
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