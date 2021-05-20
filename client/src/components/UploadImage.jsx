import React from 'react';
import ImageUploader from 'react-images-upload';


class UploadImage extends React.Component {

  constructor(props) {
      super(props);
      this.state = { pictures: [] };
      this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
     this.setState({
         pictures: this.state.pictures.concat(picture),
     });
  }

  render() {
      return (
        <section className="proflie">
          <h2>Profile Information</h2>
          <p>email: sameone@gmail.com</p>
          <ImageUploader
              withIcon={true}
              withPreview={true}
              buttonText='Choose images'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png']}
              maxFileSize={5242880}
          />
        </section>
      );
  }
}

export default UploadImage;
