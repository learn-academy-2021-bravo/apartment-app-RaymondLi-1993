import React from "react"

import Header from "./Components/Header"
import Login from "./Pages/LogIn"

class App extends React.Component {

  render () {
    return (
      <div style={{padding:"0", margin:"0", width:"100%", height:"100%"}}>
        <Header />
        <Login info = {this.props}/>
      </div>
    );
  }
}

export default App
