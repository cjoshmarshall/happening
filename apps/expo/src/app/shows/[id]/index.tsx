import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { Link, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import InfoCircleIcon from "assets/icons/info-circle.svg";
import ArrahmanImage from "assets/images/arrahman.png";

import Button from "~/components/widgets/Button";
import { COLORS, TAB_HEIGHT } from "~/utils/constants";

export default function Show() {
  const { id } = useLocalSearchParams();

  const [selectedSlot, setSelectedSlot] = useState<{
    locationId: number;
    slotId: number;
  } | null>(null);

  const event = {
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
    venues: [
      {
        id: 1,
        name: "North Avenue Ground",
        city: "Bangalore",
        slots: [{ id: 1, time: "11:00 am" }],
        eventClasses: [
          { id: 1, name: "platinum", noOfSeats: 8, price: 1480 },
          { id: 2, name: "gold", noOfSeats: 5, price: 800 },
          { id: 3, name: "silver", noOfSeats: 3, price: 480 },
        ],
      },
      {
        id: 2,
        name: "Phoenix Mall",
        city: "Bangalore",
        slots: [{ id: 2, time: "5:00 pm" }],
        eventClasses: [
          { id: 1, name: "platinum", noOfSeats: 10, price: 1480 },
          { id: 2, name: "gold", noOfSeats: 10, price: 800 },
          { id: 3, name: "silver", noOfSeats: 10, price: 480 },
        ],
      },
    ],
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: "110%",
          marginBottom: scale(TAB_HEIGHT),
          paddingBottom: 100,
        }}
      >
        <Image
          source={event.featuredImage}
          style={{ height: scale(200), width: "100%" }}
          resizeMode="cover"
        />
        <Text
          style={{
            marginTop: scale(14),
            marginBottom: scale(10),
            marginHorizontal: scale(20),
            fontFamily: "Poppins_500Medium",
            fontSize: scale(16),
            lineHeight: scale(24),
          }}
        >
          {event.name}
        </Text>
        <View
          style={{
            marginHorizontal: scale(20),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: scale(12),
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="heart" size={16} color={COLORS.primary} />
              <Text
                style={{
                  fontSize: scale(12),
                  lineHeight: scale(14),
                  color: COLORS.primary,
                }}
              >
                {"  "}
                {event.interested} interested
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
                {"  "}
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
                {"  "}
                Fast filling
              </Text>
            </View>
          </View>
          <AntDesign name="hearto" size={16} color={COLORS.foreground} />
        </View>
        <View
          style={{
            marginTop: scale(16),
            marginHorizontal: scale(20),
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            rowGap: scale(10),
            columnGap: scale(16),
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome6 name="hourglass-start" size={14} color="#5F6368" />
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              {"  "}
              {event.duration}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name="user-alt" size={14} color="#5F6368" />
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              {"  "}
              {event.additionalImage} years+
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="music-circle"
              size={18}
              color="#5F6368"
            />
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              {"  "}
              {event.genres.map((item) => item.name).join(", ")}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="globe" size={16} color="#5F6368" />
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              {"  "}
              {event.languages.map((item) => item.name).join(", ")}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: scale(16), marginHorizontal: scale(20) }}>
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
              {"  "}
              Sat 26.Oct.2024
            </Text>
          </View>
        </View>
        <View style={{ marginTop: scale(16), marginHorizontal: scale(20) }}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            Price:{" "}
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                color: "#3C3C3C",
              }}
            >
              ₹{event.venues[0]?.eventClasses.at(-1)?.price} - ₹
              {event.venues[0]?.eventClasses[0]?.price}
            </Text>
          </Text>
        </View>
        {event.venues.map((location, index) => (
          <View
            key={location.id}
            style={{
              marginTop: index === 0 ? scale(16) : undefined,
              marginHorizontal: scale(20),
              paddingVertical: scale(12),
              borderTopWidth: index === 0 ? 1 : undefined,
              borderBottomWidth: 1,
              borderColor: "#E8DFF4",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome6 name="location-dot" size={16} color="#5F6368" />
              <Text
                style={{
                  marginHorizontal: scale(8),
                  fontFamily: "Poppins_500Medium",
                  fontSize: scale(12),
                  lineHeight: scale(16),
                  color: "#3C3C3C",
                }}
              >
                {location.name}, {location.city}
              </Text>
              <InfoCircleIcon />
            </View>
            <View
              style={{
                marginVertical: scale(16),
                flexDirection: "row",
                alignItems: "center",
                gap: scale(8),
                flexWrap: "wrap",
              }}
            >
              {location.slots.map((slot) => (
                <Pressable
                  key={slot.id}
                  style={{
                    width: "auto",
                    paddingVertical: scale(3),
                    paddingHorizontal: scale(6),
                    backgroundColor: "#FBFBFB",
                    borderWidth: 1,
                    borderRadius: scale(16),
                    borderColor:
                      selectedSlot?.locationId === location.id &&
                      selectedSlot.slotId === slot.id
                        ? COLORS.primary
                        : "#F1E6FF",
                  }}
                  hitSlop={8}
                  onPress={() =>
                    setSelectedSlot({
                      locationId: location.id,
                      slotId: slot.id,
                    })
                  }
                >
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontSize: scale(12),
                      lineHeight: scale(18),
                      color: "#757575",
                    }}
                  >
                    {slot.time}
                  </Text>
                </Pressable>
              ))}
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: scale(12),
              }}
            >
              <MaterialCommunityIcons
                name="parking"
                size={16}
                color="#5F6368"
              />
              <FontAwesome name="wheelchair-alt" size={16} color="#5F6368" />
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={16}
                color="#5F6368"
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: scale(4),
                }}
              >
                <MaterialIcons name="map" size={16} color="#5F6368" />
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontSize: scale(12),
                    lineHeight: scale(18),
                    color: "#757575",
                    textDecorationLine: "underline",
                    textDecorationStyle: "dashed",
                    textDecorationColor: "#757575",
                  }}
                >
                  4kms nearby
                </Text>
              </View>
            </View>
          </View>
        ))}
        <View style={{ marginHorizontal: scale(20) }}>
          <Text
            style={{
              marginTop: scale(16),
              fontFamily: "Poppins_500Medium",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            Policies & Rules
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: scale(8),
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              Follow organiser guidelines
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: scale(8),
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(20),
                color: "#757575",
              }}
            >
              Drugs, smoke and alcohol consumption prohibited
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: scale(8),
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
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
              marginTop: scale(16),
              fontFamily: "Poppins_500Medium",
              fontSize: scale(12),
              lineHeight: scale(14),
              color: "#757575",
            }}
          >
            Offers for you
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: scale(8),
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              Paytm 5% off for min value of ₹ 1500
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: scale(8),
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                marginLeft: 8,
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                lineHeight: scale(16),
                color: "#757575",
              }}
            >
              Use HSBC CC for 10% discount on any booking
            </Text>
          </View>
        </View>
      </ScrollView>
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
          backgroundColor: COLORS.background,
        }}
      >
        <View></View>
        <Text
          style={{
            marginLeft: scale(52),
            fontFamily: "Poppins_400Regular",
            color: "#757575",
          }}
        >
          Select time slot to proceed
        </Text>
        <Link href={`/shows/${id?.toString()}/select-seats`} asChild>
          <Button
            style={{ height: scale(32) }}
            textStyle={{
              paddingHorizontal: 16,
              fontSize: scale(13),
            }}
            disabled={!selectedSlot}
          >
            Proceed
          </Button>
        </Link>
      </View>
    </SafeAreaView>
  );
}
