import { Text, View, StyleSheet, Button } from "react-native";
import AthleteList from "./components/AthleteList";

export default function addAthlete() {
  const handleImportFromCSV = () => {
    console.log("Import from CSV");
  }

  return (
    <View style={styles.container}>
      <AthleteList athletes={[]}/>
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
