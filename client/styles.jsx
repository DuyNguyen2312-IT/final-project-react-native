import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },

  text: {
    fontSize: 20,
    color: 'black'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: 360
  },

  button: {
    width: 360,
    height: 40,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  },
});