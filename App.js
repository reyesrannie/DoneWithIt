import React from "react";
import { Button, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useNavigation,
  DefaultTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import navigationTheme from "./app/navigation/navigationTheme";
import AreaScreenComponent from "./app/components/AreaScreenComponent";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import FeedNavigator from "./app/navigation/FeedNavigator";
import ActivityIndicator from "./app/components/ActivityIndicator";

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <AreaScreenComponent>
    <Text>Tweets</Text>
    <Link />
  </AreaScreenComponent>
);

const TweetDetails = () => (
  <AreaScreenComponent>
    <Text>Tweet Details</Text>
  </AreaScreenComponent>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

const Account = () => (
  <AreaScreenComponent>
    <Text>Account</Text>
  </AreaScreenComponent>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Feed" component={StackNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    // <NavigationContainer>
    //   <AppNavigator />

    <ActivityIndicator visible={true} />
  );
}
