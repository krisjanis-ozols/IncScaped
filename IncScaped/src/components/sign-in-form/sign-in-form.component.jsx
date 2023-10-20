import React from 'react'
import { useState} from 'react'
import FormInput from '../form-input/form-input.component';
import "./sign-in-form.styles.scss"
import Button from '../button/button.component';
const defaultFormFields = {
    email:'',
    password:'',
}

export default function SignInForm() {
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {email,password} = formFields;
    

    const handleSubmit = async (event) =>{
        event.preventDefault();        
        console.log(event);
        
    }
    const handleChanges = (event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})        
    }
  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with tour email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" type="email" required onChange={handleChanges} name="email" value={email}/>
            <FormInput label="Password" type="password" required onChange={handleChanges} name="password" value={password}/>
            <div className='buttons-container'>
                <Button type='submit'>Sign In</Button>
            </div>            
        </form>
    </div>
  )
}
