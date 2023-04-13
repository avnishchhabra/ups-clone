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
        tabBarActiveTintColor: "#EB6A7C",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? "#EB6A7C" : "gray"}
              />
            );
          } else if (route.name === "Orders")
            return (
              <Icon name="box" type="entypo" color={focused ? "#EB6A7C" : "gray"} />
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
