import { Platform, Text, View } from "react-native";
import { colors, textStyles } from "../../style";

import { SvgXml } from "react-native-svg";
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeLayout() {
  const tabStyle = {
    tabBarStyle: {
      height: Platform.OS == "ios" ? 90 : 60,
    },
  };
  return (
    <Tabs
      safeAreaInsets={{ bottom: Platform.select({ android: 4 }) }}
      sceneContainerStyle={{ backgroundColor: colors.surface.light }}
    >
      <Tabs.Screen
        name="index"
        options={{
          ...tabStyle,
          href: "/home",
          headerLeft: (props) => (
            <TouchableOpacity
              style={{
                marginLeft: 16,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[textStyles.body, textStyles.bodyLg]}>
                RCCG Church
              </Text>

              <View style={{ paddingHorizontal: 8 }}>
                <SvgXml
                  xml={`
                  <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.69043 1.04114L9.59449 9.13594L17.6893 1.23189" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              `}
                  width={20}
                  height={20}
                />
              </View>
            </TouchableOpacity>
          ),
          headerTitle: (props) => null,

          tabBarLabel: (props) => (
            <Text
              style={[
                textStyles.labelMd,
                { color: props.focused ? colors.primary.main : props.color },
              ]}
            >
              Home
            </Text>
          ),
          tabBarIcon: (props) => {
            return (
              <SvgXml
                xml={`
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714" fill="${
                    props.focused ? colors.primary.main : colors.common.white
                  }"/>
                  <path d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714" stroke="${
                    props.focused ? colors.primary.main : props.color
                  }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              `}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          ...tabStyle,
          href: "/home/favorites",
          headerTitle: (props) => (
            <Text
              style={[{ ...props.style }, textStyles.body, textStyles.bodyLg]}
            >
              Favorites
            </Text>
          ),

          tabBarLabel: (props) => (
            <Text
              style={[
                textStyles.labelMd,
                { color: props.focused ? colors.primary.main : props.color },
              ]}
            >
              Favorites
            </Text>
          ),

          tabBarIcon: (props) => {
            return props.focused ? (
              <SvgXml
                xml={`
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="${colors.primary.main}"/>
                </svg>
              `}
                width={25}
                height={25}
              />
            ) : (
              <SvgXml
                xml={`
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.79688 14.2422C6.79688 19.2344 10.9805 24.1445 17.5898 28.3633C17.8359 28.5156 18.1875 28.6797 18.4336 28.6797C18.6797 28.6797 19.0312 28.5156 19.2891 28.3633C25.8867 24.1445 30.0703 19.2344 30.0703 14.2422C30.0703 10.0938 27.2227 7.16406 23.4258 7.16406C21.2578 7.16406 19.5 8.19531 18.4336 9.77734C17.3906 8.20703 15.6094 7.16406 13.4414 7.16406C9.64453 7.16406 6.79688 10.0938 6.79688 14.2422ZM8.68359 14.2422C8.68359 11.125 10.6992 9.05078 13.418 9.05078C15.6211 9.05078 16.8867 10.4219 17.6367 11.5938C17.9531 12.0625 18.1523 12.1914 18.4336 12.1914C18.7148 12.1914 18.8906 12.0508 19.2305 11.5938C20.0391 10.4453 21.2578 9.05078 23.4492 9.05078C26.168 9.05078 28.1836 11.125 28.1836 14.2422C28.1836 18.6016 23.5781 23.3008 18.6797 26.5586C18.5625 26.6406 18.4805 26.6992 18.4336 26.6992C18.3867 26.6992 18.3047 26.6406 18.1992 26.5586C13.2891 23.3008 8.68359 18.6016 8.68359 14.2422Z" fill="#778DA9"/>
                  </svg>
                `}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          ...tabStyle,
          href: "/home/more",
          headerTitle: (props) => (
            <Text
              style={[{ ...props.style }, textStyles.body, textStyles.bodyLg]}
            >
              More
            </Text>
          ),

          tabBarLabel: (props) => (
            <Text
              style={[
                textStyles.labelMd,
                { color: props.focused ? colors.primary.main : props.color },
              ]}
            >
              More
            </Text>
          ),

          tabBarIcon: (props) => {
            return props.focused ? (
              <SvgXml
                xml={`
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 8H19.5" stroke="${colors.primary.main}" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4.5 12H19.5" stroke="${colors.primary.main}" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4.5 16H19.5" stroke="${colors.primary.main}" stroke-width="2" stroke-linecap="round"/>
                </svg>

              `}
                width={30}
                height={30}
              />
            ) : (
              <SvgXml
                xml={`
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 8H19.5" stroke="${props.color}" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4.5 12H19.5" stroke="${props.color}" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4.5 16H19.5" stroke="${props.color}" stroke-width="2" stroke-linecap="round"/>
                </svg>

                `}
                width={30}
                height={30}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
