"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";
import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { signUpAction } from "../actions/auth-actions";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

export default function RegisterForm() {
        const [response, setResponse] = useState<{ error: string; success: string } | null>(null);
        const { register, handleSubmit, formState : { errors } } = useForm({
                resolver: zodResolver(SignUpSchema),
                mode: 'all'
        })


        const onSubmit = async (data: SignUpInput) => {
                                const result = await signUpAction(data);
                                setResponse(result);
                
                                 if(result.error) {   
                                                toast.error(result.error)  
        }
                                if(result.success) {
                                        toast.success(result.success)
                        redirect('/auth/login')

                }

        }

        return (
            <Form
               onSubmit={handleSubmit(onSubmit)}
            >
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <FormInput 
                        id="name" 
                        type="text"
                        placeholder="Ingresa tu Nombre" 
                        {...register('name')}
                />
                {errors.name && <FormError>{errors.name.message}</FormError>}

                <FormLabel htmlFor="email">E-mail</FormLabel>
                <FormInput 
                        id="email" 
                        type="email" 
                        placeholder="Ingresa tu E-mail" 
                        {...register('email')}
                />
                {errors.email && <FormError>{errors.email.message}</FormError>}

                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <FormInput 
                        id="password" 
                        type="password" 
                        placeholder="Password - Min 8 Caracteres"
                        {...register('password')}
                />
                {errors.password && <FormError>{errors.password.message}</FormError>}
                <FormLabel htmlFor="password_confirmation">Confirmar Password</FormLabel>
                <FormInput 
                        id="password_confirmation" 
                        type="password" 
                        placeholder="Confirma tu Password" 
                        {...register('passwordConfirmation')}
                 />
                {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}

                <FormSubmit value='Registrarse'/>
                {response?.error && <FormError>{response.error}</FormError>}
                {response?.success && <p role="status">{response.success}</p>}
            </Form>
        )

}
