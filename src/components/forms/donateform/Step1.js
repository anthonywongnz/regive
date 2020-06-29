import React, { Component, Fragment } from "react";
import MultiSelect from "../elements/MultiSelect";

//should be serverside
const options = [
    { value: 'forks', label: 'Forks' },
    { value: 'cooking dishes', label: 'Cooking Dishes' },
    { value: 'hangers', label: 'Hangers' }
  ]
  

export default class Step1 extends Component {

    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }

        return (
            <Fragment>
                <h1>Fantastic! Please list what are the items you are donating away.</h1>

                <MultiSelect
                    name="itemList"
                    label="Type in the things you are donating away:"
                    placeholder="Type in here as many items you are donating away. (e.g. plates; cultery; single bed; hangers) You can separate items with semicolons;"
                    options={options}
                    value={this.props.itemList}
                    handleChange={this.props.handleChange}
                />
            </Fragment>
        )
    }
}