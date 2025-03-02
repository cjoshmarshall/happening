import type { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { scale } from "react-native-size-matters";
import { router, Tabs } from "expo-router";
import AccountActiveIcon from "assets/icons/account-active.svg";
import AccountIcon from "assets/icons/account.svg";
import BellIcon from "assets/icons/bell.svg";
import BookingActiveIcon from "assets/icons/booking-active.svg";
import BookingIcon from "assets/icons/booking.svg";
import HomeActiveIcon from "assets/icons/home-active.svg";
import HomeIcon from "assets/icons/home.svg";
import SearchActiveIcon from "assets/icons/search-active.svg";
import SearchIcon from "assets/icons/search.svg";
import WishlistActiveIcon from "assets/icons/wishlist-active.svg";
import WishlistIcon from "assets/icons/wishlist.svg";

import { COLORS, TAB_HEIGHT } from "~/utils/constants";
import { supabase } from "~/utils/supabase";

export default function TabsLayout() {
  // const [session, setSession] = useState<Session | null>(null);

  // useEffect(() => {
  //   void supabase.auth.onAuthStateChange((_, session) => {
  //     if (!session) {
  //       router.replace("/auth/entry");
  //     } else setSession(session);
  //   });
  // }, []);

  // if (!session) return null;

  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: { position: "absolute", height: scale(TAB_HEIGHT) },
        tabBarItemStyle: { paddingVertical: scale(16) },
        tabBarLabelStyle: {
          fontFamily: "Poppins_400Regular",
          fontSize: scale(10),
        },
        headerTitleAlign: "center",
        headerTintColor: COLORS.foreground,
        headerLeft: () => null,
        headerLeftContainerStyle: { paddingLeft: scale(16) },
        headerRight: () => <BellIcon />,
        headerRightContainerStyle: { paddingRight: scale(20) },
        headerShadowVisible: false,
        unmountOnBlur: true,
      }}
      sceneContainerStyle={{ backgroundColor: COLORS.background }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused ? <HomeActiveIcon /> : <HomeIcon />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          headerTitle: "Booking",
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused ? <BookingActiveIcon /> : <BookingIcon />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerTitle: "Search",
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused ? <SearchActiveIcon /> : <SearchIcon />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          headerTitle: "Wishlist",
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused ? <WishlistActiveIcon /> : <WishlistIcon />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerTitle: "Account",
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused ? <AccountActiveIcon /> : <AccountIcon />,
        }}
      />
      <Tabs.Screen name="index" options={{ href: null, headerShown: false }} />
    </Tabs>
  );
}
