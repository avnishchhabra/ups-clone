import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Customers from "../screens/Customers";
import Orders from "../screens/Orders";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Icon } from "@rneui/themed";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#55c1cc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? "#55c1cc" : "gray"}
              />
            );
          } else if (route.name === "Orders")
            return (
              <Icon name="box" type="entypo" color={focused ? "#55c1cc" : "gray"} />
            );
        },
      })}
    >
      <Tab.Screen name="Customers" component={Customers} />
      <Tab.Screen name="Orders" component={Orders} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
