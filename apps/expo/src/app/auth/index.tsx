import type { ImageSourcePropType } from "react-native";
import {
  Image,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { router } from "expo-router";

import Button from "~/component/Button";
import MainLogo from "../../../assets/logos/main.png";
import SocialMediaLogos from "../../../assets/logos/social-media.png";

export default function Auth() {
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: scale(38), height }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height,
        }}
      >
        <Image source={MainLogo as ImageSourcePropType} />
        <Text
          style={{
            width: 224,
            fontFamily: "Poppins_400Regular",
            fontSize: scale(14),
            lineHeight: scale(22),
            textAlign: "center",
          }}
        >
          Login now to find whats happening around you
        </Text>
        <View
          style={{
            marginBottom: 20,
            width: "100%",
            gap: scale(22),
          }}
        >
          <TextInput
            placeholder="Enter Email Address"
            style={{
              height: scale(38),
              width: "100%",
              borderWidth: 1,
              borderColor: "#D9D9D9",
              borderRadius: scale(18),
              backgroundColor: "#FBFBFB",
              textAlign: "center",
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(20),
            }}
            placeholderTextColor="#A3A3A3"
          />
          <TextInput
            placeholder="Enter OTP"
            style={{
              height: scale(38),
              width: "100%",
              borderWidth: 1,
              borderColor: "#D9D9D9",
              borderRadius: scale(18),
              backgroundColor: "#FBFBFB",
              textAlign: "center",
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(20),
            }}
            placeholderTextColor="#A3A3A3"
          />
          <Button
            style={{ height: scale(38), width: "100%" }}
            onPress={() => router.push("/")}
          >
            Login
          </Button>
        </View>
        <View
          style={{
            marginBottom: 120,
            width: "100%",
            alignItems: "center",
            gap: scale(22),
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(14),
              lineHeight: scale(22),
              color: "#A3A3A3",
            }}
          >
            or
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(14),
              lineHeight: scale(22),
              color: "#A3A3A3",
            }}
          >
            Sign in with other accounts
          </Text>
          <Image source={SocialMediaLogos as ImageSourcePropType} />
        </View>
      </View>
    </SafeAreaView>
  );
}
