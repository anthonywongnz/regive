import React, { Component, Fragment } from "react";
import Button from "../elements/Button";


//should be serverside
const locationData = [
    { name: "Auckland Foundation", address: "Level 26, PwC Tower 188 Quay Street, Auckland CBD 1010" },
    { name: "Auckland City Mission", address: "23 Union Street, Auckland CBD, Auckland 1010, New Zealand" },
    { name: "Salvation Army Family Store", address: "200 Dominion Road, Mount Eden, Auckland 1024, New Zealand" }
];

export default class Step4 extends Component {
    constructor() {
        super();
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        //load locations
        this.setState({ locations: locationData });
    }

    locationLabel = (name, address) => {
        return (
            <Fragment>
                <p>{name}</p>
                <p>{address}</p>
            </Fragment>
        )
    }

    render() {
        if (this.props.currentStep !== 4) {
            return null;
        }

        return (
            <Fragment>
                <h1>Excellent! Based on the items you listed and current location. Here are places that are accepting your types of donations</h1>
                <br />

                {this.state.locations.map((location) => {
                    return <Button
                        selected={this.props.donationLocation.name === location.name}
                        label={this.locationLabel(location.name, location.address)}
                        handleClick={() => this.props.handleChange("donationLocation", location)}
                    />
                })
                }
            </Fragment>
        );
    }
}