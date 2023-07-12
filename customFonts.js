import React, { useEffect, useState } from "react";
import { Text, Alert } from "react-native";
import * as Font from "expo-font";

export default function FontLoader({ children }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "Msrt-Black": require("./Montserrat-Black.ttf"),
          "Msrt-BlackItalic": require("./Montserrat-BlackItalic.ttf"),
          "Msrt-Bold": require("./Montserrat-Bold.ttf"),
          "Msrt-BoldItalic": require("./Montserrat-BoldItalic.ttf"),
          "Msrt-Reg": require("./Montserrat-Regular.ttf"),
        });

        setFontLoaded(true);
      } catch (error) {
        Alert.alert("Error", "Fonts failed to load");
      }
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return children;
}
