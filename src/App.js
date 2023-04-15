import { Component } from 'react';
import Description from './Components/Description/Description';
import RingSettings from './Components/RingSettings/RingSettings';
import Ring3DModel from './Components/Ring3DModel/Ring3DModel';
import './App.css';
import MobileMenu from './Components/MobileMenu/MobileMenu';


class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 10,
      width:0,
      clicked:1
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  textInput = (event) => {
    var x = 10;
    x -= event.target.value.length;
    this.setState({ number: x });
    var value = event.target.value
    window.engraving(value)
  }

  textChange = (event) => {
    var url = "";
    if (event.target.id === "text1") {
      url = "https://fonts.gstatic.com/s/amita/v16/HhyaU5si9Om7PTlpC_W6EQ.woff2"
      window.changeText(url);
    } else if (event.target.id === "text2") {
      url = "https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOxCZZM.woff2"
      window.changeText(url);
    } else if (event.target.id === "text3") {
      url = "https://fonts.gstatic.com/s/kalam/v16/YA9dr0Wd4kDdMthQOCfzsw.woff2"
      window.changeText(url);
    }
    console.log(url);
  }
  materialChange1 = (event) => {
    if (event.target.id === "dia") {
      window.changeColor1();
    } else if (event.target.id === "ruby") {
      window.changeColor2();
    }
    else if (event.target.id === "eme") {
      window.changeColor3();
    } else if (event.target.id === "white") {
      window.changeColor4();
    } else if (event.target.id === "yellow") {
      window.changeColor5();
    } else if (event.target.id === "rose") {
      window.changeColor6();
    }
  }
  mobileMenu=(event)=>{
    this.setState({ clicked: this.state.clicked + 1 })
    console.log(this.state.clicked);
  }
  render() {

    return (
      <div className='flex-l justify-between items-center'>
        <Description />
        <Ring3DModel />
        {this.state.width < 1200 ?
        <MobileMenu clicked={this.state.clicked} mobileMenu={this.mobileMenu} textChange={this.textChange} materialChange1={this.materialChange1} textInput={this.textInput} number={this.state.number} />:
        <RingSettings textChange={this.textChange} materialChange1={this.materialChange1} textInput={this.textInput} number={this.state.number} />
        }
      </div>
    )
  }
}

export default App;
