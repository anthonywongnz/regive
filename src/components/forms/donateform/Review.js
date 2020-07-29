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
        if (this.props.currentStep !== 5) {
            return null;
        }
        
        return (
            <Fragment>
                <h1>Fantastic! Here is a full review of what you have just filled out.</h1>
                <div>
                    <h3>Contact Name</h3>
                    <p>{this.props.data.contactName}</p>
                    <h3>Current location</h3>
                    <p>{this.props.data.currentLocation}</p>
                    <hr />
                    <h3>Category Selection:</h3>
                    <p>{ this.props.data.itemCategories}</p>
                    <h3>Donation Title</h3>
                    <p>{ this.props.data.donationTitle}</p>
                    <h3>List your items</h3>
                    <p>{ this.props.data.itemList}</p>
                    <hr />
                    <h3>Photo attachments</h3>
                    <div style={{ minWidth: 294, minHeight: 217, background: 'grey'}}>
                        Image placeholder
                    </div>
                    <hr />
                    <h3>Brief note with donated items</h3>
                    <p>{this.props.data.donationMessage}</p>
                    <hr />
                    <h3>Retreiving the donated items</h3>
                    <p>{this.props.data.donationMethod}</p>
                    <p>{this.props.data.pickupLocation}</p>
                </div>
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