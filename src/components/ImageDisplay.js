import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  render() {
    let photos = this.props.images.map( (photo, index) => {
      return (
        <div key={index} className="margin" style={{ backgroundColor:"#3d3737"}}>>
          <img src={photo.img_src} alt='img'></img>
        </div>
      );
    });

    return (
      <div>
        {photos}
      </div>
    );
  }
}
