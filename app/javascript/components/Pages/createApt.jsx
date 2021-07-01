import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {Redirect} from "react-router-dom"

export default class CreateApartment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          form: { 
            user_id : this.props.userId,
            street: "",
            city: "",
            state: "",
            manager:"",
            email:"",
            price:"",
            bedrooms:0,
            bathrooms:0,
            pets:""
          },
          submitted: false,
        };
      }

      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.form)
        this.props.createApartment(this.state.form);
        this.setState({ submitted: true });
      };
    
      handleChange = (e) => {
        let { form } = this.state;
        form[e.target.name] = e.target.value;
        this.setState({ form: form });
      };

      


    render(){
       return (
           <div>
        <Form>
          <FormGroup>
            <Label for="street"><h2>Apartment Street</h2></Label>
            <Input
              type="text"
              name="street"
              id="street"
              placeholder="street"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city"><h2>City</h2></Label>
            <Input
              type="string"
              name="city"
              id="city"
              placeholder="city"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="manager"><h2>manager</h2></Label>
            <Input
              type="string"
              name="manager"
              id="manager"
              placeholder="manager"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state"><h2>State</h2></Label>
            <Input
              type="string"
              name="state"
              id="state"
              placeholder="state"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email"><h2>email</h2></Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price"><h2>price</h2></Label>
            <Input
              type="number"
              name="price"
              id="price"
              placeholder="price"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms"><h2>bedrooms</h2></Label>
            <Input
              type="number"
              name="bedrooms"
              id="bedrooms"
              placeholder="bedrooms"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bathrooms"><h2>bathrooms</h2></Label>
            <Input
              type="number"
              name="bathrooms"
              id="bathrooms"
              placeholder="bathrooms"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Pets"><h2>Pets</h2></Label>
            <Input
              type="string"
              name="pets"
              id="pets"
              placeholder="Pets"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <Button outline color="success" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
        {this.state.submitted && (
          <Redirect to={`/apartmentindex`} />
        )}
           </div>
       ) 
    }
} 