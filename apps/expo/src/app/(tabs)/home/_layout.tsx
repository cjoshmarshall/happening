import React from "react";
import { Image } from "react-native";
import { Stack } from "expo-router";
import BellIcon from "assets/icons/bell.svg";
import MainHeaderLogo from "assets/logos/main-header.png";

import { COLORS } from "~/utils/constants";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{ contentStyle: { backgroundColor: COLORS.background } }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => <Image source={MainHeaderLogo} />,
          headerTitleAlign: "center",
          headerLeft: () => null,
          headerRight: () => <BellIcon />,
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
