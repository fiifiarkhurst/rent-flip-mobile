import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { SEND_EMAIL, VERIFY_EMAIL } from "../../../constants/constants";
import { post } from "../../../services/transport";
import {
  SendEmailVerificationInput,
  SendEmailVerificationOutput,
  VerifyEmailInput,
  VerifyEmailOutput,
} from "./types";

export function useSendEmailVerification(email: string) {
  return useMutation<
    any,
    any,
    SendEmailVerificationInput,
    AxiosResponse<SendEmailVerificationOutput>
  >((formData) =>
    post<SendEmailVerificationInput>(SEND_EMAIL(email), formData)
  );
}

export function useVerifyEmail(email: string) {
  return useMutation<
    any,
    any,
    VerifyEmailInput,
    AxiosResponse<VerifyEmailOutput>
  >((formData) => post<VerifyEmailInput>(VERIFY_EMAIL(email), formData));
}
