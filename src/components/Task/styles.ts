import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: theme.gray400,
    padding: 15,
    borderRadius: 8,
    width: '100%'
  },
  nameTask: {
    alignItems: 'center',
    color: theme.gray100,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedTask: {
    color: theme.gray100,
  }
});

export { styles }