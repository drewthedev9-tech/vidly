import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form"


class RegisterForm extends Form {

   

    state = {
        data: { username: '', password: '',name: ''},
        errors: {}
    };

    // Used to validate objexts ins state in validate function below. for the inputs validating.
    schema = { 
        username: Joi.string()
        .required()
        .label("Username"),
        password: Joi.string()
        .required()
        // function at least 5 charecters.
        .min(5)
        .label("Password"),
        name:Joi.string()
        .required()
    
    };



    doSubmit=()=>{

          // call the server 
        console.log("submitted")
    }

    render() { 
       return ( <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
            {this.renderInput('username', 'Username')}
            {this.renderInput('password', 'Password', "password")}
            {this.renderInput('name', 'Name')}
            {this.renderButton("Register")}
            </form>
            </div>
            
         );
    }
}
 
export default RegisterForm;