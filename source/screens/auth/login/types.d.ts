import { StackScreenProps } from "@react-navigation/stack";

export type LoginFormInputProp = {
  email: string;
  password: string;
};

export type Props = StackScreenProps<any, "login">;
