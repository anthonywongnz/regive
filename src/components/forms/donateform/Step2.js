import React, { Component } from "react";

export default class Step2 extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null;
        }

        return (
            <div className="form-group" >
                <h1>Now, we need to confirm your details.</h1>
                <br/>
                <h2>Firstly, are you donating:</h2>
                <br/>

                <input 
                    type="radio" 
                    value="individual"
                    name="userType"
                    checked={this.props.userType === "individual"}
                    onChange={this.props.handleChange}
                />
                <label htmlFor="individual"> As an individual</label>
                <br />
                <input 
                    type="radio" 
                    value="organisation" 
                    name="userType" 
                    checked={this.props.userType === "organisation"}
                    onChange={this.props.handleChange}>
                </input>
                <label htmlFor="organisation"> From an organisation / business</label>
            </div>
        );
    }
}