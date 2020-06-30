import React, { Component} from 'react';

export default class Button extends Component {
    className = () => {
        let styles = "text-white font-bold py-2 px-4 self-center ";
        return styles.concat(this.props.selected 
            ? "bg-blue-500 hover:bg-blue-700" 
            : "bg-gray-900 hover:bg-blue-700"); 
    }
    
    render() {
        return (
           <div className="mb-6">
           <button
                className={this.className()}
                onClick={this.props.handleClick}
           >
               {this.props.label}
           </button>
           </div>
        );
    }
}