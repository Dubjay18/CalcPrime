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
});
