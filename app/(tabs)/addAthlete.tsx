import { Text, View, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { styles } from "@/assets/styles/styles";
import AthleteList from "../components/AthleteList";
import NameInput from "../components/NameInput";
import SexInput from "../components/SexInput";
import DateOfBirthInput from "../components/DateOfBirthInput";


const templateAthletes = [
    {name: "Athlete 1", 
        id: 1,
        sex:"M",
        dob: "01/01/2000"
    },{name: "Athlete 2", 
        id: 2,
        sex:"M",
        dob: "01/02/2000"
    },{name: "Athlete 3", 
        id: 3,
        sex:"F",
        dob: "07/01/2000"
    },
  ]

export default function addAthlete() {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [sex, setSex] = useState("");
    
    const handleImportFromCSV = () => {
        console.log("Import from CSV");
    }

    const handleNameChange = (name: string) => {
        // validate the name
        setName(name);
    }

    const handleDobChange = (dob: string) => {
        setDob(dob);
    }

    const handleSexChange = (sex:string) => {
        setSex(sex);
    }

    const handleAddAthlete = () => {
        if(name!=="" && dob!=="" && sex!==""){
            // add the athlete
            console.log("Add athlete");
        }
        else{
            alert("Please fill in all fields");
        }
    }

  return (
    <View style={styles.container}>
      <AthleteList athletes={templateAthletes}/>
      <NameInput value={name} onChange={handleNameChange}/>
      <SexInput value={sex} onChange={handleSexChange}/>
      <DateOfBirthInput value={dob} onChange={handleDobChange} />
      {/* gonna do this button a bit differentlt, it should be styled */}
      <Button title="Add athlete" onPress={() => console.log("Add athlete")} />
    <Button title="Import from CSV" onPress={() => handleImportFromCSV()} />
    </View>
  );
}
