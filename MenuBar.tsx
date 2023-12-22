import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native-ui-lib';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';
import { StyleSheet} from 'react-native';


type HomePageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomePage'>;

const MenuBar = () => {
    const navigation = useNavigation<HomePageNavigationProp>();
    const state = useNavigationState(state => state);

    // 获取当前路由名称
    const currentRouteName = state.routes[state.index]?.name;

    const getButtonStyle = (buttonName: string) => {
        return currentRouteName === buttonName
            ? [styles.buttonMenu, styles.selectedButton]
            : styles.buttonMenu;
    };

    const localImageSource = require('./assets/images/1.jpg');
    // const localImageSource = require('./assets/images/1.jpg');
    // const localImageSource = require('./assets/images/1.jpg');
    // const localImageSource = require('./assets/images/1.jpg');
    // const localImageSource = require('./assets/images/1.jpg');

    const navigateToPage1 = () => {
        navigation.navigate('Page1');
    };
    // const navigateToPage2 = () => {
    //     navigation.navigate('Page2');
    // };
    // const navigateToPage3 = () => {
    //     navigation.navigate('Page3');
    // };
    // const navigateToPage4 = () => {
    //     navigation.navigate('Page4');
    // };
    const navigateToHomePage = () => {
        navigation.navigate('HomePage');
    };

    return (
        <View style={styles.buttonBar}>
            <TouchableOpacity onPress={navigateToPage1}>
                <Image
                    source={localImageSource}
                    style={getButtonStyle('Page1')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToPage1}>
                <Image
                    source={localImageSource}
                    style={styles.buttonMenu}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToHomePage}>
                <Image
                    source={localImageSource}
                    style={getButtonStyle('HomePage')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToPage1}>
                <Image
                    source={localImageSource}
                    style={styles.buttonMenu}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToPage1}>
                <Image
                    source={localImageSource}
                    style={styles.buttonMenu}
                />
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    buttonBar: {
        position: 'absolute', // 绝对定位
        bottom: 0, // 定位到底部
        flexDirection: 'row', // 按钮水平排列
        width: '100%', // 宽度填满屏幕
        justifyContent: 'space-evenly', // 按钮间均匀分布
        backgroundColor: 'white', // 设置为你的背景颜色
        paddingBottom: 20, // 下内边距，为了凸显下凹效果
        shadowColor: 'black', // 阴影颜色
        shadowOffset: { width: 0, height: -5 }, // 阴影偏移
        shadowOpacity: 0.25, // 阴影不透明度
        shadowRadius: 5, // 阴影扩散的半径
        elevation: 20, // Android上的阴影效果
        borderTopLeftRadius: 20, // 容器的上左圆角
        borderTopRightRadius: 20, // 容器的上右圆角
      },
    buttonMenu: {
        width: 50, // 按钮宽度
        height: 50, // 按钮高度
        borderRadius: 25, // 圆形按钮的圆角（使其成为圆形）
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#0000ff', // 默认背景颜色
    },
    selectedButton: {
        backgroundColor: '#FFFFFF', // 选中按钮的背景颜色
        width: 60, // 选中按钮的宽度
        height: 60, // 选中按钮的高度
        borderRadius: 35, // 选中按钮的圆角（使其成为圆形）
        borderColor: 'black', // 选中按钮的边框颜色
        borderWidth: 5, // 选中按钮的边框宽度
        shadowColor: '#000000', // 阴影颜色
        shadowOffset: { width: 0, height: 4 }, // 阴影偏移
        shadowOpacity: 0.3, // 阴影不透明度
        shadowRadius: 5, // 阴影扩散的半径
        elevation: 6, // Android上的阴影效果
    },
});
export default MenuBar;