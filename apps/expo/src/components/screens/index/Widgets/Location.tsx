import { Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import LocationIcon from "assets/icons/location.svg";

import { COLORS } from "~/utils/constants";

export default function Location() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F9F5FD",
          borderRadius: scale(6),
        }}
      >
        <View style={{ marginHorizontal: scale(8) }}>
          <LocationIcon />
        </View>
        <View>
          <Text
            style={{
              marginTop: scale(4),
              marginBottom: scale(1),
              fontFamily: "Poppins_500Medium",
              fontSize: scale(12),
              lineHeight: scale(18),
              color: COLORS.primary,
            }}
          >
            Bangalore
          </Text>
          <Text
            style={{
              marginTop: scale(1),
              marginBottom: scale(4),
              fontFamily: "Poppins_400Regular",
              fontSize: scale(10),
              lineHeight: scale(16),
            }}
          >
            #2 KR Layout, Indiranagar
          </Text>
        </View>
      </View>
    </>
  );
}
