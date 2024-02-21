import products from "@/assets/data/products";
import ProductList from "@/src/components/ProductList";
import Colors from "@/src/constants/Colors";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function MenuScreen() {
  // const product = products[0]
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductList product={item} />}
        contentContainerStyle={{gap:10 , padding:10}}
        columnWrapperStyle={{gap:10}}
        numColumns={2}
      />
    </View>
  );
}
