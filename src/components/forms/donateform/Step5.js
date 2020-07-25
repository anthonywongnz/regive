import React, { Component, Fragment } from "react";
import Button from "../elements/Button";
import TextArea from "../elements/TextArea";
import FormHeader from "../elements/FormHeader";

export default class Step5 extends Component {
    constructor() {
        super();
        this.state = {
            hasMessage: false
        }
    }



    render() {
        if (this.props.currentStep !== 5) {
            return null;
        }

        return (
            <Fragment>
                <FormHeader text="Almost done!"/>
                <FormHeader text="Do you have a message to share with your donations?"/>

                {this.state.hasMessage
                    ?
                    <Fragment>
                        <TextArea
                            name="donationMessage"
                            label="Type in your message below"
                            placeholder="e.g. I've only had these items for 3 months and I'm moving again. I'd rather not see it thrown as waste. Hopefully someone would find these helpful!"
                            value={this.props.donationMessage}
                            handleChange={this.props.handleChange}
                        />
                    </Fragment>
                    :
                    <Fragment>
                        <Button
                            label="Yes"
                            handleClick={() => {
                                this.setState({ hasMessage: true })
                            }}
                        />
                        <Button
                            label="No"
                            handleClick={() => {
                                console.log("Nope");
                            }}
                        />
                    </Fragment>
                }
            </Fragment>
        );
    }
}