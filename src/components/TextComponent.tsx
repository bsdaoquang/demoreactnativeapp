import {View, Text, StyleProp, TextStyle} from 'react-native';
import React, {useState} from 'react';
import {global} from '../styles/global';

type Props = {
  text: string;
  color?: string;
  styles?: StyleProp<TextStyle>;
  size?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
};

const TextComponent = (props: Props) => {
  const {text, styles, color, size, textAlign} = props;

  return (
    <Text
      style={[
        global.text,
        {
          fontWeight: '300',
          color: color ?? '#212121',
          fontSize: size ?? 14,
          textAlign: textAlign,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
