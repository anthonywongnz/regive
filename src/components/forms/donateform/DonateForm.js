import React, { Component } from "react";
import Step1 from './Step1';
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Review from "./Review";
import Button from "../elements/Button";

const CATEGORY = ['', '', '', 'Family', '', '', '', '', '', '']
export default class DonateForm extends Component {
    constructor(props) {
        super(props)
        this.numSteps = 5;
        this.key = "regiveDonateFormLocalStore"
        this.state = {
            currentStep: 1,

            //user details
            donationTitle: '',
            itemList: [],
            itemCategories: '',
            userType: '',
            userName: '',
            userPhone: '',
            userLocation: '',
            userIndustry: '',
            contactName: '',

            //donation details
            donationMethod: '', // 'direct','pickup','dropoff'
            donationLocation: '',
            currentLocation: '',
            pickupLocation: '',
            donationMessage: ''
        }
        this.initialState = this.state;
    }

    componentDidMount() {
        try {
            const localStore = localStorage.getItem(this.key)
            if (localStore !== 'undefined') {
                this.setState(JSON.parse(localStore));
            } else {
                localStorage.setItem(this.key, JSON.stringify(this.state));
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate() {
        try {
            localStorage.setItem(this.key, JSON.stringify(this.state));
        } catch (error) {
            console.log(error);
        }
    }

    clearState = () => {
        this.setState(this.initialState);
        localStorage.setItem(this.key, JSON.stringify(this.state));
    }

    handleChange = (name, value) => {
        value = value == null ? value = '' : value;
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
                <div className="flex items-center justify-center">
                    <button
                        className="btn btn-secondary"
                        type="button">
                        <img src="./icons/Button_Next.png" alt="Next Button" onClick={this._next} />
                    </button>
                </div>

            );
        }
        return null;
    }

    render() {
        return (
            <div className="justify-center max-w-lg mx-auto">
                {this.previousButton}
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        itemList={this.state.itemList}
                        category={this.state.itemCategories}
                        donationTitle={this.state.donationTitle}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        userType={this.state.userType}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        donationMesssage={this.state.donationMessage}
                    />
                    <Step4
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        donationMethod={this.state.donationMethod}
                        donationLocation={this.state.donationLocation}
                        contactName={this.state.contactName}
                        currentLocation={this.state.currentLocation}
                        pickupLocation={this.state.pickupLocation}
                    />
                    <Review
                        currentStep={this.state.currentStep}
                        data={this.state}
                    />
                    <br />
                    {this.nextButton}
                </form>
                <Button
                    label="Clear Form"
                    handleClick={this.clearState}
                />
            </div>
        );
    }
}