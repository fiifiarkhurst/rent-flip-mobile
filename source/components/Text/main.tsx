import React, { FC, Fragment } from "react";
import { Text } from "react-native";
import { TextComponentProp, TextVariant } from "./types";

const TextComponent: FC<TextComponentProp> = ({ style, type, children }) => {
  const customStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return (
    <Fragment>
      <Text
        style={[
          {
            ...customStyles,
            fontFamily: `${
              type === "extraBold"
                ? "Poppins-ExtraBold"
                : type === "bold"
                ? "Poppins-Bold"
                : type === "light"
                ? "Poppins-Light"
                : type === "medium"
                ? "Poppins-Medium"
                : type === "regular"
                ? "Poppins-Regular"
                : "Poppins-Thin"
            }`,
          },
        ]}
      >
        {children}
      </Text>
    </Fragment>
  );
};

TextComponent.defaultProps = {
  type: TextVariant.regular,
};

export default TextComponent;
