import React from "react";
import {NavLink} from "react-router-dom";

export default class Apartmentindex extends React.Component{
    render(){
         const {
           apartments
         } = this.props
        return (
            <div>
                {apartments && apartments.map((apartment) => {
                    return (
                        <div key={apartment.id}>
                           <NavLink to={`/apartmentshow/${apartment.id}`}><h1>{apartment.street}</h1></NavLink> 
                            <h2>{apartment.city}</h2>
                            <h4>{apartment.state}</h4>
                            <h4>{apartment.manager}</h4>
                            <h4>{`allow pets : ${apartment.pets}`}</h4>  
                            <h4>{`price $${apartment.price}`}</h4>
                            <h4>{"bathrooms:", apartment.bathrooms}</h4>
                            <h4>{"beedrooms:", apartment.bedrooms}</h4>
                            <h4>{apartment.email}</h4>
                        </div>
                    )
                })}
            </div>
        )
    }
}