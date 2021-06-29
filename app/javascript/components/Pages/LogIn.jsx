import React from "react"

class Login extends React.Component {
    render() {
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
          { logged_in &&
            <div>
              <a href={sign_out_route }>Sign Out</a>
            </div>
          }
          { !logged_in &&
            <div>
              <a href={ sign_in_route }>Sign In</a>
            </div>
          }
        </>
      )
    }
  }
  
  export default Login