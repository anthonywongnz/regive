import React, { Component } from "react";

export default class Step3 extends Component {
    constructor() {
        super();
    }


    nameInput = () => {
        return (
            <div>
                <label htmlFor="name">
                    {this.props.userType === 'individual' ? "Contact Name" : "Organisation/Business Name"}
                </label>
                <input
                    className="form-control"
                    id="contactName"
                    name="contactName"
                    type="text"
                    placeholder="First and Last Name"
                    value={this.props.userName}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }

    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }

        return (
            <div className="form-group">
                <h1>Now, we need to confirm your details.</h1>
                {this.nameInput()}
            </div>
        );
    }
}