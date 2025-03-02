import { ScrollView } from "react-native";
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
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: scale(TAB_HEIGHT + 8) }}
    >
      <Location />
      <Tabs />
      <Categories />
      <MostPopular />
      <ResumeBooking />
      <Recommended />
      <Offers />
      <SeasonalEvents />
      <LocationModal />
    </ScrollView>
  );
}
