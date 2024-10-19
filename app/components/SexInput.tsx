import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from '@/assets/styles/styles';


interface SexInputProps {

    value: string;
  
    onChange: (name: string) => void;
  
  }

const SexInput: React.FC<SexInputProps> = ({ value, onChange }) =>{
  return (
    // shit gon change
    <View style={styles.InputRow}><Text>Sex:</Text>
    {/* <TextInput style={styles.input} value={value} onChange={(e) => onChange(e.nativeEvent.text)}/> */}

    </View>
  );
};

export default SexInput;