import React, { Component, Fragment } from "react";
import TextInput from "../elements/TextInput";
import SingleSelect from "../elements/SingleSelect";
import FormHeader from "../elements/FormHeader";

//should be serverside
const industries = [
    { value: 'Accounting', label: 'Accounting' },
    { value: 'Administration & Office Support', label: 'Administration & Office Support' },
    { value: 'Avertising, Arts & Media', label: 'Avertising, Arts & Media' },
    { value: 'Banking & Finacial Services', label: 'Banking & Finacial Services' },
    { value: 'Call Centre & Customer Service', label: 'Call Centre & Customer Service' }
]

export default class Step3 extends Component {

    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }

        return (
            <Fragment>
                <FormHeader text="Now, we need to confirm your details." />
                <TextInput
                    name="userName"
                    label={this.props.userType === 'individual' ? "Contact Name" : "Organisation/Business Name"}
                    placeholder={this.props.userType === 'individual' ? "First and Last Name" : "Enter Name of Organisation"}
                    value={this.props.userName}
                    handleChange={this.props.handleChange}
                />
                {
                    this.props.userType === 'individual' 
                    ? <TextInput
                        name="userPhone"
                        label="Contact Number"
                        placeholder="(+Area Code)-xxx-xxx-xxx"
                        value={this.props.userPhone}
                        handleChange={this.props.handleChange}
                    />
                    : <SingleSelect
                        name="userIndustry"
                        label="Industry"
                        placeholder="Select An Industry"
                        options={industries}
                        value={this.props.userIndustry.value}
                        handleChange={this.props.handleChange}
                    />
                }
                <TextInput 
                    name="userLocation"
                    label="Current Location"
                    placeholder="City, (State), Country"
                    value={this.props.userLocation}
                    handleChange={this.props.handleChange}
                />
            </Fragment>
        );
    }
}