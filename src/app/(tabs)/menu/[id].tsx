import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: `Details: ${id}` }} />
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;
