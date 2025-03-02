import { ScrollView } from "react-native";
import { scale } from "react-native-size-matters";

import { COLORS, TAB_HEIGHT } from "~/utils/constants";
import Categories from "./components/Categories";
import Location from "./components/Location";
import MostPopular from "./components/MostPopular";
import Offers from "./components/Offers";
import Recommended from "./components/Recommended";
import ResumeBooking from "./components/ResumeBooking";
import SeasonalEvents from "./components/SeasonalEvents";

export default function Home() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: scale(TAB_HEIGHT + 8) }}
    >
      <Location />
      <Categories />
      <MostPopular />
      <ResumeBooking />
      <Recommended />
      <Offers />
      <SeasonalEvents />
    </ScrollView>
  );
}
