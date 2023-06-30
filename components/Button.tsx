import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "../types";
import { Styles } from "../constants/GlobalStyles";

export default function Button({
  title,
  onPress,
  isPrimary,
  isSecondary,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        isPrimary
          ? Styles.btnPrimary
          : isSecondary
          ? Styles.btnSecondary
          : Styles.btnAccent
      }
      onPress={onPress}>
      <Text style={Styles.defaultText}>{title}</Text>
    </TouchableOpacity>
  );
}
