import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker';

import AreaScreenComponent from './app/components/AreaScreenComponent';
import { Button, Image } from 'react-native';
import ImageImport from './app/components/ImageImport';
import ImageImportList from './app/components/ImageImportList';
import ListingEditScreen from './app/screens/ListingScreen/ListingEditScreen';


export default function App() {

  return (
 <ListingEditScreen />
  );
}



