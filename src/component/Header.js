import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./header.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
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
       
        <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        
      <Menu.Item key="2"><Link to="./">All Posts</Link></Menu.Item>
      <Menu.Item key="1"><Link to="./admin">Create Post</Link></Menu.Item>
        <Menu.Item key="3"><Link to="./login">Login</Link></Menu.Item>
        <Menu.Item key="4"><Link to="./register">Register</Link></Menu.Item>
      </Menu>
    </Header>
    <br></br>  <br></br>  <br></br>
    {/* <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
  </Layout>
        </>);
    }
} 

export default Headerr;

