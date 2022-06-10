import { NavigatorScreenParams } from "@react-navigation/native";
import { AuthStackProps } from "../screens/auth/types";
import { MainTabProps } from "../screens/main/types";
import { RequestStackProps } from "../screens/request/types";

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabProps>;
  Auth: NavigatorScreenParams<AuthStackProps>;
  Request: NavigatorScreenParams<RequestStackProps>;
};
