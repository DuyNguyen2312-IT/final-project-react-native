
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
    classId: '',
    className: '',
  });

  const [loading, setLoading] = useState(false);

  const onChangeClassId = (value) => {
    setUser({ ...user, classId: value });
  };

  const onChangeClassName = (value) => {
    setUser({ ...user, className: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('http://192.168.1.6:4001/class/', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        classId: user.classId,
        className: user.className,
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
        onChangeText={(value) => onChangeClassId(value)}
        placeholder="Class Id"
      />
      <TextInput
        placeholder={'Class name'}
        onChangeText={(value) => onChangeClassName(value)}
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