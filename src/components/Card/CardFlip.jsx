import React, { Component } from "react";

export default class CardFlip extends Component {
    
  render() {
    return (
      <div className="card card-flipper-flip table-responsive table-full-width">
        <div className="card-flipper-card"> 
          <div className="card-flipper-face card-flipper-front"> 
            <div className="card-flipper-inner"> 
              {this.props.frontContent}  
            </div>
          </div> 
          <div className="card-flipper-face card-flipper-back"> 
            <div className="card-flipper-inner card-flipper-text-center"> 
                {this.props.backContent}
            </div>
          </div>
        </div>	 
      </div>
    );
  }
}
