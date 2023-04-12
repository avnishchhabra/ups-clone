import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";
import userCustomerOrders from "../hooks/userCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRootProp = RouteProp<RootStackParamList , 'MyModal'>

const ModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProp>();
  const {params: {name , userId}} = useRoute<ModalScreenRootProp>()

  const {loading , error, orders} = userCustomerOrders(userId)
  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw("absolute right-5 top-5 z-50")}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>
      <View style={{marginTop: 10}}>
        <View style={[tw('py-5 border-b') , {borderColor: '#59C1CC'}]}>
            <Text style={[tw('text-center text-xl font-bold') , {color: '#59C1CC'}]}>{name}</Text>
            <Text style={[tw('text-center italic text-sm')]}>deliveries</Text>
        </View>
      </View>

      <FlatList contentContainerStyle={{paddingBottom: 200}} data={orders} keyExtractor={order => order.trackingId} renderItem={({index, item: order, separators}) => <DeliveryCard order={order} />} />
    </View>
  );
};

export default ModalScreen;
