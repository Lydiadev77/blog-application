import React, { Component, useEffect, useState } from "react";
import { Redirect,Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';

class Login extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      name: "",
      password: "",
      loggedIn: false,
      details: [],
    };
  }
 
  logindetail = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handlelogin = (event) => {
    event.preventDefault();
    axios
      .get("https://5fb4b432e473ab0016a16c66.mockapi.io/userdetail")
      .then((res) => {
        //   console.log(res.data)
        this.setState({
          details: res.data,
        });
      })
      .catch((err) => console.log(err));
    //   console.log(this.state.details)

    var counter=0;
   for(let i=0;i<this.state.details.length;i++){
     counter++
       if(this.state.details[i].name==this.state.name && this.state.details[i].password==this.state.password){
         localStorage.setItem('token',"jshdygcbdhhshakkwazxfr");
           this.state.loggedIn= true;
           break;
       }
       else if(counter==this.state.details.length){
          alert(`Unauthorised User  Check UserId/Password`);
       }
   }

  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="main"> 
        <form onSubmit={this.handlelogin} className="form">
          <input
            type="text"
            name="name"
            placeholder="Enter your username"
            onChange={this.logindetail}
          />
         
          {/* <Input  type="text"
            name="name" size="small"  onChange={this.logindetail} placeholder="Username" prefix={<UserOutlined />} /> */}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={this.logindetail}
          />
          {/* <Input   type="password" */}
            {/* name=/"password" size="small"  onChange={this.logindetail} placeholder="Password" prefix={<UserOutlined />} /> */}
         
          <br />
          <input type="submit" value="Login" className="button"/>
          {/* <button className="button">
            <Link to="/register">Signup</Link>
          </button> */}
         
          <Button type="primary" danger>
          <Link to="/register">Signup</Link>
    </Button>
        </form>
      // </div>
    );
  }
}
export default Login;
