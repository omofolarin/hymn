import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colorStyles, componentStyles, textStyles } from "../style";

import Ripple from "react-native-material-ripple";
import { SvgXml } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useState } from "react";

const RadioButton = ({ isChecked, onPress }) => {
  return (
    <View>
      {!isChecked && (
        <SvgXml
          xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.25" fill="white" stroke="#7447F5" stroke-width="1.5"/>
              </svg>`}
        />
      )}
      {isChecked && (
        <SvgXml
          xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15ZM10 0C8.68678 -1.95685e-08 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C2.00035 3.85752 1.26375 4.95991 0.761205 6.17317C0.258658 7.38642 0 8.68678 0 10C0 11.3132 0.258658 12.6136 0.761205 13.8268C1.26375 15.0401 2.00035 16.1425 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 3.95203e-08 10 0ZM1.66667 10C1.66667 7.78986 2.54464 5.67025 4.10744 4.10744C5.67025 2.54464 7.78986 1.66667 10 1.66667C12.2101 1.66667 14.3298 2.54464 15.8926 4.10744C17.4554 5.67025 18.3333 7.78986 18.3333 10C18.3333 12.2101 17.4554 14.3298 15.8926 15.8926C14.3298 17.4554 12.2101 18.3333 10 18.3333C7.78986 18.3333 5.67025 17.4554 4.10744 15.8926C2.54464 14.3298 1.66667 12.2101 1.66667 10Z" fill="#7447F5"/>
                </svg>
                `}
        />
      )}
    </View>
  );
};

export default function Index() {
  const router = useRouter();
  const [church, setChurch] = useState("");

  const churches = [
    { title: "Redeemed Christian Church" },
    { title: "Mountain of Fire Miracle Ministries" },
    { title: "Christ Apostolic Church" },
  ];
  const isLast = (items, index) => items.length == index + 1;

  const handleSubmit = () => {
    router.push("/home");
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.screenContainer}>
        <View>
          <Text style={textStyles.display}>Select Your Church</Text>
        </View>

        <View style={componentStyles.cardContainer}>
          {churches.map((d, i) => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={i.toString()}
              style={{
                paddingVertical: 16,
                paddingHorizontal: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                borderBottomWidth: isLast(churches, i) ? 0 : 0.8,
                borderBottomColor: "#C2BCBC",
              }}
              onPress={() => {
                setChurch(d.title);
              }}
            >
              <Text style={[textStyles.body, textStyles.bodyLg]}>
                {d.title}
              </Text>
              <RadioButton value={d.title} isChecked={church == d.title} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ width: "100%" }}>
          <Ripple
            style={[
              componentStyles.containedButton,
              componentStyles.containedButtonCurvedEdges,
            ]}
            onPress={handleSubmit}
          >
            <View style={[componentStyles.containedButtonInner]}>
              <Text
                style={[
                  textStyles.label,
                  textStyles.labelMd,
                  textStyles.alignCenter,
                  colorStyles.white,
                ]}
              >
                Done
              </Text>
            </View>
          </Ripple>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    marginVertical: 30,
    flex: 1,
    backgroundColor: "#F9FBFF",
  },
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});
