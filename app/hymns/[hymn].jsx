import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { layoutStyle, spacingStyle, textStyles } from "../../style";

import { Header } from "@react-navigation/elements";
import { useSearchParams } from "expo-router";

String.prototype.toCapitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default function Hymn() {
  const searchParams = useSearchParams();
  let totalVerses = 0;
  const howGreatThouArt = [
    {
      type: "verse",
      lines: [
        "O Lord my God, when I in awesome wonder",
        "Consider all the worlds Thy hands have made",
        "I see the stars, I hear the rolling thunder",
        "Thy power throughout the universe displayed",
      ],
    },

    {
      type: "chorus",
      lines: [
        "Then sings my soul, my Savior God, to Thee",
        "How great Thou art, how great Thou art",
        "Then sings my soul, my Savior God, to Thee",
        "How great Thou art, how great Thou art",
      ],
    },

    {
      type: "verse",
      lines: [
        "When through the woods, and forest glades I wander",
        "And hear the birds sing sweetly in the trees",
        "When I look down, from lofty mountain grandeur",
        "And see the brook, and feel the gentle breeze",
      ],
    },

    {
      type: "chorus",
      lines: [
        "Then sings my soul, my Savior God, to Thee",
        "How great Thou art, how great Thou art",
        "Then sings my soul, my Savior God, to Thee",
        "How great Thou art, how great Thou art",
      ],
    },

    {
      type: "verse",
      lines: [
        "And when I think that God, His Son not sparing",
        "Sent Him to die, I scarce can take it in",
        "That on the cross, my burden gladly bearing",
        "He bled and died to take away my sin",
      ],
    },

    {
      type: "chorus",
      lines: [
        "Then sings my soul, my Savior God, to Thee",
        "How great Thou art, how great Thou art",
        "Then sings my soul, my Savior God, to Thee",
        "How great Thou art, how great Thou art",
      ],
    },

    {
      type: "verse",
      lines: [
        "When Christ shall come with shout of acclamation",
        "And take me home, what joy shall fill my heart",
        "Then I shall bow in humble adoration",
        "And there proclaim, my God, how great Thou art",
      ],
    },

    {
      type: "chorus",
      lines: [
        "Then sings my soul, my Savior God, to Thee",
        "How great Thou art, how great Thou art",
        "Then sings my soul, my Savior God, to Thee",
        "How great Thou art, how great Thou art",
      ],
    },
  ].map((v, i) => {
    if (v.type == "verse") {
      totalVerses += 1;
      return { ...v, id: totalVerses };
    } else {
      return v;
    }
  });

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
        title={`${
          searchParams["hymn"]
            ? searchParams["hymn"].split("-").join(" ")
            : "Current hymn"
        }`}
        headerTitleStyle={[
          spacingStyle.py4,
          { fontWeight: "500", fontSize: 20 },
        ]}
      />
      <ScrollView>
        {howGreatThouArt.map((verse, i) => {
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
