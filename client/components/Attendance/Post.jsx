
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles';

const Post = ({ route, navigation }) => {
  const [user, setUser] = useState({
    id: '',
    studentId: '',
    classId: '',
    subjectsName: '',
    photo: '',
    location: '',
  });

  const [loading, setLoading] = useState(false);


  const onChangeId = (value) => {
    setUser({ ...user, id: value });
  };

  const onChangeStudentId = (value) => {
    setUser({ ...user, studentId: value });
  };

  const onChangeClassId = (value) => {
    setUser({ ...user, classId: value });
  };

  const onChangeSubjectName = (value) => {
    setUser({ ...user, subjectsName: value });
  };

  const onChangePhoto = (value) => {
    setUser({ ...user, photo: value });
  };

  const onChangeLocation = (value) => {
    setUser({ ...user, location: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('http://192.168.1.6:4001/checkin/', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        id: user.id,
        studentId: user.studentId,
        classId: user.classId,
        subjectsName: user.subjectsName,
        photo: user.photo,
        location: user.location,
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
        placeholder={'Student Id'}
        onChangeText={(value) => onChangeStudentId(value)}
        style={styles.input}
        value={user.studentId}
        keyboardType="numeric"
      />

      <TextInput
        placeholder={'ClassId'}
        onChangeText={(value) => onChangeClassId(value)}
        style={styles.input}
        value={user.classId}
      />

      <TextInput
        placeholder={'Subject Name'}
        onChangeText={(value) => onChangeSubjectName(value)}
        style={styles.input}
        value={user.subjectsName}
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
        placeholder={'Location'}
        onChangeText={(value) => onChangeLocation(value)}
        style={styles.input}
        value={user.location}
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