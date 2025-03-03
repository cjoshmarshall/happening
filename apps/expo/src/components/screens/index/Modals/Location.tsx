import { forwardRef, useMemo } from "react";
import { Switch, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

import Button from "~/components/widgets/Button";
import { COLORS } from "~/utils/constants";
import Location from "../Widgets/Location";

const LocationModal = forwardRef<BottomSheetModal>((_, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);

  const onPress = () => {
    if (ref && "current" in ref && ref.current) {
      ref.current.dismiss();
    }
  };

  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
      <BottomSheetView style={{ flex: 1 }}>
        <Text
          style={{
            marginVertical: scale(22),
            marginHorizontal: scale(20),
            fontFamily: "Poppins_500Medium",
            fontSize: scale(16),
            lineHeight: scale(24),
          }}
        >
          Select your Location
        </Text>
        <View
          style={{
            marginVertical: scale(22),
            marginHorizontal: scale(20),
            flexDirection: "row",
            gap: scale(8),
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
            }}
          >
            Phone location permission
          </Text>
          <Switch thumbColor={COLORS.primary} />
        </View>
        <Text
          style={{
            marginVertical: scale(22),
            marginHorizontal: scale(20),
            fontFamily: "Poppins_500Medium",
            fontSize: scale(14),
            lineHeight: scale(20),
          }}
        >
          Current Location
        </Text>
        <Location />
        <Text
          style={{
            marginVertical: scale(22),
            marginHorizontal: scale(20),
            fontFamily: "Poppins_500Medium",
            fontSize: scale(14),
            lineHeight: scale(20),
          }}
        >
          Recent Locations
        </Text>
        <Location />
        <Location />
        <Button
          style={{ height: scale(32) }}
          textStyle={{
            fontFamily: "Poppins_400Regular",
            paddingHorizontal: 16,
            fontSize: scale(13),
          }}
          onPress={onPress}
        >
          Confirm
        </Button>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default LocationModal;
