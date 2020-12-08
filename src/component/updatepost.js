import React, { Component } from 'react';
import {Link, useLocation, Redirect} from "react-router-dom";
import axios from "axios";
import "./update.css";
import 'antd/dist/antd.css';
import { Form, Input, Button, Radio } from 'antd';

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
       .put(`https://5fb4b432e473ab0016a16c66.mockapi.io/blogs/${this.state.updateId}`, obj)
       .then((res) => {
         //   console.log(res.data)
        
       })
       .catch((err) => console.log(err));
 
       

   }
    render(){
        return(
            <div className="update-post">
              <Form onSubmit={this.submitUpdateForm} className="update-form">
              <input type="text" name="updatePosts" value={this.state.posts} 
                onChange={this.handleUpdateBlog} className="admin-input"/><br/>
                <textarea name="Text1" cols="20" rows="5" name="updateDetail"
                onChange={this.handleUpdateBlog} value={this.state.detail}></textarea><br/>
                 <input type="submit" value="Update" className="button"/>
              </Form>
             
           <Button> <Link to="/">All posts</Link></Button>   
           <br></br>

            </div>
        )
    }
}
export default Update;