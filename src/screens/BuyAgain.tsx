import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import TotalAmountWidget from '../components/TotalAmountwidget';
import Packs from '../components/Packs';

const BuyAgain = () => {
  const [selectedPack, setSelectedPack] = useState(null); // State to store selected pack
  const [selectedProducts, setSelectedProducts] = useState([]); // State to store selected products

  // Dummy product data
  const productsData = [
    {id: 1, name: 'Product 1', price: 10},
    {id: 2, name: 'Product 2', price: 20},
    {id: 3, name: 'Product 3', price: 15},
    {id: 4, name: 'Product 4', price: 10},
    {id: 5, name: 'Product 5', price: 20},
    {id: 6, name: 'Product 6', price: 15},
    {id: 7, name: 'Product 7', price: 15},

    // Add more products as needed
  ];

  // Function to handle selecting a pack
  const handlePackSelection = pack => {
    setSelectedPack(pack);
  };

  // Function to handle selecting a product
  const handleProductSelection = productId => {
    const selectedProductIndex = selectedProducts.indexOf(productId);
    if (selectedProductIndex === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      const updatedSelectedProducts = [...selectedProducts];
      updatedSelectedProducts.splice(selectedProductIndex, 1);
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  // Function to calculate total value
  const calculateTotalValue = () => {
    let total = 0;
    selectedProducts.forEach(productId => {
      const product = productsData.find(item => item.id === productId);
      if (product) {
        total += product.price;
      }
    });
    return total;
  };

  // Render product items
  const renderItem = ({item}) => {
    const isSelected = selectedProducts.includes(item.id);
    return (
      <TouchableOpacity
        style={[styles.productItem, isSelected && styles.selectedProduct]}
        onPress={() => handleProductSelection(item.id)}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Packs
        stylePackContainer={styles.packContainer}
        stylePackBox={styles.packBox}
        handlePackSelection={handlePackSelection}
        selectedPack={selectedPack}
        styleSelectedPack={styles.selectedPack}
      />
      <FlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <TotalAmountWidget
        calculateTotalValue={calculateTotalValue}
        stylecontainer={styles.totalContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  packContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  packBox: {
    width: '48%',
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  selectedPack: {
    backgroundColor: 'lightblue',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  selectedProduct: {
    backgroundColor: 'lightblue',
  },
  totalContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'lightblue',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default BuyAgain;
