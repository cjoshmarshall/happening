import { FlatList, Image, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import ChristmasEventImage from "assets/images/christmas-event.png";
import DiwaliEventImage from "assets/images/diwali-event.png";
import DussehraEventImage from "assets/images/dussehra-event.png";
import EidEventImage from "assets/images/eid-event.png";
import HalloweenEventImage from "assets/images/halloween-event.png";

export default function SeasonalEvents() {
  const events = [
    { id: 1, name: "Diwali", image: DiwaliEventImage },
    { id: 2, name: "Halloween", image: HalloweenEventImage },
    { id: 3, name: "Christmas", image: ChristmasEventImage },
    { id: 4, name: "Eid", image: EidEventImage },
    { id: 5, name: "Dussehra", image: DussehraEventImage },
  ];

  return (
    <View>
      <Text
        style={{
          marginVertical: scale(22),
          marginHorizontal: scale(20),
          fontFamily: "Poppins_500Medium",
          fontSize: scale(16),
          lineHeight: scale(24),
        }}
      >
        Seasonal Events
      </Text>
      <FlatList
        data={events}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: scale(12) }}
        renderItem={({ item }) => (
          <View
            style={{
              gap: scale(12),
              marginHorizontal: scale(6),
              width: scale(86),
              borderRadius: scale(8),
              backgroundColor: "#7E2CCF1A",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <Image
              source={item.image}
              style={{ height: scale(66), width: "100%" }}
              resizeMode="stretch"
            />
            <Text
              style={{
                paddingVertical: scale(2),
                fontFamily: "Poppins_500Medium",
                fontSize: scale(12),
                lineHeight: scale(18),
                color: "#5A5A5A",
                textAlign: "center",
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
