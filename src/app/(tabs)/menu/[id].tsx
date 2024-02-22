import { View, Text, Image, StyleSheet, Pressable,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { fallbackImage } from "@/src/components/ProductList";
import Button from "@/src/components/Button";

const sizes = ["S", "M", "L", "XL"];
const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }
  
  const addToCart = () => {
    //TODO:Implement adding to cart functionality
    console.warn("Adding to cart size: " + selectedSize)
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || fallbackImage }}
        style={styles.image}
      />

      <Text>Select Size</Text>
      <View style={styles.size}>
        {sizes.map((size) => (
          <TouchableOpacity
          onPress={()=> setSelectedSize(size)}
            key={size}
            style={[
              styles.sizes,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "black" : "gray" },
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop:'auto'
  },
  size: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  sizes: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
export default ProductDetails;
