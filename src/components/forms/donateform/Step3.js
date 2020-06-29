import React, { Component, Fragment } from "react";
import TextInput from "../elements/TextInput";

export default class Step3 extends Component {
    constructor() {
        super();
    }

    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }

        return (
            <Fragment>
                <h1>Now, we need to confirm your details.</h1>
                <TextInput
                    name="userName"
                    label={this.props.userType === 'individual' ? "Contact Name" : "Organisation/Business Name"}
                    placeholder="First and Last Name"
                    value={this.props.userName}
                    onChange={this.props.handleChange}
                />
                {
                    this.props.userType === 'individual' 
                    ? <TextInput
                        name="userPhone"
                        label="Contact Number"
                        placeholder="(+Area Code)-xxx-xxx-xxx"
                        value={this.props.userPhone}
                        onChange={this.props.handleChange}
                    />
                    : <TextInput
                        name="userIndustry"
                        label="Industry"
                        placeholder="Select An Industry"
                        value={this.props.userIndustry}
                        onChange={this.props.handleChange}
                    />
                }
                <TextInput 
                    name="userLocation"
                    label="Current Location"
                    placeholder="City, (State), Country"
                    value={this.props.userLocation}
                    onChange={this.props.handleChange}
                />
            </Fragment>
        );
    }
}