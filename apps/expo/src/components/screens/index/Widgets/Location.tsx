import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { Pressable, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import LocationIcon from "assets/icons/location.svg";

import { COLORS } from "~/utils/constants";

// import LocationModal from "../Modals/Location";

export default function Location() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const press = () => bottomSheetRef.current?.expand();

  console.log("hello");
  console.log(bottomSheetRef.current, " bottomSheetRef.current");

  return (
    <>
      <Pressable
        style={{
          marginHorizontal: scale(20),
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F9F5FD",
          borderRadius: scale(6),
        }}
        onPress={press}
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
      </Pressable>
      {/* <LocationModal ref={bottomSheetRef} /> */}
    </>
  );
}
