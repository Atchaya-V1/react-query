import React from 'react'
import {useForm} from '@tanstack/react-form'

const Formvalid = () => {
    const form=useForm({
        defaultValues:{firstname:"",
            lastname:"",
            dept:"",
        },
        onSubmit:({value})=>{
            console.log("form submitted",value)
        }
    });
  return (
        <form onSubmit={      
            form.handleSubmit
        }>
        <form.Field name="firstname"
        validators={{
            onChange:(value)=>(!value?"name is required":undefined),
            onSubmit:(value)=>(!value?"first name required": undefined)
        }}>

            {
            (field)=>(
                <> <label htmlFor="firstname">firstname</label>
                
                    
                    <input id="firstname" value={field.state.value}
                    onChange={(e)=>{
                        field.handleChange(e.target.value);}}
                        onBlur={field.handleBlur}
                    
/>
                
                {field.state.meta.isTouched && field.state.meta.errors?.[0] && (
              <span style={{ color: 'red' }}>{field.state.meta.errors[0]}</span>
                )}
                </>
            )}
        </form.Field>
        <form.Field name="dept"
        validators={{
            onChange:(value)=>(!value?"name is required":undefined),
            onSubmit:(value)=>(!value?"first name required": undefined)
        }}>

            {
            (field)=>(
                <> <label htmlFor="dept">department</label>
                
                    
                    <input id="dept" value={field.state.value}
                    onChange={(e)=>{
                        field.handleChange(e.target.value);}}
                        onBlur={field.handleBlur}
                    
/>
                
                {field.state.meta.isTouched && field.state.meta.errors?.[0] && (
              <span style={{ color: 'red' }}>{field.state.meta.errors[0]}</span>
                )}
                </>
            )}
        </form.Field>
        <form.Field name="lastname"
        validators={{
            onChange:(value)=>!value?"name is required":undefined,
            onSubmit:(value)=>(!value?"first name required": undefined)
        }}>

            {
            (field)=>(
                <> <label htmlFor="lastname">lastname</label>
                
                    
                    <input id="lastname" value={field.state.value}
                    onChange={(e)=>{
                        field.handleChange(e.target.value);
                    }}
                    onBlur={field.handleBlur}
/>
                
                {field.state.meta.isTouched && field.state.meta.errors?.[0] && (
              <span style={{ color: 'red' }}>{field.state.meta.errors[0]}</span>
                )}
                </>
            )}
        </form.Field>
        <button type="submit">submit</button>
        </form>     
  )   
    }

export default Formvalid;
