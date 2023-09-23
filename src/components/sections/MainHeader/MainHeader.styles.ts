import { StyleSheet } from "react-native";

const SMainHeader = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  flexParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexwrap: 'nowrap',
    paddingVertical: 8,
  }
});

export default SMainHeader;