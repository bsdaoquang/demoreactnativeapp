import {
  View,
  Text,
  StyleProp,
  ViewProps,
  TextStyle,
  TextInput,
  TouchableOpacity,
  KeyboardTypeOptions,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {global} from '../styles/global';
import TextComponent from './TextComponent';

type Props = {
  prefix?: ReactNode;
  placeholder?: string;
  subfix?: ReactNode;
  value: string;
  onChange: (val: string) => void;
  styles?: StyleProp<ViewProps>;
  inputStyles?: StyleProp<TextStyle>;
  password?: boolean;
  allowClear?: boolean;
  inline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
};

const Input = (props: Props) => {
  const {
    prefix,
    placeholder,
    subfix,
    value,
    onChange,
    styles,
    inputStyles,
    password,
    allowClear,
    inline,
    keyboardType,
    autoCapitalize,
  } = props;
  const [isShowPass, setIsShowPass] = useState(password);

  return (
    <View
      style={[
        global.inputContainer,
        {
          borderColor: value ? 'coral' : '#fafafa',
          borderWidth: 1,
          backgroundColor: value ? 'white' : '#fafafa',
          marginBottom: inline ? 0 : 16,
        },
        styles,
      ]}>
      {prefix && prefix}
      <View
        style={{
          flex: 1,
          paddingLeft: prefix ? 10 : 0,
          paddingRight: password || allowClear ? 10 : 0,
        }}>
        <TextInput
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          style={[global.input, {}, inputStyles]}
          placeholderTextColor={'#CFCFCF'}
          placeholder={placeholder ?? ''}
          value={value}
          secureTextEntry={password ? isShowPass : false}
          onChangeText={val => onChange(val)}
        />
      </View>

      {subfix && subfix}
      {value && allowClear && (
        <TouchableOpacity onPress={() => onChange('')}>
          <Text>Clear</Text>
        </TouchableOpacity>
      )}
      {password ? (
        isShowPass ? (
          <TouchableOpacity onPress={() => setIsShowPass(!isShowPass)}>
            <TextComponent text="hide" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsShowPass(!isShowPass)}>
            <TextComponent text="show" />
          </TouchableOpacity>
        )
      ) : null}
    </View>
  );
};

export default Input;
