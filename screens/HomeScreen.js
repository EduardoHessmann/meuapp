import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Início</Text>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/splash_image.png')} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
          <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Clientes')}>
          <Text style={styles.buttonText}>Clientes</Text>
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
    textAlign: 'center',
    marginTop: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 500,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#068BFF',
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Arimo',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
