import React from 'react';
import {View, Text, Pressable} from 'react-native';

const TotalAmountwidget = ({stylecontainer, calculateTotalValue}) => {
  return (
    <View style={stylecontainer}>
      <Text>Total Value: {calculateTotalValue()}</Text>
      <Pressable onClick={() => null}>
        <Text>CONTINUE</Text>
      </Pressable>
    </View>
  );
};

export default TotalAmountwidget;
