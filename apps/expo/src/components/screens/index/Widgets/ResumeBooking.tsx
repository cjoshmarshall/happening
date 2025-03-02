import { FlatList, Image, Pressable, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import XCircleIcon from "assets/icons/x-circle.svg";
import DanceLikeAManImage from "assets/images/dance-like-a-man.png";
import JokesBunkerImage from "assets/images/jokes-bunker.png";

export default function ResumeBooking() {
  const shows = [
    { id: 1, image: JokesBunkerImage },
    { id: 2, image: DanceLikeAManImage },
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
        Resume your booking
      </Text>
      <FlatList
        data={shows}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: scale(12), gap: scale(8) }}
        renderItem={({ item }) => (
          <View key={item.id} style={{ marginHorizontal: scale(6) }}>
            <Image
              source={item.image}
              style={{
                height: scale(64),
                width: scale(100),
                borderRadius: scale(8),
                resizeMode: "stretch",
              }}
            />
            <Pressable
              hitSlop={8}
              style={{
                position: "absolute",
                margin: 4,
                padding: 2,
                right: 0,
                backgroundColor: "white",
                borderRadius: 99,
              }}
              onPress={() => console.log("x press")}
            >
              <XCircleIcon />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
