import {View, Text, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  bg?: string;
  children?: ReactNode;
  onChangeColor?: (id: string) => void;
};

const Card = (props: Props) => {
  const {children, bg, onChangeColor} = props;

  return (
    <TouchableOpacity
      disabled={!onChangeColor}
      onPress={onChangeColor ? () => onChangeColor('123') : undefined}
      style={[
        {
          padding: 20,
          margin: 16,
          borderRadius: 12,
          backgroundColor: bg ?? 'white',
        },
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default Card;
