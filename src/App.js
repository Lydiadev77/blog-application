import React from 'react';
import './App.css';
import Users from './component/users'
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import Login from './component/login';
import Admin from "./component/admin";
import Registration from './component/register';
import Logout from "./component/logout";
import Headerr from "./component/Header";
import Update from "./component/updatepost";
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
const {Content, Footer } = Layout;




function App() {
  return (
    <BrowserRouter>
    <div className="App">
         <Layout className="layout">
    
    <Headerr />
    
    <Switch>
    
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <Route exact path="/" component={Users}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Registration}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/admin/update" component={Update}/>
      </div>
    </Content>
    </Switch>
    <Footer style={{ textAlign: 'center' }}>Blog</Footer>
  </Layout>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
