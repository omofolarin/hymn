import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { layoutStyle, spacingStyle, textStyles } from "../../style";
import { useRouter, useSearchParams } from "expo-router";

import { Header } from "@react-navigation/elements";
import hymns from "../../assets/hymns";

String.prototype.toCapitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default function Hymn() {
  const searchParams = useSearchParams();
  const hymnId = Number(searchParams["id"]);
  const hymn = hymns[hymnId] ?? {};
  const hymnTitle = `${
    searchParams["hymn"]
      ? searchParams["hymn"].split("-").join(" ")
      : "Current hymn"
  }`;

  let verseCount = hymn.data.map((item, i) => item.type == "verse").length;

  let currentVerseId = 1;

  for (let index = 0; index < verseCount; index++) {
    const element = hymn.data[index];
    if (element.type == "verse") {
      hymn["data"][index]["id"] = currentVerseId;
      currentVerseId++;
    }
  }

  const amazingGrace = [
    {
      type: "chorus",
      lines: [
        "Amazing grace, how sweet the sound",
        "That saved a wretch like me",
        "I once was lost, but now am found",
        "Was blind, but now I see",
      ],
    },
    {
      type: "verse",
      lines: [
        "'Twas grace that taught my heart to fear,",
        "And grace my fears relieved;",
        "How precious did that grace appear",
        "The hour I first believed!",
      ],
    },

    {
      type: "verse",
      lines: [
        "The Lord has promised good to me,",
        "His word my hope secures;",
        "He will my shield and portion be",
        "As long as life endures.",
      ],
    },

    {
      type: "verse",
      lines: [
        "Yea, when this flesh and heart shall fail,",
        "And mortal life shall cease,",
        "I shall possess, within the veil,",
        "A life of joy and peace.",
      ],
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        headerTitleAlign="left"
        title={hymnTitle}
        headerTitleStyle={[
          spacingStyle.py4,
          { fontWeight: "500", fontSize: 20 },
        ]}
      />
      <ScrollView>
        {hymn.data.map((verse, i) => {
          return (
            <View
              key={i.toString()}
              style={[spacingStyle.px16, spacingStyle.py4]}
            >
              <View style={[layoutStyle.column, layoutStyle.alignStart]}>
                <View style={[{ paddingRight: 16 }, spacingStyle.py8]}>
                  <Text style={[textStyles.bodyLg]}>
                    {verse.type.toCapitalize()}{" "}
                    {verse.type == "verse" ? verse.id : ""}
                  </Text>
                </View>

                <View>
                  {verse.lines.map((text, j) => {
                    return (
                      <Text
                        key={j.toString()}
                        style={[textStyles.bodyLg, spacingStyle.py4]}
                      >
                        {text}
                      </Text>
                    );
                  })}
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
