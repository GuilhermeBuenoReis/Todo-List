import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.gray600,
    alignItems: 'center'
  },
  taskCreated: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18
  },
  create: {
    color: theme.blue,
    fontSize: 24,
    fontWeight: 'bold'
  },
  finished: {
    color: theme.purple,
    fontSize: 24,
    fontWeight: 'bold'
  },
  containerInput: {
    width: '100%',
    flexDirection: 'row'
  },
  inputArea: {
    backgroundColor: theme.gray400,
    flex: 1,
    borderRadius: 8,
    padding:15,
    fontWeight: 'bold',
    marginHorizontal: 8,
    color: theme.gray100
  },
  btn: {
    backgroundColor: theme.blueDark,
    width: 56,
    height: 56,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2
  },
  btnText: {
    fontSize: 24,
    color: theme.gray100,
  },

  containerNewTaskAdd: {
    width: '100%',
    alignItems: 'center',
    marginTop: 12
  },
  noTask: {
    color: theme.gray100,
    marginTop: 12
  },
  newTaskText: {
    color: theme.gray100,
    marginTop: 12
  },
  imgClipboard: {
    width: 72,
    height:72,
    marginTop: 20,
  }
})

export { styles }