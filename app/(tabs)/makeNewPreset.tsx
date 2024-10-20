import { View, Text } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/assets/styles/styles";
import { VStack } from "@/components/ui/vstack";
import { Button } from "@/components/ui/button";

export default function makeNewPreset() {
  return (
    
    <View style={styles.container}>
        <Text>Make new preset</Text>
        <VStack space="lg">
        <Link 
        href='/#' 
        style={styles.MainPageLink}>Save</Link>
        </VStack>
    </View>
  );
}

