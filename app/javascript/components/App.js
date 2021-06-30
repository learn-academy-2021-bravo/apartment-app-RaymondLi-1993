import React from "react"

import Header from "./Components/Header"
import Login from "./Pages/LogIn"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };
  }

  componentDidMount() {
    this.fetchApartments();
  }

  fetchApartments = () => {
    fetch("http://localhost:3000/apartments")
    .then((res) => res.json())
    .then((payload) => {
      this.setState({apartments:payload})
    })
    .catch((errors) => {
      console.log("fetch errors:", errors);
    })
  }

  render () {
    console.log(this.state.apartments);
    return (
      <div style={{padding:"0", margin:"0", width:"100%", height:"100%"}}>
        <Header />
        <Login info = {this.props}/>
      </div>
    );
  }
}

export default App
