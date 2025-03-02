import { FlatList, ImageBackground, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import TwentyOffGroupImage from "assets/images/20-off-group.png";
import BuyTwoGetOneImage from "assets/images/buy-two-get-one-offer.png";
import EarlyBirdOfferImage from "assets/images/early-bird-offer.png";
import IndNzTestOfferImage from "assets/images/ind-nz-test-offer.png";

import { COLORS } from "~/utils/constants";

export default function Offers() {
  const offers = [
    { id: 1, offer: "Early bird offer of 10%", image: EarlyBirdOfferImage },
    { id: 2, offer: "₹250 off IND-NZ Test", image: IndNzTestOfferImage },
    { id: 3, offer: "Buy 2 get 1 free offer", image: BuyTwoGetOneImage },
    { id: 4, offer: "20% Off for group", image: TwentyOffGroupImage },
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
        Offers for you
      </Text>
      <FlatList
        data={offers}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: scale(12) }}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={{
              marginHorizontal: scale(6),
              justifyContent: "center",
              alignItems: "center",
              height: scale(64),
              width: scale(110),
            }}
            imageStyle={{ borderRadius: scale(8) }}
          >
            <Text
              style={{
                width: scale(74),
                fontFamily: "Poppins_600SemiBold",
                fontSize: scale(12),
                lineHeight: scale(20),
                color: COLORS.background,
                textAlign: "center",
                textShadowRadius: 1,
                textShadowOffset: {
                  width: 2,
                  height: 2,
                },
              }}
            >
              {item.offer}
            </Text>
          </ImageBackground>
        )}
      />
    </View>
  );
}
