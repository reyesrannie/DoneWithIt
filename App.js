
import WelcomeScreen from './app/screens/WelcomeScreen/WelcomeScreen';
import VeiwingScreen from './app/screens/ViewingScreen/VeiwingScreen';
import CardViewScreen from './app/screens/CardViewScreen/CardViewScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessageScreen/MessagesScreen';
import ListItemDeleteAction from './app/components/ListItemDeleteAction';
import ListItem from './app/components/ListItem';
import AreaScreenComponent from './app/components/AreaScreenComponent';
import Icon from './app/components/Icon';

export default function App() {
  
  return (
    <AreaScreenComponent >
    <ListItem title="My title"  ImageComponent={
    <Icon 
    name="email"/>}/>
    </AreaScreenComponent>
  );
}



