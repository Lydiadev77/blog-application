import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import blogImg from "./icons8-blogger.svg";
import "./header.css";
import {RollbackOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class Headerr extends Component{
 constructor(props){
  super(props)
  const token = localStorage.getItem("token"); // Authentication logic
  const username=localStorage.getItem("username");
   console.log(token);
        let headerlogged=true;
        if(token==null){
            headerlogged = false;
        }
        this.state = {
            headerlogged,
            username
        }
    console.log(this.state.headerlogged);

 }
    render(){
        return(<>
        <br></br>

        <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        
      <Menu.Item key="2"><Link to="./">All Posts</Link></Menu.Item>
      <Menu.Item key="5"><Link to="./admin">Create Post</Link></Menu.Item>
        <Menu.Item key="3"><Link to="./login">Login</Link></Menu.Item>
        <Menu.Item key="4"><Link to="./register">Register</Link></Menu.Item>
        <Menu.Item key="1"><h3> Welcome:{this.state.username}</h3></Menu.Item>
      </Menu>
    </Header>
    <br></br>  <br></br>  <br></br>

    </Layout>
       
        </>);
    }
} 

export default Headerr;

