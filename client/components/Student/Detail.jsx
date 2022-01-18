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
    studentId: item.studentId,
    fullName: item.fullName,
    photo: item.photo,
    email: item.email,
  });

  const onChangeId = (value) => {
    setUser({ ...user, studentId: value });
  };

  const onChangeFullName = (value) => {
    setUser({ ...user, fullName: value });
  };

  const onChangePhoto = (value) => {
    setUser({ ...user, photo: value });
  };

  const onChangeEmail = (value) => {
    setUser({ ...user, email: value });
  };

  const updateData = () => {
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');
    fetch(`http://192.168.1.6:4001/student/update/${item.studentId}`, {
      method: 'PATCH',
      headers: myHeaders,
      body: JSON.stringify({
        studentId: user.studentId,
        fullName: user.fullName,
        photo: user.photo,
        email: user.email,
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

    fetch(`http://192.168.1.6:4001/student/delete/${item.studentId}`, {
      method: 'DELETE',
      headers: myHeaders,
      body: JSON.stringify({
        studentId: user.studentId,
        fullName: user.fullName,
        photo: user.photo,
        email: user.email,
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

      <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
        <Image
          onChangeText={(value) => onChangePhoto(value)}
          value={user.photo}
          style={{ width: 100, height: 100 }}
          source={require('../../assets/icons/student.png')}
        />
        <TouchableOpacity style={{ justifyContent: 'flex-end', marginLeft: 5 }}>
          <View style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 4 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Select Photo</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder={'ID'}
        onChangeText={(value) => onChangeId(value)}
        style={styles.input}
        value={user.studentId}
      />
      <TextInput
        placeholder={'Full Namae'}
        onChangeText={(value) => onChangeFullName(value)}
        style={styles.input}
        value={user.fullName}
      />
      <TextInput
        placeholder={'Photo'}
        onChangeText={(value) => onChangePhoto(value)}
        style={styles.input}
        value={user.photo}
      />
      <TextInput
        placeholder={'Email'}
        onChangeText={(value) => onChangeEmail(value)}
        style={styles.input}
        value={user.email}
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


export default Detail;
