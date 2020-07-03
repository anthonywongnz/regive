import React, { Component} from 'react';

export default class Button extends Component {
    
    className = () => {
        let styles = "flex-1 font-bold py-2 px-4 self-center border-solid border-2 border-black";
        return styles.concat(" ", this.props.selected
            ? "bg-yellow-200" 
            : "bg-white hover:bg-yellow-200");
    }
    
    render() {
        return (
           <div className="flex items-stretch mb-6 font-body">
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