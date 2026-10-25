"use client";
import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";


export default function ForgotPasswordForm() {
  
  return (
    <Form   >

        <FormLabel htmlFor="email"> E-mail</FormLabel>
        <FormInput 
                id="email" 
                type="email" 
                placeholder="Ingresa tu E-mail" required 
                
          />
         
        
        <FormSubmit value={'Enviar Instrucciones'}/>
    </Form>
  )
}
