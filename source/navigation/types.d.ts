import { NavigatorScreenParams } from "@react-navigation/native";
import { MainTabProps } from "../screens/main/types";
import { RequestStackProps } from "../screens/request/types";

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabProps>;
  Request: NavigatorScreenParams<RequestStackProps>;
};
