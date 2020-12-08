import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./users.css";
import { getUsers } from "../store/actions/usersAction";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Redirect, Link } from "react-router-dom";
import { Row, Col } from 'antd';
import { Card } from "antd";
import { deletePost } from "../store/actions/usersAction";
import 'antd/dist/antd.css';
import './index.css';


const { Meta } = Card;

class users extends Component {
  constructor(props) {
    super(props);
    const username = localStorage.getItem("username");
    console.log(username);
    this.state = {
      usernam: username,
    };
    // console.log(this.state.usernam);
  }
  componentDidMount() {
    this.props.getUsers();
  }

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
  handleSubmit  = (e)  => { 
    const { dispatch } = this.props;                
    dispatch(deletePost(e));
}

  render() {
    const { users } = this.props.users;
    console.log(this.props.users);
    return (
      <div className="blog">
        {users.map((u) => (
           <Row gutter={[16, 48]} style={{ margin: 5 }} >
          <Card
 style={{ width: 300 }}
            cover={
              <img
                alt="image"
                src={u.avatar}
              />
            } className="single-blog"
          >
              { this.state.usernam ===u.author ?
         <>
         <Button type="primary" shape="square" className="single-blog-btn1" onClick={() =>this.handleClick(u.id)} >
         <DeleteOutlined />
         </Button>
         <Button type="primary" shape="square" className="single-blog-btn2" >
         <Link to={{
               pathname:'./admin/update',
               statee:u.id
           }}> <EditOutlined /> </Link>
         </Button>
         </>  : null }
            <Meta title={u.posts} description={u.detail} />
            <h1>{u.title}</h1>
            <p>{u.description}</p>
            <h4>Posted by: {u.author}</h4>
          </Card> 

          </Row>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUsers })(users);