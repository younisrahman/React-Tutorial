import './App.css';
import React from 'react';


class LoadName extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Naim",
    };
  }


  changeName() {
    this.setState({
        name: this.props.name
    })
  }


  changeParent() {
    this.props.changeNameP("Data from child")
    this.setState({
        name: this.props.name
    })
  }


  render() {
    return (
      <div className="App">
        <h1 style={nameStyle}>{`Hello this is : ${this.state.name}`}</h1>
        <button onClick={() => this.changeName()}> Change Name</button>
        <button onClick={() => {
            this.changeParent()
        }}> Change Name Parent</button>
      </div>
    );
  }
}


const nameStyle = {
  fontSize: 50,
}

export default LoadName;

