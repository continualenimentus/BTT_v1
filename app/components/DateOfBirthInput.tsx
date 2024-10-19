import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from '@/assets/styles/styles';

interface DateOfBirthInputProps {

    value: string;
  
    onChange: (name: string) => void;
  
  }

const DateOfBirthInput: React.FC<DateOfBirthInputProps> = ({ value, onChange }) =>{
  return (
    <View style={styles.InputRow}><Text>Date of birth:</Text><TextInput style={styles.input}value={value} onChange={(e) => onChange(e.nativeEvent.text)}/></View>
  );
};

export default DateOfBirthInput;