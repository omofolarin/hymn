import { Header, HeaderBackButton } from "@react-navigation/elements";
import { Slot, usePathname, useRouter } from "expo-router";

import { AppFonts } from "../components";
import { View } from "react-native";
import { colors } from "../style";

export default function Layout() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <AppFonts>
      {pathName === "/settings" && (
        <Header
          title="Settings"
          headerLeft={(props) => (
            <HeaderBackButton onPress={() => router.back()} />
          )}
          headerStyle={{}}
        />
      )}
      <View style={{ backgroundColor: colors.surface.light, flex: 1 }}>
        <Slot />
      </View>
    </AppFonts>
  );
}
