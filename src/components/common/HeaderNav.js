import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


class HeaderNav extends Component {

	renderBackButton() {
		const { onBackPress, iconColor } = this.props;
		if (onBackPress) {
			return (
				<Icon 
					style={styles.iconStyle} 
					name='ios-arrow-back' 
					type='ionicon' 
					color={iconColor || 'black'}
					onPress={onBackPress}
					component={TouchableOpacity}												
				/>			
			);
		}
	}

	render() {
		const { 
            headerTitle, 
            subTitle,
            backgroundColor, 
            textColor 
        } = this.props;

		const { 
            mainTextStyle, 
            subTitleStyle, 
            containerStyle, 
            textContainerStyle 
        } = styles;

		return (
			<View style={[containerStyle, { backgroundColor }]}>
				{
					this.renderBackButton()
				}
                <View style={textContainerStyle}>
                    <Text style={[mainTextStyle, { color: textColor }]}>
                        {headerTitle}
                    </Text>
                    <Text style={subTitleStyle}>
                        {subTitle}
                    </Text>
                </View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		backgroundColor: '#F8F8F8',    
        alignItems: 'center',
        flexDirection: 'row', 
		height: 70,
        paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
        position: 'relative',        
    },
    textContainerStyle: {  
        flex: 1, 
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: 10,
        paddingLeft: 15
    },
	mainTextStyle: {
		fontSize: 20,
		color: 'black',
		fontWeight: '500'
    },
    subTitleStyle: {
		fontSize: 14,
		color: 'black',
		fontWeight: '300'
	},
	iconStyle: {
        paddingLeft: 5
	}
};

export { HeaderNav };
