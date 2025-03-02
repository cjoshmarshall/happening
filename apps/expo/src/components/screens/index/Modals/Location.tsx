import { forwardRef, useMemo } from "react";
import { Text, View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export type Ref = BottomSheetModal;

const LocationModal = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  return (
    <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
      <View>
        <Text>hellow</Text>
      </View>
    </BottomSheetModal>
  );
});

export default LocationModal;
