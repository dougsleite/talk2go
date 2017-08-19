import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { MySearchBar } from './MySearchBar';
import { CardSection } from './CardSection';

class HeaderEmbeddedSearchBar extends Component {

	state = {
		searchActive: false
	};

	onBackPress() {
		this.setState({ searchActive: false });
		this.props.onSearchChangeText('');
	}

	renderMainPanel() {
		const { textStyle, containerStyle, buttonsGroupStyle, iconStyle } = styles;		
		const { headerText, backgroundColor, textColor, onRightIconPress } = this.props;
		return (
			<View style={[containerStyle, { backgroundColor }]}>
				<Text style={[textStyle, { color: textColor }]}>{headerText}</Text>
				<View style={buttonsGroupStyle}>
					<Icon 
						style={iconStyle} 
						color={textColor || 'black'}
						name='magnify' 
						type='material-community' 
						onPress={() => this.setState({ searchActive: true })}
						component={TouchableOpacity}
					/>
					<Icon 
						style={iconStyle}
						color={textColor || 'black'}
						name='dots-vertical' 
						type='material-community' 
						onPress={onRightIconPress}
						component={TouchableOpacity}							
					/>
				</View>
			</View>	
		);		
	}	

	renderSearchBar() {
		const { onSearchChangeText, backgroundColor } = this.props;
		return (
			<CardSection style={{ borderColor: backgroundColor, borderBottomWidth: 1.5 }}>				
				<MySearchBar
					placeholder="Search a country" 
					onBackPress={this.onBackPress.bind(this)}
					onSearchChangeText={onSearchChangeText}
					detailColor={backgroundColor}
				/>
			</CardSection>				
		);
	}

	render() {
		return this.state.searchActive ? this.renderSearchBar() : this.renderMainPanel();
	}
}

const styles = {
	containerStyle: {
		backgroundColor: '#F8F8F8',
		//'flex-start', 'flex-end', 'center', 'space-between', 'space-around'
		justifyContent: 'space-between',
		//'flex-start', 'flex-end', 'center', 'stretch', 'baseline'
		alignItems: 'center',
		flexDirection: 'row',
		height: 60,
		paddingLeft: 15,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20,
		color: 'black',
		fontWeight: '500'
	},
	buttonsGroupStyle: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingRight: 5
	},
	iconStyle: {
		paddingLeft: 10,
		paddingRight: 10
	}
};

export { HeaderEmbeddedSearchBar };
