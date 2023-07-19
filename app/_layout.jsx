import { AppFonts } from "../components";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <AppFonts>
      <Slot />
    </AppFonts>
  );
}
