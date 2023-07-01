import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import { Link, Tabs } from "expo-router";
import {
  Pressable,
  useColorScheme,
  Image,
} from "react-native";
import { myColors } from "../constants/Colors";
import { Text } from "../components/Themed";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/FontsFree-Net-Gilroy2.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider
        value={
          colorScheme === "dark" ? DarkTheme : DefaultTheme
        }>
        <Stack>
          <Stack.Screen
            name='index'
            options={{
              headerTitle: () => (
                // <Image

                //   style={Styles.clockLogo}
                //   source={require("../../assets/images/clock.svg")}
                // />
                <FontAwesome
                  name='clock-o'
                  size={25}
                  color={myColors.clock}
                  // style={{
                  //   marginRight: 15,
                  //   opacity: pressed ? 0.5 : 1,
                  // }}
                />
              ),

              headerRight: () => (
                <Link href='/modal' asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name='info-circle'
                        size={25}
                        color={myColors.clock}
                        style={{
                          marginRight: 15,
                          opacity: pressed ? 0.5 : 1,
                        }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
            }}
          />
          <Stack.Screen
            name='modal'
            options={{
              presentation: "modal",
              headerTitle: () => (
                <Text
                  style={{
                    color: "black",
                    fontSize: 24,
                    fontWeight: "400",
                  }}>
                  Settings
                </Text>
              ),
            }}
          />
        </Stack>
      </ThemeProvider>
    </>
  );
}
