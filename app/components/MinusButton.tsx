import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const MinusButton = (handleOnClick: any) => {
  return (
    <TouchableOpacity style={styles.PlusButton} onPress={handleOnClick}  >
      <Text>-</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  PlusButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
    width: 50,
    height: 50,
  }
});

export default MinusButton;