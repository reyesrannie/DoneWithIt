import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import VeiwingScreen from './app/screens/VeiwingScreen';
import AppButton from './app/components/AppButton';
import styles from './app/components/styles';

export default function App() {
  
  return (
    <WelcomeScreen />
  );
}



