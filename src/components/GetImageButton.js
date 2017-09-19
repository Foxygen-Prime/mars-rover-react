import React, { Component } from 'react';

export default class GetImageButton extends Component {
  render() {
    return (
        <div className="formstuffs" style={{backgroundColor: "#ff7200", height: 50}}>
        <button className="buttStyle" style={{backgroundColor: "#3d3737", color: "white", fontSize: "16px"}} onClick={this.props.click}>Submit</button>
      </div>

    );
  }
}
