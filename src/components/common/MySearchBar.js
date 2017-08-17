import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';

class MySearchBar extends Component {

	state={
		searchInputText: ''
	}

	onSearchChangeText(text) {
		this.setState({
			searchInputText: text
		});
		this.props.onSearchChangeText(text);
	}

	clearText() {
		this.setState({
			searchInputText: ''
		});
		this.props.onSearchChangeText('');
	}

	render() {
		const { inputStyle, iconStyle, containerStyle } = styles;
		const { placeholder, onBackPress, detailColor } = this.props;

		return (
			<View style={containerStyle}>
				
				<Icon 
					style={iconStyle} 
					name='keyboard-backspace' 
					type='material-community' 
					color={detailColor || 'black'}
					onPress={onBackPress}
				/>

				<TextInput
					style={inputStyle}
					placeholder={placeholder}
					autoCorrect={false}
					value={this.state.searchInputText}
					onChangeText={this.onSearchChangeText.bind(this)}
				/>

				<Icon 
					size={16}
					style={iconStyle} 
					name='close' 
					type='material-community'
					color='grey'
					onPress={this.clearText.bind(this)}
				/>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center'	
	},
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 8
	},
	iconStyle: {
		flex: 1
	}
};

export { MySearchBar };
