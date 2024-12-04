import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repitaSenha, setRepitaSenha] = useState('');

  const handleRegister = () => {
    if(senha == repitaSenha){
      Alert.alert('Sucesso!', 'Cliente registrado com sucesso!');
      navigation.navigate('Sobre');
    }else{
      Alert.alert('Atenção!', 'As senhas devem ser iguais!!');
    }
    
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Clientes</Text>

      <View style={styles.formContainer}>
      <Text style={styles.textAboutInput}>Nome</Text>
      <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.textAboutInput}>CPF</Text>
        <TextInput
          placeholder="CPF"
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
        />
        <Text style={styles.textAboutInput}>E-mail</Text>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.textAboutInput}>Senha</Text>
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Text style={styles.textAboutInput}>Repita a Senha</Text>
        <TextInput
          placeholder="Repita a Senha"
          style={styles.input}
          secureTextEntry
          value={repitaSenha}
          onChangeText={setRepitaSenha}
        />
        <Button style={styles.submitButton} title="Cadastrar" onPress={handleRegister} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
          <Text style={styles.buttonText}>Sobre</Text>
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

  },
  formContainer: {
    flex: 1,
    justifyContent: 'center', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    fontFamily: 'Arimo',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignContent: "flex-end",
    marginTop: 50,

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
  submitButton: {
    borderRadius: 25,
  },
  textAboutInput: {
    fontFamily: 'Arimo',
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
