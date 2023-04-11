import { Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { TabStackParamList } from "../navigator/TabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { Image, Input } from "@rneui/themed";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const Customers = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input , setInput] = useState<string>('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView style={{backgroundColor: '#55c1cc'}}>
      <Image
        source={{ uri: "https://links.papareact.com/3jC" }}
        PlaceholderContent={<ActivityIndicator />}
        containerStyle={tailwind("w-full h-64")}
      />
      <Input containerStyle={tailwind('bg-white pt-5 pb-0 px-10')} value={input} onChangeText={text => setInput(text)} placeholder="Search customer" />
    </ScrollView>
  );
};

export default Customers;
