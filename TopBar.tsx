
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native-ui-lib';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';
import { StyleSheet } from 'react-native';

type HomePageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomePage'>;
const TopBar = () => {
    const navigation = useNavigation<HomePageNavigationProp>();
    const state = useNavigationState(state => state);

    const iconImageSource = require('./assets/images/TopBar-Icon.png');
    const searchImageSource = require('./assets/images/TopBar-Search.png');
    const alertImageSource = require('./assets/images/TopBar-Alert.png');
    const accountImageSource = require('./assets/images/TopBar-Avatar.png');

    const navigateToPage1 = () => {
        navigation.navigate('MarketPage');
    };

    return (
        <View style={styles.topContainer}>
            <View style={styles.leftContainer}>
                <Image source={iconImageSource} style={styles.icon} />
                <Text style={styles.greetingText}>Hi, Andy.</Text>
            </View>

            <View style={styles.imageContainer}>

                <TouchableOpacity onPress={navigateToPage1}>
                    <Image
                        source={searchImageSource}
                        style={styles.topMenuButton}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToPage1}>
                    <Image
                        source={alertImageSource}
                        style={styles.topMenuButton}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToPage1}>
                    <Image
                        source={accountImageSource}
                        style={styles.topMenuButton}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    icon: {
        width: 30, // 設置圖標大小
        height: 30,
        borderRadius: 25,
        marginBottom: 10,
    },
    topContainer: {
        flexDirection: 'row', // 水平排列
        justifyContent: 'space-between', // 兩端對齊
        alignItems: 'center', // 垂直居中
        padding: 10,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    topMenuButton: {
        width: 30, // 設置圖標大小
        height: 30,
        marginLeft: 10, // 圖標間距
        borderRadius: 25,
        marginBottom: 10,
    },
    greetingText: {
        fontSize: 24,
    },
    leftContainer: {
        flexDirection: 'row', // 水平排列
        alignItems: 'center', // 垂直居中
    },
});

export default TopBar;