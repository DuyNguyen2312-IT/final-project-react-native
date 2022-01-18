
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../../styles';
const Post = ({ route, navigation }) => {
  const [user, setUser] = useState({
    studentId: '',
    fullName: '',
    photo: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);

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

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('http://192.168.1.6:4001/student/', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        studentId: user.studentId,
        fullName: user.fullName,
        photo: user.photo,
        email: user.email,
      }),
    })
      .then((response) => {
        setLoading(false)
        response.text();
        navigation.push('Get')
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };


  return (
    <View style={styles.container}>



      <TextInput
        style={styles.input}
        onChangeText={(value) => onChangeId(value)}
        placeholder="ID"
        keyboardType="numeric"
      />
      <TextInput
        placeholder={'Full Name'}
        onChangeText={(value) => onChangeFullName(value)}
        style={styles.input}
      />

      <View style={{ flexDirection: 'row', width: 360, justifyContent: 'space-between' }}>
        <TextInput
          placeholder={'Photo'}
          onChangeText={(value) => onChangePhoto(value)}
          style={{
            height: 40,
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            width: 240
          }}
        />
        <TouchableOpacity>
          <View style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 4 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Select Photo</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder={'Email'}
        onChangeText={(value) => onChangeEmail(value)}
        style={styles.input}
      />

      <TouchableOpacity
        onPress={saveData}
        style={styles.button}>
        <View >
          <Text style={styles.buttonText}>
            {loading ? 'Submit...' : 'Submit'}
          </Text>
        </View>
      </TouchableOpacity >
    </View >
  );
}


export default Post;