import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = () => {
  const saldo = 2064.35;
  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={saldo} />
      <View>
        <TextInput style={styles.inputName} />
        <TextInput style={styles.inputValue} />

        <View style={styles.button}>
          <Button title="GPS" />
          <Button title="Camera" />
        </View>

        <View style={styles.button}>
          <Button title="Adicionar" />
          <Button title="Cancelar" />
        </View>
      </View>
    </View>
  );
};

export default NewEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputName: {
    borderColor: '#000',
    padding: 10,
    borderWidth: 1,
  },
  inputValue: {
    borderColor: '#000',
    padding: 10,
    borderWidth: 1,
  },
  button: {
    padding: 10,
  },
});
