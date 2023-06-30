import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  Pressable,
  useColorScheme,
  Image,
} from "react-native";

import Colors, { myColors } from "../../constants/Colors";
import { Styles } from "../../constants/GlobalStyles";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome
      size={28}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:
          Colors[colorScheme ?? "light"].tint,
      }}>
      <Tabs.Screen
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
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='code' color={color} />
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
    </Tabs>
  );
}
