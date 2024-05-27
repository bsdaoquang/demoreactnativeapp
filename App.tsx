import {View, Text, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import {Input, TextComponent} from './src/components';

const initState = {
  name: '',
  age: '',
  address: '',
  phone: '',
  email: '',
  imgUrl: '',
};

const App = () => {
  const [profile, setProfile] = useState<any>(initState);

  const handleChangeValue = (key: string, val: string) => {
    const data: any = {...profile};

    data[`${key}`] = val;

    setProfile(data);
  };

  return (
    <ScrollView style={{backgroundColor: 'white', padding: 20, flex: 1}}>
      {Object.keys(profile).map(key => (
        <Input
          value={profile[`${key}`]}
          placeholder={key}
          keyboardType={
            key === 'age'
              ? 'number-pad'
              : key === 'phone'
              ? 'phone-pad'
              : 'default'
          }
          autoCapitalize="none"
          allowClear
          onChange={val => handleChangeValue(key, val)}
        />
      ))}

      <Button title="Reset" onPress={() => setProfile(initState)} />
      <Button title="OK" onPress={() => console.log(profile)} />
    </ScrollView>
  );
};

export default App;
