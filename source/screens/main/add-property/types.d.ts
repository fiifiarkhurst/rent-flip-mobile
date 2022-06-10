export type AddPropertyStackProps = {
  addPropertyStepOne: undefined;
  addPropertyStepTwo: {
    email: string;
    name: string;
    phone: string;
    photo: string;
  };
  addPropertyStepThree: {
    idType: string;
    idPhoto: string;
    email: string;
    endDate: string;
  };
  addPropertyStepFour: {
    location: number[];
    images: string[];
  };
  success: undefined;
};
