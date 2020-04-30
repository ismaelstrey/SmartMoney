import React from 'react';
import {StyleSheet, View, Picker, Button} from 'react-native';
import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  return (
    <View style={styles.container}>
      <EntryLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" value="teste" />
        </Picker>
        <Picker>
          <Picker.Item label="Ultimos 7 dias" value="teste2" />
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    // flex: 1'
  },
});
