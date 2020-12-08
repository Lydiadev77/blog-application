import React, { Component } from 'react';
import {Link, useLocation, Redirect} from "react-router-dom";
import axios from "axios";
import "./update.css";

class Update extends Component{
   constructor(props){
       super(props);
       this.state ={
           updatePosts:"",
           updateDetail: "",
           updateId:{}
       }
       const id =this.props.location.statee;
       this.state.updateId=id;
       console.log(this.state.updateId);

   }

   
   handleUpdateBlog=(event)=>{
    this.setState({[event.target.name]: event.target.value})
   }

   submitUpdateForm=(e)=>{
    
    e.preventDefault();
       const obj={
           posts:this.state.updatePosts,
           detail:this.state.updateDetail
       }
       console.log(obj);
       console.log(this.state.updateId);

       axios
       .put(`https://5fb4b432e473ab0016a16c66.mockapi.io/post/${this.state.updateId}`, obj)
       .then((res) => {
         //   console.log(res.data)
        
       })
       .catch((err) => console.log(err));
 
       

   }
    render(){
        return(
            <div className="update-main">
              <form onSubmit={this.submitUpdateForm} className="update-form">
              <input type="text" placeholder="Blog Title" name="updatePosts" value={this.state.updatePosts} 
                onChange={this.handleUpdateBlog} className="admin-input"/><br/>
                <textarea name="Text1" cols="40" rows="5" name="updateDetail" placeholder="Details" 
                onChange={this.handleUpdateBlog} value={this.state.updateDetail}></textarea><br/>
                 <input type="submit" value="Update" className="button"/>
              </form>
              <Link to="../admin">Go back</Link>

            </div>
        )
    }
}
export default Update;