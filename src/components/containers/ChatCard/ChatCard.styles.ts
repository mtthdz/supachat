import { StyleSheet } from "react-native";

const SChatCard = StyleSheet.create({
  button: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '100%',
    paddingVertical: 6,
  },
  avatar: {
    height: 40,
    width: 40,
    marginRight: 8,
    borderRadius: 50,
    backgroundColor: '#0000FF',
  },
  content: {
    justifyContent: 'flex-start',
  },
  title: {
    paddingBottom: 4,
  },
  meta: {
    color: 'grey',
    fontSize: 12,
  }
});

export default SChatCard;
