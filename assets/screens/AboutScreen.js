import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Sobre</Text>

      <View style={styles.containerText}>
        <Text style={styles.aboutText}>Esse é o meu App!</Text>
        <Text style={styles.aboutText}>Desenvolvi essa atividade usando:</Text>
        <Text style={styles.aboutText}>React Native!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Clientes')}>
          <Text style={styles.buttonText}>Clientes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Início')}>
          <Text style={styles.buttonText}>Início</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignContent: "flex-end",
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#068BFF',
    fontFamily: 'Arimo',
    alignSelf: 'center', 
    marginTop: 5, 
    marginBottom: 50,
  },
  containerText: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,

  },
  aboutText: {
    fontFamily: 'Arimo',
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignContent: "flex-end",
  },
  button: {
    flex: 1,
    backgroundColor: '#068BFF',
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    fontFamily: 'Arimo',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
