import React, { Component} from 'react';

export default class FormHeader extends Component {
    
    render() {
        return (
           <h2 className="text-center p-2">
               {this.props.text}
           </h2>
        );
    }
}