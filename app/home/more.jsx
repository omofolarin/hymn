import { SafeAreaView, View } from "react-native";
import {
  colorStyles,
  componentStyles,
  layoutStyle,
  spacingStyle,
  textStyles,
} from "../../style";

import { Divider } from "../../components";
import { SvgXml } from "react-native-svg";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

const ListItem = ({ leading, trailing, title, onPress, hideDivider }) => {
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

export default function More() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={[
            componentStyles.cardContainer,
            spacingStyle.my28,
            spacingStyle.mx16,
            colorStyles.bgWhite,
            { width: "92%" },
            { borderRadius: 8 },
          ]}
        >
          <ListItem
            title="Settings"
            leading={
              <SvgXml
                xml={`<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3555 25.0859H13.7227C14.625 25.0859 15.3164 24.5352 15.5273 23.668L16.0312 21.4766L16.4062 21.3477L18.3164 22.5195C19.0781 23 19.957 22.8828 20.6016 22.2383L22.2422 20.6094C22.8867 19.9648 23.0039 19.0742 22.5234 18.3242L21.3281 16.4258L21.4688 16.0742L23.6602 15.5586C24.5156 15.3477 25.0781 14.6445 25.0781 13.7539V11.4336C25.0781 10.543 24.5273 9.83984 23.6602 9.62891L21.4922 9.10156L21.3398 8.72656L22.5352 6.82812C23.0156 6.07812 22.8984 5.19922 22.2539 4.54297L20.6133 2.90234C19.9805 2.26953 19.1016 2.15234 18.3398 2.62109L16.4297 3.79297L16.0312 3.64062L15.5273 1.44922C15.3164 0.582031 14.625 0.03125 13.7227 0.03125H11.3555C10.4531 0.03125 9.76172 0.582031 9.55078 1.44922L9.03516 3.64062L8.63672 3.79297L6.73828 2.62109C5.97656 2.15234 5.08594 2.26953 4.45312 2.90234L2.82422 4.54297C2.17969 5.19922 2.05078 6.07812 2.54297 6.82812L3.72656 8.72656L3.58594 9.10156L1.41797 9.62891C0.550781 9.83984 0 10.543 0 11.4336V13.7539C0 14.6445 0.5625 15.3477 1.41797 15.5586L3.60938 16.0742L3.73828 16.4258L2.55469 18.3242C2.0625 19.0742 2.19141 19.9648 2.83594 20.6094L4.46484 22.2383C5.10938 22.8828 6 23 6.76172 22.5195L8.66016 21.3477L9.03516 21.4766L9.55078 23.668C9.76172 24.5352 10.4531 25.0859 11.3555 25.0859ZM11.543 23.2578C11.3438 23.2578 11.2383 23.1758 11.2031 22.9883L10.5 20.082C9.78516 19.9062 9.11719 19.625 8.61328 19.3086L6.05859 20.8789C5.91797 20.9844 5.76562 20.9609 5.625 20.8203L4.24219 19.4375C4.11328 19.3086 4.10156 19.168 4.19531 19.0039L5.76562 16.4727C5.49609 15.9805 5.19141 15.3125 5.00391 14.5977L2.09766 13.9062C1.91016 13.8711 1.82812 13.7656 1.82812 13.5664V11.6094C1.82812 11.3984 1.89844 11.3047 2.09766 11.2695L4.99219 10.5664C5.17969 9.80469 5.53125 9.11328 5.74219 8.67969L4.18359 6.14844C4.07812 5.97266 4.08984 5.83203 4.21875 5.69141L5.61328 4.33203C5.75391 4.19141 5.88281 4.16797 6.05859 4.27344L8.58984 5.80859C9.09375 5.52734 9.80859 5.23438 10.5117 5.03516L11.2031 2.12891C11.2383 1.94141 11.3438 1.85938 11.543 1.85938H13.5352C13.7344 1.85938 13.8398 1.94141 13.8633 2.12891L14.5781 5.05859C15.3047 5.24609 15.9375 5.53906 16.4648 5.82031L19.0078 4.27344C19.1953 4.16797 19.3125 4.19141 19.4648 4.33203L20.8477 5.69141C20.9883 5.83203 20.9883 5.97266 20.8828 6.14844L19.3242 8.67969C19.5469 9.11328 19.8867 9.80469 20.0742 10.5664L22.9805 11.2695C23.168 11.3047 23.25 11.3984 23.25 11.6094V13.5664C23.25 13.7656 23.1562 13.8711 22.9805 13.9062L20.0625 14.5977C19.875 15.3125 19.582 15.9805 19.3008 16.4727L20.8711 19.0039C20.9648 19.168 20.9648 19.3086 20.8242 19.4375L19.4531 20.8203C19.3008 20.9609 19.1602 20.9844 19.0078 20.8789L16.4531 19.3086C15.9492 19.625 15.293 19.9062 14.5781 20.082L13.8633 22.9883C13.8398 23.1758 13.7344 23.2578 13.5352 23.2578H11.543ZM12.5391 17.0352C14.9883 17.0352 17.0039 15.0195 17.0039 12.5586C17.0039 10.1211 14.9883 8.10547 12.5391 8.10547C10.0898 8.10547 8.0625 10.1211 8.0625 12.5586C8.0625 15.0078 10.0781 17.0352 12.5391 17.0352ZM12.5391 15.2188C11.0859 15.2188 9.89062 14.0234 9.89062 12.5586C9.89062 11.1172 11.0859 9.92188 12.5391 9.92188C13.9688 9.92188 15.1641 11.1172 15.1641 12.5586C15.1641 14.0117 13.9688 15.2188 12.5391 15.2188Z" fill="#1B263B"/>
                      </svg>
                      `}
              />
            }
          />
          <ListItem
            leading={
              <SvgXml
                xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.8333 9.16663H4.16667C3.24619 9.16663 2.5 9.91282 2.5 10.8333V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V10.8333C17.5 9.91282 16.7538 9.16663 15.8333 9.16663Z" stroke="#FA5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.83325 9.16663V5.83329C5.83325 4.72822 6.27224 3.66842 7.05364 2.88701C7.83504 2.10561 8.89485 1.66663 9.99992 1.66663C11.105 1.66663 12.1648 2.10561 12.9462 2.88701C13.7276 3.66842 14.1666 4.72822 14.1666 5.83329V9.16663" stroke="#8D99AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>`}
              />
            }
            title="Privacy Policy"
          />
          <ListItem
            leading={
              <SvgXml
                xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3154 14.1014 15.6903 13.4763C15.0652 12.8512 14.2173 12.5 13.3333 12.5H6.66659C5.78253 12.5 4.93468 12.8512 4.30956 13.4763C3.68444 14.1014 3.33325 14.9493 3.33325 15.8333V17.5" stroke="#75C2F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M10.0001 9.16667C11.841 9.16667 13.3334 7.67428 13.3334 5.83333C13.3334 3.99238 11.841 2.5 10.0001 2.5C8.15913 2.5 6.66675 3.99238 6.66675 5.83333C6.66675 7.67428 8.15913 9.16667 10.0001 9.16667Z" stroke="#75C2F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`}
              />
            }
            title="Invite Friends"
          />
          <ListItem
            leading={
              <SvgXml
                xml={`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#FF8800"/>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              `}
              />
            }
            title="Rate Us"
          />
          <ListItem
            leading={
              <SvgXml
                xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#5F81E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#5F81E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#5F81E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.59009 13.51L15.4201 17.49" stroke="#5F81E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.4101 6.51001L8.59009 10.49" stroke="#5F81E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
              `}
              />
            }
            title="About Us"
            hideDivider
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
