import React, { Component, Fragment } from "react";
import TextArea from "../elements/TextArea";
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
            <>
                <FormHeader text="Please add a brief note about your items being listed as a donation on Regive." />
                <p style={{ marginBottom: 8}}>
                    Type in your note below:
                </p>
                <textarea
                    className="appearance-none border-2 border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    name="Donation Message"
                    style={{ minHeight: 188 }}
                    placeholder="How long have you had these items? Keep it short and to the point, as it helps others know why you are giving the items away. :) (maximum 300 characters)"
                    value={this.props.donationMessage}
                    rows={3}
                    onChange={(event) => this.props.handleChange('donationMessage', event.target.value)}
                />
            </>
        );
    }
}