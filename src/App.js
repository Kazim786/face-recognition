import React from 'react';
import Particles from 'react-particles-js'
import Navigation from './components/navigation/navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank'
import './App.css';

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
    }
  }
render (){
  return (
    <div className="App">
        <Particles className = 'particles'
              params={particlesOption} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    {  /*<Logo />
      <ImageLinkForm />
    <FaceRecognition />*/}
    </div>
  );
}

}
  

export default App;
