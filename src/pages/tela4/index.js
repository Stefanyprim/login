import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function tela4() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>De onde é a invenção do chuveiro elétrico?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Tela5')} style={styles.button}>
          <Text style={styles.buttonText}>A- Brasil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tela6')} style={styles.button}>
          <Text style={styles.buttonText}>B- Inglaterra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAADEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF69B4',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});