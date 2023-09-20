import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function tela5() {

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACERTOUUUU</Text>
      <View style={styles.buttonContainer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

 
});