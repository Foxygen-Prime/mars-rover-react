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
      sol: "1000",
    }

    this.fetchRoverImage = this.fetchRoverImage.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
    this.handleRover = this.handleRover.bind(this);

}

    handleCamera(e) {
      this.setState(
        {
          camera: e.target.value,
        })
    }

    handleSol(e) {
      this.setState(
        {
          sol: e.target.value,
        })
    }

    handleRover(e) {
      console.log(e.target.value)
      this.setState(
        {
          rover: e.target.value,
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

      fetch(imageUrl)
        .then(r => r.json())
        .then((data) => {
          console.log(data.photos)
          this.setState({
            images: data.photos
          });
        })
    }

  render() {

    return (

  // <div className="margin" style={{ backgroundColor:"#3d3737"}}>
  <div className="formstuffs" style={{color:"#3d3737", backgroundColor: "orange", fontFamily: "Roboto", fontSize: "33px", textAlign:"center", height: 120}}>
    <form>
      <label htmlFor="rover">Rover: </label>
      <select onChange={this.handleRover} id="rover" value={this.state.value}>
        <option value="Curiosity">Curiosity</option>
        <option value="Opportunity">Opportunity</option>
        <option value="Spirit">Spirt</option>
      </select>
      <br></br>
      <label htmlFor="camera">Camera Type: </label>
      <select onChange={this.handleCamera} id="rover" value={this.state.value}>
        <option value="fhaz">FHAZ (Front Hazard)</option>
        <option value="rhaz">RHAZ (Rear Hazard)</option>
        <option value="navcam">NAVCAM (Navigation Cam)</option>
      </select>
      <br></br>
      <label htmlFor="sol">Martian Sol: 1000-2000</label>
      <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
    </form>
    <GetImageButton click={this.fetchRoverImage}/>
    <ImageDisplay images={this.state.images}/>
  </div>
  // </div>
    );
  }
}
