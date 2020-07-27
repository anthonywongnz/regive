import React, { Component, Fragment } from "react";
import Button from "../elements/Button";
import { useAxiosPut } from "../../../hooks/HttpRequests";

export default class Review extends Component {

    renderDonationMethod = () => {
        switch (this.props.data.donationMethod) {
            case 'direct': return "Deliver to: " + this.props.data.donationLocation.name;
            case 'pickup': return "Pickup from: " + this.props.data.pickupLocation;
            case 'dropoff': return "Contactless Drop Off"
            default: return ''
        }
    }

    render() {
        if (this.props.currentStep !== 6) {
            return null;
        }
        
        return (
            <Fragment>
                <h1>Fantastic! Here is a review of your donation</h1>
                <div>
                    <h3>Contact Name</h3>
                    <p>{this.props.data.userName}</p>
                    <h3>Contact Number</h3>
                    <p>{this.props.data.userPhone}</p>
                    <hr />
                    <h3>Items for Donation</h3>
                    <ul>
                        {this.props.data.itemList.map(item => {
                            return <li key={item.value}>- {item.label}</li>
                        })}
                    </ul>
                    <hr />
                    <h3>Retrieving the Donations</h3>
                    <p>{this.renderDonationMethod()}</p>
                </div>
                <Button
                    label="Save as a draft"
                    handleClick={() => {
                        console.log("Nope");
                    }}
                />
                <Button
                    label="Submit to Regive"
                    handleClick={() => {
                        useAxiosPut('https://a18001cb.us-south.apigw.appdomain.cloud/inventory-management/items');
                    }}
                />
            </Fragment>
        );
    }
}