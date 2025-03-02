import { Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { Link } from "expo-router";

import Button from "~/component/Button";

export default function Entry() {
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
          Concept Design of an event discovery app
        </Text>
        <View style={{ width: "auto" }}>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: scale(16),
              lineHeight: scale(24),
            }}
          >
            Note:
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: scale(14),
                lineHeight: scale(24),
                marginLeft: 14,
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: scale(14),
                lineHeight: scale(24),
                marginLeft: 14,
              }}
            >
              All elements on prototype are not clickable
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: scale(14),
                lineHeight: scale(24),
                marginLeft: 14,
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: scale(14),
                lineHeight: scale(24),
                marginLeft: 14,
              }}
            >
              Click anywhere on screen to see hints on clickable elements - it
              will be highlighted in blue.
            </Text>
          </View>
        </View>
        <Link href="/auth" asChild>
          <Button style={{ height: scale(28), width: scale(154) }}>
            Go to prototype
          </Button>
        </Link>
      </View>
    </SafeAreaView>
  );
}
