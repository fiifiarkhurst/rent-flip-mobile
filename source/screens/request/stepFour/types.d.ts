export interface ApplyInputProp {
  name: string;
  email: string;
  phone: string;
  photo: string;
  property: string;
  idType: string;
  idPhoto: string;
  startDate: Date;
  endDate: Date;
  paySlips: string[];
}

export interface ApplyOutputProp {
  success: true;
}
