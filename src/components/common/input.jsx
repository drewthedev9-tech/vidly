import React from 'react';

const Input = ({ name, label,error, ...rest }) => {
    return ( 
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
        autoFocus
        // gets the value of the input to use in method above.
        // value={value}  same as hving these as props
        // onChange={onChange}
        // type={type} 
        {...rest}
        name={name}
        id={name}
        className="form-control"/>
       { error && <div className="alert alert-danger">{error}</div>}
    </div>
   
     );
}
 
export default Input;