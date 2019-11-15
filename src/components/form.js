import React,{useState, useEffect}from 'react';
import { withFormik, Form, Field} from 'formik';    
import * as Yup from 'yup';
import axios from 'axios';

function LogForm ({values, touched, errors,status}){

    const [users, setUsers]= useState([]);

    useEffect(()=>{
        status && setUsers(users => [...users,status])
    },[status])

return(
    <div>
       
        <Form>
        <Field 
        type='text'
        name='name' 
        placeholder='Name'
          
          />
          {touched.name&&errors.name&&(<p>{errors.name}</p>)}

        <br/>

        <Field
         type='email'
         name='email'
          placeholder = 'Email'  
          />
        {touched.email&&errors.email&&(<p>{errors.email}</p>)}
        <br/>

        <Field 
        type ='password'
        name='password'
        placeholder ='password'
        />
        {touched.password&&errors.password&&(<p>{errors.password}</p>)}
        <br/>

        <label>

        <Field
         type ='checkbox'
         name='terms' 
         placeholder= 'Terms and Conditons' 
         checked = {values.terms}
         />

        Accept tems and conditons.</label>
        {touched.terms&&errors.terms&&(<p>{errors.terms}</p>)}
        <br/>

        <button type='submit'>Submit</button>
        </Form>
        {users.map(user =>(
            <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        </div>
        ))}
       
    </div>
   
    
)
}


const FormikLogForm = withFormik({
    mapPropsToValues({name,email,password,terms}){
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms|| false,

        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required().min(6,'password is too short - must be 6 characters minimum.')
    }),

    handleSubmit(values, {setStatus}){
        axios
        .post('https://reqres.in/api/users', values)
        .then(res => {setStatus(res.data);})
        .catch(err => console.log(err.response))
    }
})(LogForm)

export default FormikLogForm;
console.log(FormikLogForm)