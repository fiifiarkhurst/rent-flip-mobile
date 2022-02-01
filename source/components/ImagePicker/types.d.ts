import { Dispatch, SetStateAction } from "react";

export interface Props {
  setFile: Dispatch<SetStateAction<any>>;
  askToUpload: () => void;
  uploading: boolean;
  uploaded: boolean;
  reset: () => void;
}
