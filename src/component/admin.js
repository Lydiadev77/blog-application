import React, { Component } from 'react';
import "./admin.css";
import axios from "axios";
import { Redirect,Link } from 'react-router-dom';
import { Input } from 'antd';
const { TextArea } = Input;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    const token = localStorage.getItem("token"); // Authentication logic
    const username = localStorage.getItem("username");
    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }
    this.state = {
      posts: "",
      detail: null,
      mockpost: "",
      mockdetails: [],
      name: "",
      loggedin,
      username,
    };
    //window.location.reload();
    axios // fetching my blogs from mockapi
      .get("https://5fb4b432e473ab0016a16c66.mockapi.io/post")
      .then((res) => {
        //   console.log(res.data)
        this.setState({
          mockdetails: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  handleblog = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.posts);
    // console.log(this.state.detail)
  };

  submitForm = (event) => {
    event.preventDefault();
    alert("Post Added!!");
    var obj = {
      posts: this.state.title,
      detail: this.state.description,
      createdBy: this.state.author,
    };
    console.log(obj);
    axios
      .post("https://5fb4b432e473ab0016a16c66.mockapi.io/post", obj) //Uploading my blog to mockapi
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  handleClick(id) {
    // Delete a blog
    const idd = id;
    alert("Blog Deleted !!");
    axios
      .delete(`https://5fb4b432e473ab0016a16c66.mockapi.io/post/${idd}`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }
  updatePost = () => {
    return <Redirect to="./admin/update" />;
  };

  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="./login" />;
    }
    return (
      <div className="admin-main">
        <button type="primary" shape="square"><Link to="/logout">Logout</Link></button>
        <br></br>
        <form className="admin-form" onSubmit={this.submitForm}>
          <Input
            size="large"
            type="text"
            placeholder="Blog Title"
            name="posts"
            value={this.state.posts}
            onChange={this.handleblog}
            className="admin-input"
          />
          <br />
          <TextArea
            name="Text1"
            cols={30}
            rows={5}
            name="detail"
            placeholder="Details"
            onChange={this.handleblog}
            value={this.state.detail}
          />
          <br />
          <input type="submit" value="Post" className="submit-button" />
        </form>
        <br />
      </div>
    );
  }
}
export default Admin;