import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
const Main = ({navigation}) => {
  const entriesList = [
    {key: '1', description: 'Aluguel', amount: 10},
    {key: '2', description: 'Lazer', amount: 190},
    {key: '3', description: 'Outros', amount: 210},
  ];
  const entriesSummary = [
    {key: '01', description: 'Alimentação', amount: 200},
    {key: '02', description: 'Combustivel', amount: 280},
    {key: '03', description: 'Aluguel', amount: 120},
    {key: '04', description: 'Lazer', amount: 2500},
    {key: '05', description: 'Outros', amount: 1200},
  ];

  const currentBalance = 2064.35;
  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entries={entriesSummary} />
      <EntryList entries={entriesList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
});

export default Main;
