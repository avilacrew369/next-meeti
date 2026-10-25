import { emailConfig } from "../config/config";
import { renderVerificationEmail, renderVerificationEmailText } from "../templates/VerificationsEmail";
import { VerificationEmailData } from "../types/emails.types";

import { EmailService } from "./EmailService";

export class AuthEmailService {
    static async sendVerificationEmail(data: VerificationEmailData) : Promise<void>{
        await EmailService.send({
            from: emailConfig.from.verification,
            to: data.email,
            subject: 'Meeti - Confirma tu cuenta.',
            text: renderVerificationEmailText(data ),
            html: renderVerificationEmail(data),
        })

    }
   
}