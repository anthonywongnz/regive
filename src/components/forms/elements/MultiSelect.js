import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable'

export default class MultiSelect extends Component {

    render() {
        return (
            <div className="mb-6">
                <label className="block text-sm font-bold mb-2 p-2" htmlFor={this.props.name}>
                    <p>{this.props.label}</p>
                </label>
                <CreatableSelect
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder={this.props.placeholder}
                    isMulti
                    name={this.props.name}
                    options={this.props.options}
                    value={this.props.value}
                    onChange={(value) => this.props.handleChange(this.props.name, value)}
                />
            </div>
        );
    }


}