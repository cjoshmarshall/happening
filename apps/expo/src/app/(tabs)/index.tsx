import { useCallback } from "react";
import { router, useFocusEffect } from "expo-router";

export default function Tabs() {
  useFocusEffect(
    useCallback(() => {
      router.replace("/home");
    }, []),
  );
  return null;
}
