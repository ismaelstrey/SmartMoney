import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  const [amount, setAmount] = useState('0');
  const saldo = 2064.35;

  const save = () => {
    const value = {
      amount: parseFloat(amount),
    };
    console.log('Newamount :: Save ', value);
    saveEntry(value);
  };

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={saldo} />
      <View>
        <TextInput
          style={styles.inputName}
          onChangeText={text => setAmount(text)}
          value={amount}
        />
        <TextInput style={styles.inputValue} />

        <View style={styles.button}>
          <Button title="GPS" />
          <Button title="Camera" />
        </View>

        <View style={styles.button}>
          <Button title="Adicionar" onPress={save} />
          <Button
            title="Cancelar"
            color="red"
            onPress={() => navigation.goBack()}
          />
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
