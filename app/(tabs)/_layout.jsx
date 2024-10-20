import { Tabs } from 'expo-router';
import {View, Text, Image} from 'react-native';
const homeIcon = require('../../assets/icons/home-icon.png');
const athleteIcon = require('../../assets/icons/running-icon.png');
const presetIcon = require('../../assets/icons/stadium-track-icon.png');
const podiumIcon = require('../../assets/icons/leaderboard-icon.png');

const TabIcon = ({icon, color}) => {
return (<Image source = {icon} resizeMode="contain" style={{width:32}}/>);
}

export default TabsLayout = () => {
return (
<Tabs screenOptions={{tabBarActiveTintColor:'blue'}}>
    <Tabs.Screen name="index" options={{
        tabBarIcon: ({focused, color}) => <TabIcon icon={homeIcon} color={color} focused={focused} />,
        title: "Home",
    }}/>
    <Tabs.Screen name="addAthlete" options={{
        tabBarIcon: ({focused, color}) => <TabIcon icon={athleteIcon} color={color} focused={focused} />,
        title: "Add Athlete",
    }}/>
    <Tabs.Screen name="makeNewPreset" options={{
        tabBarIcon: ({focused, color}) => <TabIcon icon={presetIcon} color={color} focused={focused} />,
        title: "New Preset",
    }}/>
    <Tabs.Screen name="previousRaces" options={{
        tabBarIcon: ({focused, color}) => <TabIcon icon={podiumIcon} color={color} focused={focused} />,
        title: "Previous races",
        
    }}/>
</Tabs>);
};