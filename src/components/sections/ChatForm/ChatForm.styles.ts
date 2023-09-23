import { StyleSheet } from "react-native";

const SChatForm = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    paddingVertical: 5,
    // backgroundColor: 'red',
  },
  input: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    color: '#0e0e0e',
    backgroundColor: '#ffffff',
  }
});

export default SChatForm;