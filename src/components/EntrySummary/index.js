import React from 'react';
import {StyleSheet, View} from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

const EntrySummary = () => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList />
    </View>
  );
};

export default EntrySummary;

const styles = StyleSheet.create({
  // container: {flex: 1},
});
