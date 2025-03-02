import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { Link, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import InfoCircleIcon from "assets/icons/info-circle.svg";
import ArrahmanImage from "assets/images/arrahman.png";

import Button from "~/component/Button";
import { COLORS, TAB_HEIGHT } from "~/utils/constants";

export default function Show() {
  const { id } = useLocalSearchParams();
  const { height } = useWindowDimensions();

  const events = [
    {
      id: 1,
      name: "The complete AR Rahman Show",
      featuredImage: ArrahmanImage,
      additionalImage: ArrahmanImage,
      interested: 157,
      duration: "2hr 30m",
      ageRestriction: 5,
      genres: [
        { id: 1, name: "Bollywood" },
        { id: 2, name: "Retro" },
      ],
      languages: [
        { id: 1, name: "Hindi" },
        { id: 2, name: "Tamil" },
      ],
      eventClasses: [
        { id: 1, name: "platinum", noOfSeats: 8, price: 1480 },
        { id: 2, name: "gold", noOfSeats: 5, price: 800 },
        { id: 3, name: "silver", noOfSeats: 3, price: 480 },
      ],
      location: { id: 1, name: "North Avenue Ground", city: "Bangalore" },
      slots: [
        { id: 1, time: "7:00 pm" },
        { id: 2, time: "10:00 pm" },
      ],
    },
  ];

  const handlePress = () => {};

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Image
        source={ArrahmanImage}
        style={{ height: scale(200), width: "100%" }}
        resizeMode="cover"
      />
      <Text
        style={{
          marginVertical: scale(14),
          marginHorizontal: scale(20),
          fontFamily: "Poppins_500Medium",
          fontSize: scale(16),
          lineHeight: scale(24),
        }}
      >
        The complete AR Rahman Show
      </Text>
      <View
        style={{
          marginHorizontal: scale(20),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="heart" size={16} color={COLORS.primary} />
          <Text
            style={{
              fontSize: scale(12),
              lineHeight: scale(14),
              color: COLORS.primary,
            }}
          >
            {" "}
            157 interested
          </Text>
        </View>
        <View
          style={{
            padding: scale(6),
            paddingHorizontal: scale(8),
            flexDirection: "row",
            alignItems: "center",
            borderRadius: scale(4),
            backgroundColor: "#F9F5FD",
          }}
        >
          <AntDesign name="playcircleo" size={12} color={COLORS.primary} />
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(10),
              lineHeight: scale(14),
            }}
          >
            {" "}
            Teaser
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="flash-outline" size={14} color="#FF935B" />
          <Text
            style={{
              fontSize: scale(10),
              lineHeight: scale(14),
              color: "#FF935B",
            }}
          >
            {" "}
            Fast filling
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: scale(20), flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome6 name="hourglass-start" size={14} color="#5F6368" />
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            {" "}
            2h 30m
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="user-alt" size={14} color="#5F6368" />
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            {" "}
            5 years+
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="music-circle"
            size={16}
            color="#5F6368"
          />
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            {" "}
            Bollywood, Retro
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: scale(20) }}>
        <View style={{ flexDirection: "row" }}>
          <Fontisto name="world-o" size={24} color="#5F6368" />
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            {" "}
            Hindi, Tamil
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: scale(20) }}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome6 name="calendar" size={14} color="#5F6368" />
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            {" "}
            Sat 26.Oct.2024
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: scale(20) }}>
        <Text
          style={{
            // fontFamily: "Poppins_400Regular",
            fontSize: scale(12),
            lineHeight: scale(14),
          }}
        >
          Price: ₹480 - ₹1580
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: scale(20),
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#E8DFF4",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome6 name="location-dot" size={16} color="#5F6368" />
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: scale(12),
              lineHeight: scale(14),
            }}
          >
            North Avenue Grounds, Bangalore
          </Text>
          <InfoCircleIcon />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", gap: scale(4) }}
        >
          <Pressable
            style={{
              width: "auto",
              paddingVertical: scale(2),
              paddingHorizontal: scale(6),
              backgroundColor: "#FBFBFB",
              borderWidth: 1,
              borderRadius: scale(16),
              borderColor: "#F1E6FF",
            }}
            hitSlop={8}
            onPress={handlePress}
          >
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(18),
              }}
            >
              7:00 pm
            </Text>
          </Pressable>
          <Text
            style={{
              fontSize: scale(10),
              lineHeight: scale(14),
              color: "#FF935B",
            }}
          >
            16 seast left
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: scale(20) }}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: scale(12),
            lineHeight: scale(14),
            color: "#757575",
          }}
        >
          Policies & Rules
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 14,
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            {"\u2022"}
          </Text>
          <Text
            style={{
              marginLeft: 14,
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            Follow organiser guidelines
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 14,
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            {"\u2022"}
          </Text>
          <Text
            style={{
              marginLeft: 14,
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            Drugs, smoke and alcohol consumption prohibited
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 14,
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            {"\u2022"}
          </Text>
          <Text
            style={{
              marginLeft: 14,
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            Kids below 5 years not recommended
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: scale(20) }}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: scale(12),
            lineHeight: scale(14),
            color: "#757575",
          }}
        >
          Offers for you
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 14,
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            {"\u2022"}
          </Text>
          <Text
            style={{
              marginLeft: 14,
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            Paytm 5% off for min value of ₹ 1500
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 14,
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            {"\u2022"}
          </Text>
          <Text
            style={{
              marginLeft: 14,
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            Use HSBC CC for 10% discount on any booking
          </Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: scale(TAB_HEIGHT),
          width: "100%",
          flexDirection: "row",
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: scale(12),
        }}
      >
        <View></View>
        <Text style={{ marginLeft: scale(56) }}>
          Select time slot to proceed
        </Text>
        <Link href={`/shows/${id?.toString()}/select-seats`} asChild>
          <Button
            style={{ height: scale(26) }}
            textStyle={{
              paddingHorizontal: 16,
              fontSize: scale(13),
            }}
          >
            Proceed
          </Button>
        </Link>
      </View>
    </SafeAreaView>
  );
}
