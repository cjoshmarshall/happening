import type { TextStyle, ViewStyle } from "react-native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

import { COLORS } from "~/utils/constants";

interface ButtonProps {
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
}

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ style, textStyle, disabled, onPress, children }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.8}
        style={[
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.primary,
            height: scale(38),
            borderRadius: scale(18),
            opacity: disabled ? 0.5 : 1,
          },
          style,
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text
          style={[
            {
              fontFamily: "Poppins_400Regular",
              fontSize: scale(14),
              lineHeight: scale(22),
              color: COLORS.background,
            },
            textStyle,
          ]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  },
);

export default Button;
