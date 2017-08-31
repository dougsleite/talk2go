import React from 'react';
import { Image } from 'react-native';

const FlagIcon = ({ flagUri }) => {
    return (
        <Image 
            style={styles.flagStyle}
            source={{ uri: flagUri }}
            resizeMode="cover"
        /> 
    );
};

const styles = {
    flagStyle: {
        height: 48,
        width: 48,
        borderWidth: 0,
        borderRadius: 24        
    }
};

export default FlagIcon;
