import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from '../Atom/All';
import Menu from '../Atom/menu';
import Popular from '../Atom/popular';


const Tab = createMaterialTopTabNavigator();
export default class HomeTap extends React.Component {
    render(){
        console.log(this.props);
        return (
            
            <Tab.Navigator tabBarOptions={{
                labelStyle:{fontWeight:'bold'},
                labelStyle: { fontSize: 16 },
                tabStyle: { width: 100 },
            }}>
                <Tab.Screen name="ALL" component={All} {...this.props}/>
                <Tab.Screen name="MENU" component={Menu} {...this.props} />
                <Tab.Screen name="RATE" component={Popular} {...this.props}/>
            </Tab.Navigator>
        
    );
    }
    
}
