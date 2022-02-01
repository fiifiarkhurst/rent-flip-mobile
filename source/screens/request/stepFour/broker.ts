import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { APPLY } from "../../../constants/constants";
import { post } from "../../../services/transport";
import { ApplyInputProp, ApplyOutputProp } from "./types";

export const getBlob = async (file: any) => {
  const blob = await new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.responseType = "blob";
    xhr.open("GET", file, true);
    xhr.send(null);
  });

  return blob;
};

export const getFileExtension = (type: string) => type.split("/")[1];

export function useApplyForProperty() {
  return useMutation<any, any, ApplyInputProp, AxiosResponse<ApplyOutputProp>>(
    (formData) => post<ApplyInputProp>(APPLY, formData)
  );
}
