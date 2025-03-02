import { Stack } from "expo-router";

import { COLORS } from "~/utils/constants";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#18181A" },
        contentStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen name="entry" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
