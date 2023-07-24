import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import {
  colorStyles,
  componentStyles,
  layoutStyle,
  spacingStyle,
  textStyles,
} from "../../style";

export default function Favorites() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={[
          componentStyles.cardContainer,
          spacingStyle.my12,
          colorStyles.bgWhite,
        ]}
      ></View>
    </SafeAreaView>
  );
}
