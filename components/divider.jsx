import { View } from "react-native";
import { colors } from "../style";

export const Divider = () => {
  return (
    <View
      style={[
        {
          marginLeft: 28,
          marginRight: 12,
        },

        {
          borderBottomColor: colors.divider,
          borderBottomWidth: 0.8,
        },
      ]}
    ></View>
  );
};
