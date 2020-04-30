import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel currentBalance={currentBalance} />
      <BalancePanelChart />
      <Button title="adicionar" />
    </View>
  );
};

export default BalancePanel;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
