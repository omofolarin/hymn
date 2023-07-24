import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  colorStyles,
  componentStyles,
  layoutStyle,
  spacingStyle,
  textStyles,
} from "../../style";

import { Divider } from "../../components";
import { SvgXml } from "react-native-svg";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const hymns = [
    "Amazing Grace",
    "How Great Thou Art",
    "In Christ Alone",
    "Blessed Assurance",
    "Great Is Thy Faithfulness",
    "It Is Well with My Soul",
    "Holy, Holy, Holy",
    "What a Friend We Have in Jesus",
    "How Deep the Father's Love for Us",
    "Be Thou My Vision",
    "The Old Rugged Cross",
    "Victory in Jesus",
    "O Worship the King",
    "Come Thou Fount of Every Blessing",
    "Before the Throne of God Above",
    "To God Be the Glory",
    "Crown Him with Many Crowns",
    "All Creatures of Our God and King",
    "Rock of Ages",
    "Jesus Paid It All",
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={[spacingStyle.my16, spacingStyle.px16]}
        // stickyHeaderIndices={[1]}
        ListHeaderComponent={
          <View
            style={[
              colorStyles.bgWhite,
              layoutStyle.row,
              layoutStyle.justifyBetween,
              layoutStyle.alignCenter,
              spacingStyle.px8,
              spacingStyle.my10,

              { borderRadius: 8 },
            ]}
          >
            <TextInput
              placeholder="Type the hymn number, word or lyrics"
              style={[{ width: "80%", height: 40, fontSize: 16 }]}
            />
            <SvgXml
              xml={`<svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.3833 12.7666C7.76123 12.7666 9.04785 12.3184 10.0938 11.5713L14.0283 15.5059C14.2109 15.6885 14.4517 15.7798 14.7007 15.7798C15.2402 15.7798 15.6304 15.3647 15.6304 14.8335C15.6304 14.5845 15.5474 14.3521 15.3647 14.1694L11.4551 10.2515C12.2769 9.17236 12.7666 7.83594 12.7666 6.3833C12.7666 2.87207 9.89453 0 6.3833 0C2.86377 0 0 2.87207 0 6.3833C0 9.89453 2.86377 12.7666 6.3833 12.7666ZM6.3833 11.3887C3.63574 11.3887 1.37793 9.12256 1.37793 6.3833C1.37793 3.64404 3.63574 1.37793 6.3833 1.37793C9.12256 1.37793 11.3887 3.64404 11.3887 6.3833C11.3887 9.12256 9.12256 11.3887 6.3833 11.3887Z" fill="#555555"/>
                  </svg>
            `}
            />
          </View>
        }
        data={hymns}
        renderItem={({ item: title, index }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                router.push(`/hymns/${title.split(" ").join("-")}`)
              }
            >
              <>
                <View
                  key={index.toString()}
                  style={[
                    componentStyles.cardContainer,
                    spacingStyle.py16,
                    spacingStyle.px8,
                    layoutStyle.row,
                    layoutStyle.alignCenter,
                    layoutStyle.justifyBetween,
                  ]}
                >
                  <View>
                    <Text style={[textStyles.bodyLg, spacingStyle.px8]}>
                      {(index + 1).toString()}
                    </Text>
                  </View>
                  <Text
                    style={[
                      textStyles.bodyLg,
                      { textAlign: "left", width: "80%" },
                    ]}
                  >
                    {title}
                  </Text>
                  <View>
                    <SvgXml
                      xml={`<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.33325 2.08936L10.6666 6.86504L5.33325 11.6407" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                  `}
                    />
                  </View>
                </View>

                {index + 1 != hymns.length && <Divider />}
              </>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
