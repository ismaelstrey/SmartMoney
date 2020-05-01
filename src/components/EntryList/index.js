import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import EntryListItem from './EntryListItem';
import {getEntries} from '../../services/Entries';

const EntryList = ({entries}) => {
  [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      setEntries(data);
    }
    loadEntries();
    console.log('entryList :: useEffect');
  }, []);
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
