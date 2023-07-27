import {
  componentStyles,
  layoutStyle,
  spacingStyle,
  textStyles,
} from "../style";

import { Divider } from "../components/divider";
import { SvgXml } from "react-native-svg";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";

export const ListItem = ({
  leading,
  trailing,
  title,
  onPress,
  hideDivider,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <>
        <View
          style={[
            componentStyles.cardContainer,
            spacingStyle.py16,
            spacingStyle.px16,
            layoutStyle.row,
            layoutStyle.alignCenter,
            layoutStyle.justifyBetween,
          ]}
        >
          <View>
            <Text style={[textStyles.bodyLg, spacingStyle.px8]}>{leading}</Text>
          </View>
          <Text
            style={[textStyles.bodyLg, { textAlign: "left", width: "80%" }]}
          >
            {title}
          </Text>
          <View>
            {trailing ? (
              trailing
            ) : (
              <SvgXml
                xml={`<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33325 2.08936L10.6666 6.86504L5.33325 11.6407" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                    `}
              />
            )}
          </View>
        </View>

        {!hideDivider && <Divider />}
      </>
    </TouchableOpacity>
  );
};
