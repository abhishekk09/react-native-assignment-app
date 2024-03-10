import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Packs = ({
  selectedPack,
  stylePackBox,
  stylePackContainer,
  handlePackSelection,
  styleSelectedPack,
}) => {
  return (
    <View style={stylePackContainer}>
      <TouchableOpacity
        style={[stylePackBox, selectedPack === 'pack1' && styleSelectedPack]}
        onPress={() => handlePackSelection('pack1')}>
        <Text>Basic Pack</Text>
        <Text>price: x</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[stylePackBox, selectedPack === 'pack2' && styleSelectedPack]}
        onPress={() => handlePackSelection('pack2')}>
        <Text>3 Month Pack</Text>
        <Text>price: y</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Packs;
