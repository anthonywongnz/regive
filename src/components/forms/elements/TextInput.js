import React, {Component} from "react";

/*
Props Required:
    name
    label
    placeholder
    value
    handleChange
*/

export default class TextInput extends Component {
    
    render() {
        return (
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={this.props.name}>
                    {this.props.label}
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={this.props.name}
                    name={this.props.name}
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}