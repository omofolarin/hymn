import { SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return <SafeAreaView style={{ flex: 1 }}></SafeAreaView>;
}
