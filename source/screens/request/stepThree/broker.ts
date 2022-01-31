import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { SEND_PHONE, VERIFY_PHONE } from "../../../constants/constants";
import { post } from "../../../services/transport";
import {
  SendPhoneVerificationInput,
  SendPhoneVerificationOutput,
  VerifyPhoneInput,
  VerifyPhoneOutput,
} from "./types";

export function useSendPhoneVerification(phone: string) {
  return useMutation<
    any,
    any,
    SendPhoneVerificationInput,
    AxiosResponse<SendPhoneVerificationOutput>
  >((formData) =>
    post<SendPhoneVerificationInput>(SEND_PHONE(phone), formData)
  );
}

export function useVerifyPhone(phone: string) {
  return useMutation<
    any,
    any,
    VerifyPhoneInput,
    AxiosResponse<VerifyPhoneOutput>
  >((formData) => post<VerifyPhoneInput>(VERIFY_PHONE(phone), formData));
}
