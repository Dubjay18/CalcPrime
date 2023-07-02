import { StyleSheet } from "react-native";
import Colors, { myColors } from "./Colors";

export const Styles = StyleSheet.create({
  // Button
  btnPrimary: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.primary,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnSecondary: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.secondary,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  clockLogo: {
    width: 70,
    height: 70,
  },
  btnAccent: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.accent,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  defaultText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  settingsOption: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
    padding: 10,

    color: Colors.light.text,
    width: "100%",
    alignItems: "center",
  },
  settingsOptionContainer: {
    display: "flex",

    width: 350,
    borderRadius: 20,
  },
});
