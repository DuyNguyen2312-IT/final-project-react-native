import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../../styles';
// create a component
const Detail = ({ route, navigation }) => {
  const { item } = route.params;

  const [user, setUser] = useState({
    classId: item.classId,
    className: item.className,
  });

  const onChangeClassId = (value) => {
    setUser({ ...user, classId: value });
  };

  const onChangeClassName = (value) => {
    setUser({ ...user, className: value });
  };


  const updateData = () => {
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');
    fetch(`http://192.168.1.6:4001/class/update/${item.classId}`, {
      method: 'PATCH',
      headers: myHeaders,
      body: JSON.stringify({
        classId: item.classId,
        className: item.className,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push('Get')
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }


  const deleteData = () => {
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch(`http://192.168.1.6:4001/class/delete/${item.classId}`, {
      method: 'DELETE',
      headers: myHeaders,
      body: JSON.stringify({
        classId: item.classId,
        className: item.className,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push('Get')
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };


  return (
    <View style={styles.container}>


      <TextInput
        placeholder={'ID'}
        onChangeText={(value) => onChangeClassId(value)}
        style={styles.input}
        value={user.classId}
      />
      <TextInput
        placeholder={'Full Namae'}
        onChangeText={(value) => onChangeClassName(value)}
        style={styles.input}
        value={user.className}
      />

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: '#007AFF', padding: 10, marginLeft: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('./../../assets/icons/edit.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: '#fff',
                marginRight: 5,
              }}
            />
            <Text style={{ color: 'white', textAlign: 'center' }}>Update</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: 'red', padding: 10, marginLeft: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('./../../assets/icons/delete.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: '#fff',
                marginRight: 5,
              }}
            />
            <Text style={{ color: 'white', textAlign: 'center' }}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default Detail;
