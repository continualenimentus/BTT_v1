import { View, Text } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/assets/styles/styles";
import { VStack } from "@/components/ui/vstack";

export default function raceFromPreset() {
  return (
    
    <View style={styles.container}>
        <Text>Race from preset</Text>
        <VStack space="lg">
        <Link 
        href='/#' 
        style={styles.MainPageLink}>Next</Link>
        </VStack>
    </View>
  );
}

