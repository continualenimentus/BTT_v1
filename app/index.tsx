import { View } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/assets/styles/styles";
import { VStack } from "@/components/ui/vstack";
import { Button } from "@/components/ui/button";

export default function Index() {
  const handleRaceFromScratch = () => {
    console.log("Racet from scratch");
  };

  const handleRaceFromPreset =() =>{ 
    console.log("Race from preset");
  }

  const handleMakeNewPreset =() =>{
    console.log("Make new preset");
  }

  return (
    <VStack space="lg">
      <Link href='/raceFromPreset' style={styles.MainPageLink}>Race from preset</Link>
      <Link href='/raceFromScratch' style={styles.MainPageLink}></Link>
      <Link href='/makeNewPreset' style={styles.MainPageLink}>Make new preset</Link>
      <Link href='/addAthlete' style={styles.MainPageLink}>Add athlete</Link>
    </VStack>
  );
}

