import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Platform,
  StyleSheet,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Styles } from "../constants/GlobalStyles";
// import {
//   Calculator,
//   ArrowRight2,
// } from "iconsax-react-native";
import { myColors } from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { GilroyText } from "../components/StyledText";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={("../assets/calculator")}/> */}
      <View style={{ height: 20 }} />
      <View style={{ height: 20 }} />
      <View style={Styles.settingsOptionContainer}>
        <View style={Styles.settingsOption}>
          {/* <Calculator
          size='32'
          color={myColors.clock}
          variant='Outline'
        /> */}
          <FontAwesome
            name='calculator'
            size={25}
            color={myColors.clock}
          />
          <View>
            <GilroyText
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "400",
              }}>
              Calculator Mode
            </GilroyText>
            <GilroyText
              style={{
                color: "gray",
                fontSize: 16,
                fontWeight: "400",
              }}>
              Standard
            </GilroyText>
          </View>
          {/* <ArrowRight2
          size='32'
          color={myColors.clock}
          variant='Outline'
        /> */}
          <View style={{ marginLeft: "auto" }}>
            <FontAwesome
              name='chevron-right'
              size={25}
              color={myColors.clock}
            />
          </View>
        </View>
      </View>
      <View style={{ width: "70%", marginTop: 60 }}>
        <GilroyText
          style={{ color: "gray", textAlign: "left" }}>
          GENERAL
        </GilroyText>
      </View>
      <View style={{ height: 20 }} />
      <View style={Styles.settingsOptionContainer}>
        <View style={Styles.settingsOption}>
          {/* <Calculator
          size='32'
          color={myColors.clock}
          variant='Outline'
        /> */}
          <FontAwesome
            name='paint-brush'
            size={25}
            color={myColors.clock}
          />
          <View>
            <GilroyText
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "400",
              }}>
              AppTheme
            </GilroyText>
          </View>
          {/* <ArrowRight2
          size='32'
          color={myColors.clock}
          variant='Outline'
        /> */}
          <View style={{ marginLeft: "auto" }}>
            <FontAwesome
              name='circle-o-notch'
              size={25}
              color={myColors.clock}
            />
          </View>
        </View>
      </View>
      <View style={{ height: 20 }} />
      <View style={Styles.settingsOptionContainer}>
        <View style={Styles.settingsOption}>
          {/* <Calculator
          size='32'
          color={myColors.clock}
          variant='Outline'
        /> */}
          <FontAwesome
            name='moon-o'
            size={25}
            color={myColors.clock}
          />
          <View>
            <GilroyText
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "400",
              }}>
              Dark mode
            </GilroyText>
          </View>
          {/* <ArrowRight2
          size='32'
          color={myColors.clock}
          variant='Outline'
        /> */}
          <View style={{ marginLeft: "auto" }}>
            <GilroyText style={{ color: "gray" }}>
              AUTO
            </GilroyText>
          </View>
        </View>
      </View>
      <View style={{ height: 20 }} />
      <View style={Styles.settingsOptionContainer}>
        <View style={Styles.settingsOption}>
          {/* <Calculator
          size='32'
          color={myColors.clock}
          variant='Outline'
        /> */}
          <FontAwesome
            name='info-circle'
            size={25}
            color={myColors.clock}
          />
          <View>
            <GilroyText
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "400",
              }}>
              Support
            </GilroyText>
          </View>
          {/* <ArrowRight2
          size='32'
          color={myColors.clock}
          variant='Outline'
        /> */}
          <View style={{ marginLeft: "auto" }}>
            <FontAwesome
              name='chevron-right'
              size={25}
              color={myColors.clock}
            />
          </View>
        </View>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar
        style={Platform.OS === "ios" ? "light" : "auto"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    background: myColors.cusbg,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
