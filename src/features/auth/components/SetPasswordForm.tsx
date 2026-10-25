"use client"

import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SetPasswordInput, SetPasswordSchema } from "../schemas/authSchema"
import { redirect, useSearchParams } from "next/navigation"


export default function SetPasswordForm() {

    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    if(!token) redirect('/auth/forgot-password')

    const { register, handleSubmit, formState: {errors}} = useForm ({
        resolver: zodResolver(SetPasswordSchema),
        mode: 'all'
    })

   
  return (
    <Form >
        <FormLabel  htmlFor="newPassword">Nuevo Password</FormLabel>
        <FormInput
            type="password"
            id="password"
            placeholder="Ingresa tu nuevo password"
            {...register('newPassword')}
        
        />
        {errors.newPassword && <FormError>{errors.newPassword.message}</FormError>}
        <FormLabel  htmlFor="passwordConfirmation">Repetir Password</FormLabel>
        <FormInput
            type="password"
            id="passwordConfirmation"
            placeholder="Repite tu  password"
            {...register('passwordConfirmation')}
        
        />
        {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}

        <FormSubmit 
            value="Restablecer Password"
        />

    </Form>
  )
}
