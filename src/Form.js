import React, { Component } from "react";
import validator from 'validator';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email:{
          value: "",
          isvalid: false
      },
      password: {
        value: "",
        errorMsg: ""
      }
    };
  }
  handleEmail=(e)=>{
      const isvalid= validator.isEmail(e.target.value);
      this.setState({
          email:{
              value: e.target.value,
              isvalid: isvalid
          }
      });
      console.log(this.state);
    
    // console.log(e.target.value);
    // e.persist();
  }
  handlePassword=(e)=>{
    const isvalid= validator.isLength(e.target.value,8);
    if(isvalid){
        this.setState({
            password:{
                value:e.target.value,
                errorMsg: ""
            }
        });
    }else{
        this.setState({
            password:{
                value:e.target.value,
                errorMsg: "enter atleast 8 characters"
            }
        });
    }
     console.log(this.state.password.errorMsg);
  // e.persist();
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={this.state.email.value}
          onChange={this.handleEmail}
        />
        {!this.state.email.isvalid&&<p>invalid email</p>}
        <input 
          type="text" 
          placeholder="password" 
          value={this.state.password.value}
          onChange={this.handlePassword}  
        />
       {this.state.password.value&&<p>{this.state.password.errorMsg}</p>} 
        <button>submit</button>
      </form>
    );
  }
}
export default Form;
