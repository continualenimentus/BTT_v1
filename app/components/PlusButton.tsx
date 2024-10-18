import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const PlusButton = (handleOnClick: any) => {
  return (
    <View style={styles.PlusButton}>
      <Button title="+" onPress={handleOnClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  PlusButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PlusButton;