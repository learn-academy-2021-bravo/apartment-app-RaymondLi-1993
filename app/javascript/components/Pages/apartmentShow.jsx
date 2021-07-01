import React from "react"
import {NavLink} from "react-router-dom";
import {Button} from "reactstrap"

export default class ApartmentShow extends React.Component {
   render(){
      const {apartment} = this.props

      return(
          <div>
              <h1>{apartment.street}</h1>
              <h2>{apartment.city}</h2>
              <h4>{apartment.state}</h4>
              <h4>{apartment.manager}</h4>
              <h4>{apartment.pets}</h4>  
              <h4>{apartment.price}</h4>
              <h4>{apartment.email}</h4>
              <h4>{apartment.bathrooms}</h4>
              <h4>{apartment.bedrooms}</h4>
              {this.props.userId === apartment.current_user.id && <NavLink to={`/apartmentedit/${apartment.id}`}><Button>Update apartment</Button></NavLink>}
          </div>
      ) 
   } 
}