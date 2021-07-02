import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from "reactstrap";

export default class Header extends React.Component{
    render(){
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
          } = this.props.info
          console.log(this.props.info)
        return (
            <>
            <div style={{height:"200px", width:"full", textAlign:"center"}}>
                { logged_in &&
            <div>
              <a href={sign_out_route }><h1>Sign Out</h1></a>
            </div>
          }
          { !logged_in &&
            <div>
              <a href={ sign_in_route }><h1>Sign In</h1></a>
            </div>
          }

            <NavLink to={"/apartmentindex"}>
                <h1>See All Apartments</h1>
            </NavLink>
            {logged_in && <NavLink to={`/newapartment`}><Button>create apartment</Button></NavLink> }
            </div>
            </>
        )
    }
}
