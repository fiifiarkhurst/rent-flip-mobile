export interface SendEmailVerificationInput {}

export interface SendEmailVerificationOutput {
  success: boolean;
  payload: boolean;
}

export interface VerifyEmailInput {
  code: string;
}

export interface VerifyEmailOutput {
  success: boolean;
  payload: boolean;
}
