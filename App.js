import React, {useState} from 'react';


import WelcomeScreen from './app/screens/WelcomeScreen/WelcomeScreen';
import VeiwingScreen from './app/screens/ViewingScreen/VeiwingScreen';
import CardViewScreen from './app/screens/CardViewScreen/CardViewScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessageScreen/MessagesScreen';
import ListItemDeleteAction from './app/components/ListItemDeleteAction';
import ListItem from './app/components/ListItem';
import AreaScreenComponent from './app/components/AreaScreenComponent';
import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen/AccountScreen';
import ListingScreen from './app/screens/ListingScreen/ListingScreen';
import { Switch, Text, TextInput } from 'react-native';
import AppTextInput from './app/components/AppTextInput';
import AppButton from './app/components/AppButton';
import AppPicker from './app/components/AppPicker';

export default function App() {

const categories = [
{label: "Furniture", value: 1},
{label: "Clothing", value: 2},
{label: "Cameras", value: 3}
]

  const [isNew, setIsNew] = useState(false);
const [category, setCategory] = useState(categories[0])
  return (
  <AreaScreenComponent>
<AppPicker 
selectedItem={category}
onSelectItem = {item => setCategory(item)}
items={categories} icon= "apps" placeholder="Category" />
<AppTextInput icon="email" placeholder="email"/>
  </AreaScreenComponent>
 
  );
}



