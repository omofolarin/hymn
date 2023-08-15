import * as Sharing from "expo-sharing";

import { Platform, Pressable, Text, View } from "react-native";
import { Stack, usePathname, useRouter, useSearchParams } from "expo-router";
import { layoutStyle, textStyles } from "../../style";

import Constants from "expo-constants";
import { ExecutionEnvironment } from "expo-constants";
import { HeaderBackButton } from "@react-navigation/elements";
import { SvgXml } from "react-native-svg";

export default function HymnLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hymnTitle = `${
    searchParams["hymn"]
      ? searchParams["hymn"].split("-").join(" ")
      : "Current hymn"
  }`;

  return (
    <Stack
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        animation: Platform.OS === "ios" ? "simple_push" : "none",
        headerLeft: (props) => (
          <HeaderBackButton canGoBack onPress={router.back} />
        ),

        headerTitleAlign: "left",
        headerTitle: (props) => (
          <View style={{ width: "100%", overflow: "hidden" }}>
            <Text
              style={[
                { textAlign: "center", maxWidth: 250 },
                textStyles.body,
                textStyles.bodyLg,
              ]}
            >
              Hymn
            </Text>
          </View>
        ),
        headerRight: (props) => (
          <View
            style={[
              layoutStyle.row,
              { width: 75 },
              layoutStyle.alignCenter,
              layoutStyle.justifyBetween,
            ]}
          >
            <Pressable style={{ width: 30, marginRight: 20 }}>
              <SvgXml
                xml={`<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.796875 7.24219C0.796875 12.2344 4.98047 17.1445 11.5898 21.3633C11.8359 21.5156 12.1875 21.6797 12.4336 21.6797C12.6797 21.6797 13.0312 21.5156 13.2891 21.3633C19.8867 17.1445 24.0703 12.2344 24.0703 7.24219C24.0703 3.09375 21.2227 0.164062 17.4258 0.164062C15.2578 0.164062 13.5 1.19531 12.4336 2.77734C11.3906 1.20703 9.60938 0.164062 7.44141 0.164062C3.64453 0.164062 0.796875 3.09375 0.796875 7.24219ZM2.68359 7.24219C2.68359 4.125 4.69922 2.05078 7.41797 2.05078C9.62109 2.05078 10.8867 3.42188 11.6367 4.59375C11.9531 5.0625 12.1523 5.19141 12.4336 5.19141C12.7148 5.19141 12.8906 5.05078 13.2305 4.59375C14.0391 3.44531 15.2578 2.05078 17.4492 2.05078C20.168 2.05078 22.1836 4.125 22.1836 7.24219C22.1836 11.6016 17.5781 16.3008 12.6797 19.5586C12.5625 19.6406 12.4805 19.6992 12.4336 19.6992C12.3867 19.6992 12.3047 19.6406 12.1992 19.5586C7.28906 16.3008 2.68359 11.6016 2.68359 7.24219Z" fill="#7447F5"/>
                    </svg>
                    `}
              />
            </Pressable>
            <Pressable
              style={{ width: 30 }}
              onPress={async () => {
                try {
                  console.log(Sharing);
                  const url = `https://`;

                  await Sharing.shareAsync(pathname, {
                    dialogTitle: "Let's hymn together",
                    mimeType: "text/plain",
                  });
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              <SvgXml
                xml={`<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.93164 12.1731V20.1731C4.93164 20.7035 5.14235 21.2122 5.51743 21.5873C5.8925 21.9624 6.40121 22.1731 6.93164 22.1731H18.9316C19.4621 22.1731 19.9708 21.9624 20.3459 21.5873C20.7209 21.2122 20.9316 20.7035 20.9316 20.1731V12.1731" stroke="#7447F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.9316 6.1731L12.9316 2.1731L8.93164 6.1731" stroke="#7447F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.9316 2.1731V15.1731" stroke="#7447F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`}
              />
            </Pressable>
          </View>
        ),
        headerLargeTitle: false,
      }}
    />
  );
}
