import React from 'react';
import {StyleSheet, View} from 'react-native';
import EntryListItem from './EntryListItem';

const EntryList = ({entries}) => {
  return (
    <View style={styles.container}>
      <EntryListItem entries={entries} />
    </View>
  );
};

export default EntryList;

const styles = StyleSheet.create({
  // container: {flex: 1}
});
