import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useLocalSearchParams } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import GoldTicketIcon from "assets/icons/gold-ticket.svg";
import PlatinumTicketIcon from "assets/icons/platinum-ticket.svg";
import SilverTicketIcon from "assets/icons/silver-ticket.svg";

import Button from "~/component/Button";
import { capitalizeFirstLetter, COLORS, TAB_HEIGHT } from "~/utils/constants";

export default function SelectSeats() {
  const { id } = useLocalSearchParams();

  const ticketsAvailable = {
    platinum: 8,
    gold: 5,
    silver: 3,
  };

  const seats = [
    {
      id: 1,
      name: "platinum",
      icon: <PlatinumTicketIcon />,
      price: 1480,
      ticketsAvailable: 8,
    },
    {
      id: 2,
      name: "gold",
      icon: <GoldTicketIcon />,
      price: 800,
      ticketsAvailable: 5,
    },
    {
      id: 3,
      name: "silver",
      icon: <SilverTicketIcon />,
      price: 400,
      ticketsAvailable: 3,
    },
  ];

  const [ticketCount, setTicketCount] = useState({
    platinum: 1,
    gold: 0,
    silver: 0,
  });

  const totalPrice = seats.reduce(
    (sum, { name, price }) =>
      sum + ticketCount[name as keyof typeof ticketsAvailable] * price,
    0,
  );

  const totalSeats = Object.values(ticketCount).reduce(
    (sum, count) => sum + count,
    0,
  );

  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          marginTop: scale(6),
          marginBottom: scale(16),
          marginHorizontal: scale(20),
        }}
      >
        <View
          style={{
            height: scale(50),
            backgroundColor: "#FBFBFB",
            borderWidth: 1,
            borderColor: "#EEE6F9",
            borderTopLeftRadius: scale(8),
            borderTopRightRadius: scale(8),
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: scale(130),
              height: scale(26),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E6E6E6",
              borderWidth: 1,
              borderRadius: scale(4),
              borderColor: "#EEE6F9",
            }}
          >
            <Text style={{ lineHeight: scale(14), color: "#7A7A7A" }}>
              Stage
            </Text>
          </View>
        </View>
        {seats.map((item) => {
          let colors: [string, string];
          let height: number;
          switch (item.name) {
            case "platinum":
              colors = ["#ABAAD4", "#59586E"];
              height = scale(32);
              break;
            case "gold":
              colors = ["#FAC38C", "#947353"];
              height = scale(42);
              break;
            case "silver":
              colors = ["#DBDBDB", "#757575"];
              height = scale(70);
              break;
            default:
              colors = ["#DBDBDB", "#757575"];
              height = scale(32);
          }
          return (
            <LinearGradient
              key={item.id}
              colors={colors}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height,
                borderWidth: 1,
                borderColor: "#EEE6F9",
                borderBottomLeftRadius:
                  item.name === "silver" ? scale(8) : undefined,
                borderBottomRightRadius:
                  item.name === "silver" ? scale(8) : undefined,
              }}
            >
              <Text
                style={{
                  fontSize: scale(12),
                  lineHeight: scale(14),
                  color: COLORS.background,
                }}
              >
                {capitalizeFirstLetter(item.name)} Class ₹ {item.price}
              </Text>
            </LinearGradient>
          );
        })}
        <Text
          style={{
            paddingVertical: scale(8),
            lineHeight: scale(14),
            color: "#7A7A7A",
            textAlign: "center",
          }}
        >
          Seats Layout
        </Text>
      </View>
      {seats.map((item) => {
        const nameKey = item.name as keyof typeof ticketsAvailable;
        return (
          <View
            key={item.id}
            style={{
              padding: scale(16),
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: "#EEE6F9",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: scale(8),
              }}
            >
              {item.icon}
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: scale(12),
                  lineHeight: scale(16),
                }}
              >
                {capitalizeFirstLetter(nameKey)} Class
              </Text>
              <Text
                style={{
                  fontSize: scale(12),
                  lineHeight: scale(13),
                }}
              >
                ₹ {item.price}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: scale(10),
                  lineHeight: scale(16),
                  color: "#FF935B",
                }}
              >
                {ticketsAvailable[nameKey]} seats left
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable
                style={{
                  height: scale(20),
                  width: scale(20),
                  backgroundColor: "#F9F5FD",
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  borderRadius: scale(4),
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: ticketCount[nameKey] <= 0 ? 0.2 : 1,
                }}
                disabled={ticketCount[nameKey] <= 0}
                hitSlop={8}
                onPress={() =>
                  setTicketCount((prev) => ({
                    ...prev,
                    [nameKey]: prev[nameKey] - 1,
                  }))
                }
              >
                <FontAwesome6 name="minus" size={12} color={COLORS.primary} />
              </Pressable>
              <Text
                style={{
                  width: scale(32),
                  fontSize: scale(12),
                  lineHeight: scale(14),
                  textAlign: "center",
                }}
              >
                {ticketCount[nameKey]}
              </Text>
              <Pressable
                style={{
                  height: scale(20),
                  width: scale(20),
                  backgroundColor: "#F9F5FD",
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  borderRadius: scale(4),
                  alignItems: "center",
                  justifyContent: "center",
                  opacity:
                    ticketCount[nameKey] >= ticketsAvailable[nameKey] ? 0.2 : 1,
                }}
                disabled={ticketCount[nameKey] >= ticketsAvailable[nameKey]}
                hitSlop={8}
                onPress={() =>
                  setTicketCount((prev) => ({
                    ...prev,
                    [nameKey]: prev[nameKey] + 1,
                  }))
                }
              >
                <FontAwesome6 name="plus" size={12} color={COLORS.primary} />
              </Pressable>
            </View>
          </View>
        );
      })}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: scale(TAB_HEIGHT),
          width: "100%",
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: scale(12),
        }}
      >
        <View style={{ flexDirection: "column", gap: scale(4) }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: scale(6),
            }}
          >
            <Text
              style={{
                fontSize: scale(16),
                lineHeight: scale(18),
                color: COLORS.primary,
              }}
            >
              ₹{" "}
              <Text style={{ fontFamily: "Poppins_600SemiBold" }}>
                {totalPrice}
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: scale(12),
                color: "#757575",
              }}
            >
              for {totalSeats} seat&#40;s&#4;
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: scale(12),
              lineHeight: scale(18),
              color: "#757575",
            }}
          >
            +199 tax & fees
          </Text>
        </View>
        <Link href={`/shows/${id?.toString()}/end`} asChild>
          <Button
            style={{ height: scale(26) }}
            textStyle={{
              paddingHorizontal: 16,
              fontSize: scale(13),
            }}
            disabled={totalSeats === 0}
          >
            Pay Now
          </Button>
        </Link>
      </View>
    </View>
  );
}
