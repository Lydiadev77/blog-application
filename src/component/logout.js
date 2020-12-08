import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Logout extends Component{

constructor(props){
    super(props)
    localStorage.removeItem("token");
    localStorage.removeItem("username");
}

    render(){
        return (
        <>
        <h1>Sucessfully Logout!! </h1>
        <Link to="/login">Back to login Page</Link>
        </>);
    }
}

export default Logout;