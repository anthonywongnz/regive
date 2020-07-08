import React, {Component} from "react";

export default class TextInput extends Component {
    
    render() {
        return (
            <div className="mb-6">
                <label className="block text-sm font-bold mb-2" htmlFor={this.props.name}>
                    <h2>{this.props.label}</h2>
                </label>
                <textarea
                    className="appearance-none border-2 border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    id={this.props.name}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    rows={3}
                    onChange={(event) => this.props.handleChange(event.target.name, event.target.value)}
                />
            </div>
        );
    }
}