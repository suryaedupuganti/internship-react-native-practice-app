import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native';
import styles from './style';

export const Description = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.container}>Introducing the Exoushia</Text>
            <Image
                style={{ height: 150, width: 150 }}
                source={require('./../../../assets/watervector.jpg')} />
        </View>
    )


}

export default Description;