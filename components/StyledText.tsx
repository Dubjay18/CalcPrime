import { Text, TextProps } from "./Themed";

export function GilroyText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "Gilroy" }]}
    />
  );
}
