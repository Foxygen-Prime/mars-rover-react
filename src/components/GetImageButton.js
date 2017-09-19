import React, { Component } from 'react';

export default class GetImageButton extends Component {
  render() {
    return (
      <div>
        <input type="submit"class="btn btn-warning" onClick="message:"{this.props.fetchroverimage}/>
      </div>

    );
  }
}
