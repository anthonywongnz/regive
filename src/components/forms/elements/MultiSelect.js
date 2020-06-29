import React, { Component } from 'react'
import Select from 'react-select'

/*
Props Required:
    name
    label
    placeholder
    options
    value
    handleChange
*/

export default class MultiSelect extends Component {
    
    render() {
        return (
            <Select
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder={this.props.placeholder}
                isMulti
                name={this.props.name}
                options={this.props.options}
                value={this.props.value}
                onChange={this.props.handleChange}
            />
        );
    }


}