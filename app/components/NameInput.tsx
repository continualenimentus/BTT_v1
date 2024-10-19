import React from 'react';
import { Text, View, TextInput } from 'react-native';
import {styles } from '@/assets/styles/styles';


interface NameInputProps {

    value: string;
  
    onChange: (name: string) => void;
  
  }

const NameInput: React.FC<NameInputProps> = ({ value, onChange }) =>{
  return (
    <View style={styles.InputRow}><Text>Name:</Text><TextInput style={styles.input}value={value} onChange={(e) => onChange(e.nativeEvent.text)}/></View>
  );
};

export default NameInput;