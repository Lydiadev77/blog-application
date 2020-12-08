import React, {Component} from 'react';
import axios from "axios";
import "./registration.css";
import {Redirect,Link} from "react-router-dom";
class Registration extends Component{
 
    constructor(props){
        super(props);
        this.state={
            name: "",
            email: "",
            phone: "",
            password: ""
        }
    }
    handleall=(event)=>{
    this.setState({[event.target.name]: event.target.value})
    }

    handlesubmit=(event)=>{
        event.preventDefault();
        const obj = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
            
           
        }
        console.log(obj)
        axios.post("https://5fb4b432e473ab0016a16c66.mockapi.io/userdetail", obj)
            .then((result) => {
            console.log(result.data);
            })
            .catch(err => console.log(err))

         alert("Resigtration Successful")   
      
    }
    render(){
    return(
        <div className="main">
            <form onSubmit={this.handlesubmit} className="formm">
            <label>Name</label>
            <input type="text"  name="name"  placeholder="Name" value={this.state.name} onChange={this.handleall} />
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleall} />
            <label>Number</label>
            <input type="number" name="phone" placeholder="Number" value={this.state.phone} onChange={this.handleall} />
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleall} /><br/>
            <input type="submit" value="Submit" className="button"/>
            <Link to="./login">Back to login page</Link>
            <div className="button"></div>
            </form>
        </div>
    );
    }
}
export default Registration;