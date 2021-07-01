import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/home";
import Apartmentindex from "./Pages/apartmentIndex";
import ApartmentShow from "./Pages/apartmentShow";
import ApartmentEdit from "./Pages/apartmentEdit";

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

  fetchApartments = async () => {
    try {
      let response = await fetch("http://localhost:3000/apartments");
      const fetchedData = await response.json();
      this.setState({apartments:fetchedData});
    } catch (error){
      if (error) {
        throw new Error(error);
      }
    }
  }


  updateApartment = async (apartment, id) => {
    if(this.props.current_user.id !== +id){
         throw "Not the same users"; 
    }
      try{
        const requestSettings = {
          body: JSON.stringify(apartment),
          headers: {
            "Content-Type": "application/json",
          },
          method: "PATCH",
      }

      const response = await fetch(`http://localhost:3000/apartments/${+id}`, requestSettings);
      const updatedResponse = await response.json();
      return updatedResponse;

      } catch(error) {
        throw new Error(error);
      } 
    }

  render () {
    console.log(this.props)
    return (
      <div style={{padding:"0", margin:"0", width:"100%", height:"100%"}}>
        <Router>
          <div>
            <Header info = {this.props}/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/apartmentindex" render={(props) => <Apartmentindex apartments={this.state.apartments}/>}/>
              <Route path="/apartmentshow/:id" 
               render={(props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find((apartment) => apartment.id === +id);
                return <ApartmentShow apartment={apartment}  />
               }} 
              />
              <Route path ="/apartmentedit/:id" 
               render={(props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find((apartment) => apartment.id === +id);
                return <ApartmentEdit apartment={apartment} updateApartment={this.updateApartment} />
               }} 
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App
