import React, { Component } from "react";

import Button from "../elements/Button";
import FormHeader from "../elements/FormHeader";

export default class Step4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deliveryType: null,
            location: '',
        }
    }

    setDeliveryToPickup = () => {
        this.setState({ deliveryType: 'pickup' })
        this.props.handleChange("donationMethod", "pickup")
    }

    setDeliveryToDropoff = () => {
        this.setState({ deliveryType: 'dropoff' })
        this.props.handleChange("donationMethod", "dropoff")
    }

    render() {
        if (this.props.currentStep !== 4) {
            return null;
        }

        return (
            <>
                <FormHeader text="Awesome! Now, we need to confirm your contact details." />
                <h4 className="mb-5 mt-5">
                    Contact Name
                </h4>
                <input
                    className="appearance-none border-2 border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    id="contactName"
                    name="contactName"
                    type="text"
                    placeholder="First and Last Name "
                    value={this.props.contactName}
                    onChange={(event) => this.props.handleChange("contactName", event.target.value)}
                />
                <h4 className="mb-5 mt-5">
                    Current Location
                </h4>
                <input
                    className="appearance-none border-2 border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    id="currentLocation"
                    name="currentLocation"
                    type="text"
                    placeholder="City, (State), Country."
                    value={this.props.currentLocation}
                    onChange={(event) => this.props.handleChange("currentLocation", event.target.value)}
                />
                <h3 className="mb-5 mt-5">
                    In light of the coronavirus (COVID-19) situation and impact it is having on all of us. We ask that you maintain safe social distancing practices.
                </h3>
                <p className="mb-5 mt-5">
                    Can you choose to offer:
                </p>

                <Button
                    selected={this.state.deliveryType === 'pickup'}
                    label="A pick up location for your items"
                    handleClick={this.setDeliveryToPickup}
                />
                <Button
                    selected={this.state.deliveryType === 'dropoff'}
                    label="Contactless drop off"
                    handleClick={this.setDeliveryToDropoff}
                />
                {
                    this.state.deliveryType != null && <>
                        <h4>Please type in your preferred pick up location.</h4>
                        <textarea
                            className="appearance-none border-2 border-black w-full py-2 px-3 leading-tight focus:outline-none"
                            id="pickupLocation"
                            name={this.props.pickupLocation}
                            type="text"
                            placeholder="Type in your prefered pick up location for your items"
                            value={this.props.value}
                            row={3}
                            style={{ minHeight: 110 }}
                            onChange={(event) => this.props.handleChange("pickupLocation", event.target.value)}
                        />
                    </>
                }
            </>
        );
    }
}
