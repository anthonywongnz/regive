import React, { Component } from "react";
import Step1 from './Step1';
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Review from "./Review";

export default class MasterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            
            //user details
            itemList: [],
            userType: '',
            userName: '',
            userPhone: '',
            userLocation: '',
            userIndustry: '',
            
            //donation details
            donationMethod: '', // 'direct','pickup','dropoff'
            donationLocation:'',
            pickupLocation:'',
            donationMessage:''
        }

        this.numSteps = 6;
    }

    handleChange = (name, value) => {
        value = value == null ? value = '' : value;
        this.setState({
            [name]: value
        }, () => console.log(this.state));
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
            <div className="flex flex-wrap -mx-3 mb-6">
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
                        userName={this.state.userName}
                        userPhone={this.state.userPhone}
                        userIndustry={this.state.userIndustry}
                        userLocation={this.state.userLocation}
                    />
                    <Step4
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        donationMethod={this.state.donationMethod}
                        donationLocation={this.state.donationLocation}
                        pickupLocation={this.state.pickupLocation}
                    />
                    <Step5
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        itemList={this.state.donationMessage}
                    />
                    <Review
                        data={this.state}
                    />
                    {this.previousButton}
                    {this.nextButton}

                </form>
            </div>
        );
    }
}