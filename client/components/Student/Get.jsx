
//import liraries
import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

// create a component
const Get = ({ navigation }) => {
  const [user, setUser] = useState();

  const getUserData = async () => {
    try {
      let response = await fetch('http://192.168.1.6:4001/student');
      let json = await response.json();
      setUser(json.router);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getUserData();
  }, []);



  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail', {
        item: item
      })}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            padding: 5,
            display: 'flex',
            flexDirection: "row",
            alignItems: 'center',
          }}>
          <Image style={{ width: 50, height: 50 }} source={require(`./../../assets/icons/student.png`)} />

          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }} key={item.studentId}>{item.studentId} - {item.fullName}</Text>
            <Text>{item.email}</Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        renderItem={renderItem}
        keyExtractor={(item) => item.studentId}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Get;
