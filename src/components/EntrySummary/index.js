import React from 'react';
import {StyleSheet, View} from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

const EntrySummary = ({entries}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entries={entries} />
    </View>
  );
};

export default EntrySummary;

const styles = StyleSheet.create({
  // container: {flex: 1},
});
