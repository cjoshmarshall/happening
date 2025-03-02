import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { scale } from "react-native-size-matters";
import { Link, router } from "expo-router";
import ArrahmanLiveConcert from "assets/images/arrahman-live-concert.png";
import Cricket from "assets/images/cricket-live.png";
import ZahirKhanLive from "assets/images/zahir-khan-live.png";

import { COLORS } from "~/utils/constants";

export default function Recommended() {
  const pouplarShows = [
    { id: 1, image: ZahirKhanLive },
    { id: 2, image: Cricket },
    { id: 3, image: ArrahmanLiveConcert },
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
        Recommended for you
      </Text>
      <FlatList
        data={pouplarShows}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: scale(12) }}
        renderItem={({ item }) => (
          <Pressable
            key={item.id}
            style={{
              marginHorizontal: scale(6),
              height: scale(124),
              width: scale(280),
              borderRadius: scale(8),
              overflow: "hidden",
            }}
            onPress={() => router.push(`/home/shows/${item.id}`)}
          >
            <Image
              source={item.image}
              style={{ height: "100%", width: "100%" }}
            />
          </Pressable>
        )}
      />
    </View>
  );
}
