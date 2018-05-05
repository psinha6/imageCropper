import React, { Component } from "react";
import service from './services';
let count = 0;
class Home extends Component {
  state = { selectedFile: null, count: 0 }

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  uploadHandler = (i) => {
    if (!this.state.selectedFile){
      alert('Please enter an image to upload');
    }
    console.log(this.state.selectedFile)
    service.saveImages(this.state.selectedFile, i);
    count++;
    this.setState({
      count: service.getImages().length || 0
    })
  }
  cropHandler = () => {
    // Route to next page save the selected file to be cropped to be given as the default url 
    console.log(this.state.selectedFile);

  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.uploadHandler}>Upload!</button>
        <p></p>
        <div>Click again to add more images</div>
        <div>Total images added : {count}</div>
      </div>
    );
  }
}

export default Home;