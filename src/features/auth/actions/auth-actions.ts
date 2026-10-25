"use server";

import { authService } from "../services/AuthService";
import { SignInInput, SignInSchema, SignUpInput, SignUpSchema } from "../schemas/authSchema";

export type SignUpActionResult = {
    error: string;
    success: string;
};

export async function signUpAction(input: SignUpInput): Promise<SignUpActionResult> {
    const data = SignUpSchema.safeParse(input);

    if (!data.success) {
        return {
            error: "Error en la validación de los datos",
            success: "",
        };
    }

    const response = await authService.register(data.data)
    return response
    
}
export async function signInAction(input: SignInInput) {

    const data = SignInSchema.safeParse(input)
    if (!data.success) {
        return {
            error: "Error en la validación de los datos",
            success: " "
        }
    }
    const response = await authService.login(data.data)
    return response
}
