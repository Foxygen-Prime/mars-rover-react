import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  render() {
    let images = fetchRoverImage.map((images) => {
    return (
      <div>
        <img src={this.props.images}>
        </img>
      </div>

    );
  )}
  }
}
