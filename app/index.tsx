import { Text, View, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";

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
      <Text>Biathlon time trial app</Text>
      <Button title="Race from scratch" onPress={() => handleRaceFromScratch()} />
      <Button title="Race from preset" onPress={() => handleRaceFromPreset()} />
      <Button title="Make new preset" onPress={() => handleMakeNewPreset()} />
      <Button title="Add athlete" onPress={() => handleAddAthlete()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",//this is done by default
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
