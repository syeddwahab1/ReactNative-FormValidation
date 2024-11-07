/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const saveData = async () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!age) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, age}),
    });
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Form with validations</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      {nameError ? (
        <Text style={styles.errorText}>Please enter valid name</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      {ageError ? (
        <Text style={styles.errorText}>Please enter valid age</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {emailError ? (
        <Text style={styles.errorText}>Please enter valid email</Text>
      ) : null}
      <Button title="Save data" onPress={saveData} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 20,
    fontSize: 20,
  },
  errorText: {
    color: 'red',
    margin: 20,
  },
});

export default App;
