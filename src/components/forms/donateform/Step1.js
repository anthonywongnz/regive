import React, { Component } from "react";

export default class Step1 extends Component {
    constructor() {
        super()

        this.placeholderText = "Type in here as many items you are donating away. (e.g. plates; cultery; single bed; hangers) You can separate items with semicolons;"
    }

    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }

        return (
            <div className="form-group">
                <h1>Fantastic! Please list what are the items you are donating away.</h1>
                <label htmlFor="itemList">Type in the things you are donating away:</label>
                <input
                    className="form-control"
                    id="itemList"
                    name="itemList"
                    type="text"
                    placeholder={this.placeholderText}
                    value={this.props.itemList}
                    onChange={this.props.handleChange}
                />
            </div>
        )
    }
}