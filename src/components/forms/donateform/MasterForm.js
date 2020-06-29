import React, { Component } from "react";
import Step1 from './Step1';
import Step2 from "./Step2";
import Step3 from "./Step3";

export default class MasterForm extends Component {
    constructor(props) {
        super(props)
        // Set the initial input values
        this.state = {
            currentStep: 1, // Default is Step 1
            itemList: [],
            userType: '',
            userName: '',
            userPhone: '',
            userLocation: '',
            userIndustry: ''
        }

        this.numSteps = 3;
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    _next = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= this.numSteps ? this.numSteps : currentStep + 1;
        this.setState({
            currentStep: currentStep
        });
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        });
    }

    get previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            );
        };
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < this.numSteps) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
                </button>
            );
        }
        return null;
    }

    render() {
        return (
            <div class="flex flex-wrap -mx-3 mb-6">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        itemList={this.state.itemList}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        userType={this.state.userType}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        userType={this.state.userType}
                    />
                    {this.previousButton}
                    {this.nextButton}

                </form>
            </div>
        );
    }
}