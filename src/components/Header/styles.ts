import { StyleSheet } from "react-native"
import { theme } from "../../theme";

const styles = StyleSheet.create({
  containerHeader: {
    width: '100%',
    height: 173,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerText: {
    flexDirection: 'row',
    marginHorizontal: 8
  },
  text1: {
    color: theme.blue,
    fontSize: 34,
    fontWeight: 'bold'
  },
  text2: {
    color: theme.purpleDark,
    fontSize: 34,
    fontWeight: 'bold'
  }

});

export {styles}