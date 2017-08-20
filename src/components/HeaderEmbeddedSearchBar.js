import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { 
	enableSearchMode, 
	disableSearchMode,
	searchTextChanged,
	clearIconPressed
} from '../actions';

class HeaderEmbeddedSearchBar extends Component {

	onSearchIconPress() {
		this.props.enableSearchMode();
	}

	onBackIconPress() {
		this.props.disableSearchMode();
		this.props.onSearchChangeText('');
	}

	onSearchChangeText(text) {
		this.props.searchTextChanged(text);
		this.props.onSearchChangeText(text);
	}

	clearText() {
		this.props.clearIconPressed();
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
						onPress={this.onSearchIconPress.bind(this)}
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
		const { backgroundColor, searchInputText } = this.props;
		const { searchBarContainerStyle, searchBarIconStyle, serchBarInputStyle } = styles;		
		
		return (
			<CardSection style={{ borderColor: backgroundColor, borderBottomWidth: 1.5 }}>				

				<View style={searchBarContainerStyle}>
				
					<Icon 
						style={searchBarIconStyle} 
						name='keyboard-backspace' 
						type='material-community' 
						color={backgroundColor || 'black'}
						onPress={this.onBackIconPress.bind(this)}
						component={TouchableOpacity}												
					/>

					<TextInput
						style={serchBarInputStyle}
						placeholder='Search a country'
						autoCorrect={false}
						value={searchInputText}
						onChangeText={this.onSearchChangeText.bind(this)}
					/>

					<Icon 
						size={16}
						style={searchBarIconStyle} 
						name='close' 
						type='material-community'
						color='grey'
						onPress={this.clearText.bind(this)}
						component={TouchableOpacity}												
					/>
				</View>	

			</CardSection>				
		);
	}

	render() {
		return this.props.searchActive ? this.renderSearchBar() : this.renderMainPanel();
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
	},
	searchBarContainerStyle: {
		flex: 1,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center'	
	},
	serchBarInputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 8
	},
	searchBarIconStyle: {
		flex: 1
	}	
};

const mapStateToProps = (state) => {
	const { searchActive, searchInputText } = state.headerEmbbedded;
	return { searchActive, searchInputText };
};

export default connect(mapStateToProps, {
	enableSearchMode, 
	disableSearchMode,
	searchTextChanged,
	clearIconPressed
})(HeaderEmbeddedSearchBar);
