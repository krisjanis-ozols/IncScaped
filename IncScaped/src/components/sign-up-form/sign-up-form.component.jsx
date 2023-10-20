import React from 'react'
import { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import "./sign-up-form.styles.scss"
import Button from '../button/button.component';
const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

export default function SignUpForm() {
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        
    }
    const handleChanges = (event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})        
    }
  return (
    <div className='sign-up-container'>
        <h2>Dont have an account?</h2>
        <span>Sign up with tour email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Diplay name" type="text" required onChange={handleChanges} name="displayName" value={displayName}/>
            <FormInput label="Email" type="email" required onChange={handleChanges} name="email" value={email}/>
            <FormInput label="Password" type="password" required onChange={handleChanges} name="password" value={password}/>
            <FormInput label="Confirm Password" type="password" required onChange={handleChanges} name="confirmPassword" value={confirmPassword}/>
            <Button type='submit'>Sign up</Button>
        </form>
    </div>
  )
}
