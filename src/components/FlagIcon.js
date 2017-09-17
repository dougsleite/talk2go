import React from 'react';
import { CachedImage } from 'react-native-img-cache';

const FlagIcon = ({ flagUri }) => {
    return (
        <CachedImage 
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
