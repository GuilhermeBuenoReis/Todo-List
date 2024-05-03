import { StatusBar } from 'react-native';
import { HomeScreen } from './src/screns/Home';

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
    </>
  );
}