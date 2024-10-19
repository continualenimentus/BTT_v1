import { Text, View, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/assets/styles/styles";

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

  const handleAddAthlete =() =>{
    console.log("Add athlete");
  }

  return (
    <View style={styles.container}>
      {/* <Link href={'/raceFromScratch'}> */}
        <Button title="Race from scratch" onPress={() => handleRaceFromScratch()} />
      {/* </Link> */}
      <Button title="Race from preset" onPress={() => handleRaceFromPreset()} />
      <Button title="Make new preset" onPress={() => handleMakeNewPreset()} />

      <Link href='/addAthlete'>
        Add athlete
      </Link>
    </View>
  );
}

