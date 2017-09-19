import React, { Component } from 'react';

import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';
import apiKey from './apiKey';

const API_KEY = apiKey;
console.log(API_KEY);

export default class GetImageForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "",
    }

    this.fetchRoverImage = this.fetchRoverImage.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleCameraSol = this.handleCameraSol.bind(this);
    this.handleRover = this.handleRover.bind(this);

}


    handleCamera(e) {
      e.preventDefault();
      this.setState(
        {
          camera: this.state.value,
        })
    }

    handleSol(e) {
      e.preventDefault();
      this.setState(
        {
          sol: this.state.value,
        })
    }

    handleRover(e) {
      console.log(e)
      this.setState(
        {
          // rover: this.state.value,
        })
    }

    fetchRoverImage(e) {
      this.setState(
        {
        camera: this.state.camera,
        rover: this.state.rover,
        sol: this.state.sol});

      let cam = this.state.camera;
      let rove = this.state.rover;
      let num = this.state.sol;

      let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

      fetch('imageUrl')
        .then(r => r.json())
        .then((json) => {
          console.log("Data from componentWillMount fetch", json)
            let pics = json.pics;
          this.setState({
            pics: pics
          });
        })
    }

  render() {

    return (
  <div>
    <form onSubmit={this.fetchRoverImage}>
      <label htmlFor="rover">Rover</label>
      <select onChange={this.handleRover} id="rover" value={this.state.value}>
        <option value="Curiosity">Curiosity</option>
        <option value="Opportunity">Opportunity</option>
        <option value="Spirit">Spirt</option>
      </select>
      <label htmlFor="camera">Camera Type</label>
      <select onChange={this.handleCamera} id="rover" value={this.state.value}>
        <option value="fhaz">FHAZ (Front Hazard)</option>
        <option value="rhaz">RHAZ (Rear Hazard)</option>
        <option value="navcam">NAVCAM (Navigation Cam)</option>
      </select>
      <label htmlFor="sol">Martian Sol: 1000-2000</label>
      <input type="number" onChange={this.fetchRoverImage} max="2000" min="1000" value={this.state.value}/>
    </form>
    <GetImageButton/>
    <ImageDisplay/>
  </div>
    );
  }
}
