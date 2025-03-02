import React from "react";
import { Pressable } from "react-native";
import { scale } from "react-native-size-matters";
import { router, Stack } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { COLORS } from "~/utils/constants";

export default function ShowLayout() {
  return (
    <Stack
      screenOptions={{ contentStyle: { backgroundColor: COLORS.background } }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: () => (
            <Pressable
              style={{
                marginLeft: scale(4),
                width: scale(20),
                height: scale(20),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.background,
                borderRadius: 99,
              }}
              hitSlop={8}
              onPress={() => router.back()}
            >
              <FontAwesome5 name="chevron-left" size={16} color="#5F6368" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={{
                marginRight: scale(4),
                width: scale(20),
                height: scale(20),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.background,
                borderRadius: 99,
              }}
              hitSlop={8}
            >
              <MaterialCommunityIcons
                name="share-variant"
                size={16}
                color="#5F6368"
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="select-seats"
        options={{ title: "Select Seats", headerShadowVisible: false }}
      />
      <Stack.Screen name="end" options={{ headerShown: false }} />
    </Stack>
  );
}
