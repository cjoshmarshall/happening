import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { scale } from "react-native-size-matters";

import { capitalizeFirstLetter, COLORS } from "~/utils/constants";

export default function Tabs() {
  const [selectedTabId, setSelectedTabId] = useState(1);

  const tabs = [
    { id: 1, tab: "entertainment" },
    { id: 2, tab: "academic" },
    { id: 3, tab: "volunteering" },
  ];

  return (
    <View
      style={{
        marginTop: scale(20),
        marginHorizontal: scale(20),
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {tabs.map((item) => (
        <Pressable
          key={item.id}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "33%",
            paddingVertical: scale(4),
            padding: scale(10),
            backgroundColor:
              selectedTabId === item.id ? "#F9F5FD" : COLORS.background,
            borderWidth: 1,
            borderTopLeftRadius: item.id === 1 ? scale(8) : undefined,
            borderBottomLeftRadius: item.id === 1 ? scale(8) : undefined,
            borderTopRightRadius: item.id === 3 ? scale(8) : undefined,
            borderBottomRightRadius: item.id === 3 ? scale(8) : undefined,
            borderColor: selectedTabId === item.id ? COLORS.primary : "#EEE6F9",
            paddingHorizontal: "auto",
          }}
          onPress={() => setSelectedTabId(item.id)}
        >
          <Text
            style={{
              fontFamily:
                selectedTabId === item.id
                  ? "Poppins_500Medium"
                  : "Poppins_400Regular",
              fontSize: scale(11),
              lineHeight: scale(18),
              color:
                selectedTabId === item.id ? COLORS.primary : COLORS.foreground,
            }}
          >
            {capitalizeFirstLetter(item.tab)}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
