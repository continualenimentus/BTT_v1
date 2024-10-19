import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"Home"}}/>
      <Stack.Screen name="addAthlete" options={{title:"Add athlete"}}/>
    </Stack>
  );
}
