import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colorStyles, componentStyles, textStyles } from "../style";

import Ripple from "react-native-material-ripple";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const RadioButton = () => {
  return <View />;
};

export default function Index() {
  const router = useRouter();

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
                paddingVertical: 8,
                paddingHorizontal: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                borderBottomWidth: isLast(churches, i) ? 0 : 0.8,
                borderBottomColor: "#C2BCBC",
              }}
            >
              <Text style={[textStyles.body, textStyles.bodyLg]}>
                {d.title}
              </Text>
              <RadioButton value={d.title} status={"checked"} />
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
