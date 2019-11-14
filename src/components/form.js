import React,{useState}from 'react';
import { withFormik, Form, Field} from 'formik';    


function normForm (){

return(
    <div>
       
        <Form>
        <Field as='text'name='name' placeholder='Name'/>
        <br/>
        <Feild as='email' name='email' placeholder = 'email'/>
        <br/>
        <Feild as ='password'name='password'placeholder ='password'/>
        <br/>
        <label>
        <Feild as ='checkbox' name='terms and conditons' placeholder= 'terms and conditons'/>
        Accept tems and conditons.</label>
        <br/>
        <button>Submit</button>
        </Form>
    
       
    </div>
)


}

const LogForm = withFormik(normForm)
export default LogForm;