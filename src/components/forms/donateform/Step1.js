import React, { Component } from "react";
import CreatableSelect from 'react-select'
import FormHeader from "../elements/FormHeader";

//should be serverside
const options = [
    { value: 'forks', label: 'Forks' },
    { value: 'cooking dishes', label: 'Cooking Dishes' },
    { value: 'hangers', label: 'Hangers' }
]
  
const Categories = [
    { value: 'Cars, bikes & boats', label: 'Cars, bikes & boats' },
    { value: 'Clothing & accessories', label: 'Clothing & accessories' },
    { value: 'Electronic & photography', label: 'Electronic & photography' },
    { value: 'Family', label: 'Family' },
    { value: 'Farming', label: 'Farming' },
    { value: 'Heatlh & beauty', label: 'Heatlh & beauty' },
    { value: 'Home & garden', label: 'Home & garden' },
    { value: 'Vehicles', label: 'Vehicles' },
    { value: 'Pet & animals', label: 'Pet & animals' }
]

export default class Step1 extends Component {

    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }

        return (
            <>
                <FormHeader
                    text="Fantastic! First, let’s list the items you are donating away."
                />
                <h4>
                    Category Selection:
                </h4>
                <CreatableSelect
                    className="basic-select"
                    classNamePrefix="select"
                    placeholder="all categories"
                    name="itemCategories"
                    onChange={(value) => this.props.handleChange('itemCategories', value.value)}
                    options={Categories}/>
                <h4>
                    Donation Title
                </h4>
                <input
                    className="appearance-none border-2 border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    name='donationTitle'
                    type="text"
                    placeholder="eg. Heaps of kitchen stuff"
                    value={this.props.donationTitle}
                    onChange={(event) => this.props.handleChange('donationTitle', event.target.value)}
                />
                <h4>
                    Type in the things you are donating separately or together as a bundle:
                </h4>
                <textarea
                    className="appearance-none border-2 border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    name="itemList"
                    style={{ minHeight: 188}}
                    placeholder="You can list a maximum of 5 items that you want to donate altogether or either one item for a category. For example plates, cultery, cooking utensils. Items can be separated with commas (,)"
                    value={this.props.itemList}
                    rows={3}
                    onChange={(event) => this.props.handleChange('itemList', event.target.value.split(","))}
                />
            </>
        )
    }
}
