import React from "react"
import {NavLink} from "react-router-dom";
import {Button} from "reactstrap"

export default class ApartmentShow extends React.Component {
    handleDelete = () => {
      this.props.deleteApartment(this.props.apartment.id)
    }  
    render(){
    const {apartment} = this.props
    const {current_user} = this.props.user  
       

      return(
          <div>
                {
                !current_user ? 
                <div>
                <h1>{`street : ${apartment.street}`}</h1>
                <h2>{`city : ${apartment.city}`}</h2>
                <h4>{`state : ${apartment.state}`}</h4>
                <h4>{`manager: ${apartment.manager}`}</h4>
                <h4>{`Pets: ${apartment.pets}`}</h4>  
                <h4>{`price: ${apartment.price}`}</h4>
                <h4>{`contact: ${apartment.email}`}</h4>
                <h4>{`bathrooms: ${apartment.bathrooms}`}</h4>
                <h4>{`bedrooms : ${apartment.bedrooms}`}</h4>  
                </div>
                :  
              <div>
                <h1>{`street : ${apartment.street}`}</h1>
                <h2>{`city : ${apartment.city}`}</h2>
                <h4>{`state : ${apartment.state}`}</h4>
                <h4>{`manager: ${apartment.manager}`}</h4>
                <h4>{`Pets: ${apartment.pets}`}</h4>  
                <h4>{`price: ${apartment.price}`}</h4>
                <h4>{`contact: ${apartment.email}`}</h4>
                <h4>{`bathrooms: ${apartment.bathrooms}`}</h4>
                <h4>{`bedrooms : ${apartment.bedrooms}`}</h4> 
                {current_user.id === apartment.user_id && <NavLink to={`/apartmentedit/${apartment.id}`}  ><Button>Update apartment</Button></NavLink>}
                {current_user.id === apartment.user_id && <NavLink to={`/apartmentindex`}><Button color="danger" onClick={this.handleDelete}> delete apartment</Button>  </NavLink>}
              </div>
               }
          </div>
      ) 
   } 
}




