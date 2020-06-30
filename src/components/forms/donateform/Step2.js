import React, { Component, Fragment } from "react";
import Button from "../elements/Button";

export default class Step2 extends Component {
    
    render() {
        if (this.props.currentStep !== 2) {
            return null;
        }

        return (
            <Fragment>
                <h1>Now, we need to confirm your details.</h1>
                <br/>
                <h2>Firstly, are you donating:</h2>
                <br/>

                <Button
                    selected={this.props.userType === "individual"}
                    label="As an individual"
                    handleClick={() => this.props.handleChange("userType", "individual")}
                />
                <Button
                    selected={this.props.userType === "organisation"}
                    label="From an organisation / business"
                    handleClick={() => this.props.handleChange("userType", "organisation")}
                />
            </Fragment>
        );
    }
}