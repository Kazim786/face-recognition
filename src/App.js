import React, {Component} from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

import Particles from 'react-particles-js'
import Navigation from './components/navigation/navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank'
import './App.css';
import Clarifai from 'clarifai'


const app = new Clarifai.App({
  apiKey: 'd6b9f5b8523b4ee3967323cb1664dd11'
 });

const particlesOption = {
  particles: {
    number: {
      value: 30,
      density: {
          enable: true,
          value_area: 800

      }
    }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input).then(
    function(response) {
      // do something with response
      console.log(response)
    },
    function(err) {
      console.log(err)
    }
  );
  }

render (){
  return (
    <div className="App">
        <Particles className = 'particles'
              params={particlesOption} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
    <FaceRecognition imageUrl = {this.state.imageUrl} />
    </div>
  );
}

}
  

export default App;
