export interface SendPhoneVerificationInput {}

export interface SendPhoneVerificationOutput {
  success: boolean;
  payload: boolean;
}

export interface VerifyPhoneInput {
  code: string;
}

export interface VerifyPhoneOutput {
  success: boolean;
  payload: boolean;
}
