import React from 'react';
import './Stuff.css';
import Cropper from 'react-cropper';
// import 'react-image-crop/lib/ReactCrop.scss';
import service from './services';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

let src = 'assets/47122.png';
let files = [];
export default class Stuff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src,
      cropResult: null,
      value: 0
    };
    this.cropImage = this.cropImage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.useDefaultImage = this.useDefaultImage.bind(this);
    files = service.getImages();
    if(files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        this.setState({
          src: reader.result
        });
      };
      reader.readAsDataURL(files[0]);
    }
  }
  onChange(index) {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(files[index]);
  }

  cropImage() {
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    this.setState({
      cropResult: this.cropper.getCroppedCanvas().toDataURL(),
    });
  }

  useDefaultImage() {
    this.setState({ src });
  }
handleChange = (event, index, value) => {
  this.setState({value});
  this.onChange(index);
}
  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          {files.map((file, index) =>
            <MenuItem key={index} value={index} primaryText={file.name} />
          )}
        </DropDownMenu>
        <div style={{ width: '100%' }}>
          <Cropper
            style={{ height: 400, width: '100%' }}
            aspectRatio={16 / 9}
            preview=".img-preview"
            guides={false}
            src={this.state.src}
            ref={cropper => { this.cropper = cropper; }}
          />
        </div>
        <div>
          <div className="box" style={{ width: '50%', float: 'right' }}>
            <h1>Preview</h1>
            <div className="img-preview" style={{ width: '100%', float: 'left', height: 300 }} />
          </div>
          <div className="box" style={{ width: '50%', float: 'right' }}>
            <h1>
              <span>Crop</span>
              <button onClick={this.cropImage} style={{ float: 'right' }}>
                Crop Image
              </button>
            </h1>
            <img style={{ width: '100%' }} src={this.state.cropResult} alt="cropped image" />
          </div>
        </div>
        <br style={{ clear: 'both' }} />
      </div>
    )
  }
}
