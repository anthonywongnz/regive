import React, { Component, Fragment } from "react";
import TextInput from "../elements/TextInput";

export default class Step1 extends Component {
    constructor() {
        super()
    }

    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }

        return (
            <Fragment>
                <h1>Fantastic! Please list what are the items you are donating away.</h1>
                <TextInput
                    name="itemList"
                    label="Type in the things you are donating away:"
                    placeholder="Type in here as many items you are donating away. (e.g. plates; cultery; single bed; hangers) You can separate items with semicolons;"
                    value={this.props.itemList}
                    onChange={this.props.handleChange}
                />
            </Fragment>
        )
    }
}