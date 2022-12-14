import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker';

import AreaScreenComponent from './app/components/AreaScreenComponent';
import { Button, Image } from 'react-native';
import ImageImport from './app/components/ImageImport';
import ImageImportList from './app/components/ImageImportList';


export default function App() {
const [imageUris, setImageUris] = useState([]);

const handleAdd = (uri) => {
  setImageUris([...imageUris, uri]);
}
const handleRemove = (uri) => {
  setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
}
  return (
  <AreaScreenComponent>
  <ImageImportList
  imageUris={imageUris}
  onAddImage={handleAdd} 
  onRemoveImage={handleRemove} 
  
  />
  </AreaScreenComponent>
  );
}



