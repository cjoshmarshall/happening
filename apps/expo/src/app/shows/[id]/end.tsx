import { Pressable, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { router } from "expo-router";

import { supabase } from "~/utils/supabase";

export default function End() {
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          marginHorizontal: scale(28),
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: scale(16),
            lineHeight: scale(24),
            width: 235,
            textAlign: "center",
          }}
        >
          End of Prototype
        </Text>
        <Pressable onPress={() => router.back()}>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: scale(16),
              lineHeight: scale(24),
            }}
          >
            Go back
          </Text>
        </Pressable>
        <Pressable onPress={async () => await supabase.auth.signOut()}>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: scale(16),
              lineHeight: scale(24),
            }}
          >
            Go to first screen
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
