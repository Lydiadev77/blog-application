import React, { Component } from 'react';
import axios from "axios";

class Mockblog extends Component{
constructor(props){
    super(props);
    this.state={
        mockdetails: ""
    }

    axios
    .get("https://5fb4b432e473ab0016a16c66.mockapi.io/blog/userdetail")
    .then((res) => {
      //   console.log(res.data)
      this.setState({
        mockdetails: res.data,
      });
    })
    .catch((err) => console.log(err))

}

render(){
    const mockdetailss =this.state.mockdetails;
        console.log(this.state.mockdetails);
        console.log(mockdetailss)
    return(
       <div>
             {mockdetailss.map(u=> 
                <div>
                    <h1>{u.posts}</h1>
                </div>)}
            </div>

    );
}

}

export default Mockblog;