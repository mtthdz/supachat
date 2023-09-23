import { StyleSheet } from "react-native";

const SIconButton = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e0e0e',
    width: 30,
    height: 30,
    borderRadius: 30/2,
    padding: 5,
    marginLeft: 5,
  },
  icon: {
    color: '#ffffff',
    fontSize: 10,
  }
});

export default SIconButton;