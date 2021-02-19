import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from '../style/ProductStyle';

export default function Feed() {

    return (
        <ScrollView >
            <View style={styles.container}>
            <Text style={styles.text}>Full Stack Eletro</Text>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../img/tv1.jpg')} />
                    <Text style={styles.title}>Smart TV LED 32 HD TCL, HDR Bluetooth, HDMI e USB, WebOS 4.5</Text>
                    <Text style={styles.preco}>De: R$ 1574.90</Text>
                    <Text style={styles.oferta}>Por: R$ 1349.00</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../img/tv2.jpg')} />
                    <Text style={styles.title}>Smart TV LED 32 SAMSUNG LG 32, HDR Bluetooth, HDMI e USB, WebOS 4.5</Text>
                    <Text style={styles.preco}>De: R$ 2899.00</Text>
                    <Text style={styles.oferta}>Por: R$ 2649.00</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../img/tv3.jpg')} />
                    <Text style={styles.title}>Smart TV LED 32 HD LG 32, HDR Bluetooth, HDMI e USB, WebOS 4.5</Text>
                    <Text style={styles.preco}>De: R$ 2579.00</Text>
                    <Text style={styles.oferta}>Por: R$ 2399.00</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}
