import React, { Component, Fragment } from "react";
import Button from "../elements/Button";
import FormHeader from "../elements/FormHeader";

export default class Step2 extends Component {
    
    render() {
        if (this.props.currentStep !== 2) {
            return null;
        }

        return (
            <>
                <FormHeader
                    text="Good stuff! Now we need some photos of your items that are listed for donation."
                />
                <p className="color-grey">
                (we require at least 1 image)*
                </p>
                <a className="text-left" style={{ color: "#4A3B8D", marginBottom: 16}}>
                    edit
                </a>
                <div style={{ display: 'grid', columnGap: 9, gridGap: 9, gridTemplateColumns: ' 0.5fr 0.5fr'}}>
                    <div style={{  minHeight: 130, background: "#A2A0CE" }}></div>
                    <div style={{  minHeight: 130, background: "#A2A0CE" }}></div>
                    <div style={{  minHeight: 130, background: "#A2A0CE" }}></div>
                    <div style={{  minHeight: 130, background: "#A2A0CE" }}></div>
                </div>
            </>
        );
    }
}