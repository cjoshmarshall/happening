import { FlatList, Image, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import AirShowImage from "assets/images/air-show.png";
import CarnivalImage from "assets/images/carnival.png";
import ConcertImage from "assets/images/concert.png";
import DanceImage from "assets/images/dance.png";
import ExhibitionImage from "assets/images/exhibition.png";
import FoodFestImage from "assets/images/food-fest.png";
import LaunchImage from "assets/images/launch.png";
import MagicianImage from "assets/images/magician.png";
import PetsShowImage from "assets/images/pets-show.png";
import PlaysImage from "assets/images/plays.png";
import PremiereImage from "assets/images/premiere.png";
import SportsImage from "assets/images/sports.png";
import TalksImage from "assets/images/talks.png";
import TradeFairImage from "assets/images/trade-fair.png";

export default function Categories() {
  const categories = [
    [
      { id: 1, name: "Plays", image: PlaysImage },
      { id: 2, name: "Food Fest", image: FoodFestImage },
    ],
    [
      { id: 3, name: "Pets Show", image: PetsShowImage },
      { id: 4, name: "Dance", image: DanceImage },
    ],
    [
      { id: 5, name: "Concert", image: ConcertImage },
      { id: 6, name: "Premiere", image: PremiereImage },
    ],
    [
      { id: 7, name: "Magician", image: MagicianImage },
      { id: 8, name: "Sports", image: SportsImage },
    ],
    [
      { id: 9, name: "Air Show", image: AirShowImage },
      { id: 10, name: "Carnival", image: CarnivalImage },
    ],
    [
      { id: 11, name: "Exhibition", image: ExhibitionImage },
      { id: 12, name: "Talks", image: TalksImage },
    ],
    [
      { id: 13, name: "Launch", image: LaunchImage },
      { id: 14, name: "Trade Fair", image: TradeFairImage },
    ],
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
        Pick your category
      </Text>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: scale(12) }}
        renderItem={({ item }) => (
          <View style={{ gap: scale(12), marginHorizontal: scale(6) }}>
            {item.map((category) => (
              <View
                key={category.id}
                style={{
                  width: scale(86),
                  borderRadius: scale(8),
                  backgroundColor: "#7E2CCF1A",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <Image
                  source={category.image}
                  style={{ height: scale(66), width: "100%" }}
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
                  {category.name}
                </Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
}
