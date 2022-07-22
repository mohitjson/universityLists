//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Pressable,
  Dimensions,
} from 'react-native';
import axios from 'axios';

const HomeScreen = props => {
  const [list, setList] = useState('');

  //Api calling
  const BASE_URL = 'https://machinetest.encureit.com/country.php';

  var formdata = new FormData();
  formdata.append('country', 'India');

  axios.post(BASE_URL, formdata).then(response => setList(response.data));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTxt}>UNIVERSITIES</Text>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.listView}>
              <Text style={styles.listTxt}>{item.name}</Text>
              <Pressable
                style={styles.button}
                onPress={() => {
                  props.navigation.navigate('Details',item);
                }}>
                <Text style={styles.text}>Details</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTxt: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  listTxt: {
    width: 200,
    fontSize: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
