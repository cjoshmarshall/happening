import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { Pressable, ScrollView } from "react-native";
import { scale } from "react-native-size-matters";

import LocationModal from "~/components/screens/index/Modals/Location";
import Categories from "~/components/screens/index/Widgets/Categories";
import Location from "~/components/screens/index/Widgets/Location";
import MostPopular from "~/components/screens/index/Widgets/MostPopular";
import Offers from "~/components/screens/index/Widgets/Offers";
import Recommended from "~/components/screens/index/Widgets/Recommended";
import ResumeBooking from "~/components/screens/index/Widgets/ResumeBooking";
import SeasonalEvents from "~/components/screens/index/Widgets/SeasonalEvents";
import Tabs from "~/components/screens/index/Widgets/Tabs";
import { TAB_HEIGHT } from "~/utils/constants";

export default function Home() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const onPress = () => bottomSheetRef.current?.expand();

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: scale(TAB_HEIGHT + 8) }}
    >
      <Pressable style={{ marginHorizontal: scale(20) }} onPress={onPress}>
        <Location />
      </Pressable>
      <Tabs />
      <Categories />
      <MostPopular />
      <ResumeBooking />
      <Recommended />
      <Offers />
      <SeasonalEvents />
      <LocationModal ref={bottomSheetRef} />
    </ScrollView>
  );
}
