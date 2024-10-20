import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <Stack>
        <Stack.Screen name="(tabs)" options={{title:"Home", headerShown:false}}/>
      </Stack>
    </SafeAreaView>
  );
}
