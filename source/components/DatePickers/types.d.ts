import { Dispatch, SetStateAction } from "react";

export interface Props {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  label: string;
}
