import { StyleSheet } from "react-native";

const SChatHeader = StyleSheet.create({
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
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    marginLeft: 6,
  }
});

export default SChatHeader;