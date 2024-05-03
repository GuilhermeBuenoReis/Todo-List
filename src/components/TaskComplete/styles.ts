import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.gray400,
    padding: 15,
    borderRadius: 8,
  },
  nameTask: {
    alignItems: 'center',
    color: theme.gray100,
    textDecorationLine: 'line-through',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { styles };