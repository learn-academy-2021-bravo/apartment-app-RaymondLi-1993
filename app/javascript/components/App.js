import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/home";
import Apartmentindex from "./Pages/apartmentIndex";
import ApartmentShow from "./Pages/apartmentShow";
import ApartmentEdit from "./Pages/apartmentEdit";
import CreateApartment from "./Pages/createApt";

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

  createApartments = async aptObj => {
    try{
      const postSettings = {
        body: JSON.stringify(aptObj),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }

      const response = await fetch("http://localhost:3000/apartments", postSettings);
      await response.json()
      .then(() => this.fetchApartments());

    } catch(error) {
      throw new Error(error);
    }
  };


  updateApartment = async (apartment, id) => {
      try{
        const requestSettings = {
          body: JSON.stringify(apartment),
          headers: {
            "Content-Type": "application/json",
          },
          method: "PATCH",
      }

      const response = await fetch(`http://localhost:3000/apartments/${+id}`, requestSettings);
      await response.json()
      .then(() => this.fetchApartments());
      

      } catch(error) {
        throw new Error(error);
      } 
    }

  destroyApartment = async id => {
    try{
      const requestSettings = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
    }
    const response = await fetch(`http://localhost:3000/apartments/${+id}`, requestSettings);
    await response.json()
    .then(() => this.fetchApartments());
    } catch(error){
      throw new Error(error);
    }
  }  

  render () {
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
                return <ApartmentShow apartment={apartment} user = {this.props} deleteApartment={this.destroyApartment}  />
               }} 
              />
              <Route path ="/apartmentedit/:id" 
               render={(props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find((apartment) => apartment.id === +id);
                return <ApartmentEdit apartment={apartment.id} updateApartment={this.updateApartment} />
               }} 
              />
              <Route path = "/newapartment"
                render={(props) => {
                  return <CreateApartment createApartment={this.createApartments} userId = {this.props.current_user.id}/>
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
