import { Tabs } from 'expo-router';
import {View, Text, Image} from 'react-native';
import * as icons from '../../assets/icons/icons'

const TabIcon = ({icon, color, name, focused}) => {

return (<View><Image source = {icon} resizeMode="contain"/></View>);
}

export default TabsLayout = () => {
return (
<Tabs screenOptions={{tabBarActiveTintColor:'blue'}}>
    <Tabs.Screen name="index" options={{
        tabBarIcon: ({focused, color}) => <TabIcon icon={icons.HOME_ICON} color={color} name="Home" focused={focused} />,
        title: "Home",
        headerShown: false,
    }}/>
    <Tabs.Screen name="addAthlete"/>
    <Tabs.Screen name="makeNewPreset"/>
    <Tabs.Screen name="previousRaces"/>
</Tabs>);
};