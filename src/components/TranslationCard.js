import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import TranslationItem from './TranslationItem';
import { Card } from './common';

class TranslationCard extends Component {

    componentWillMount() {
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    getFrom(id) {
        const { fromTranslationText } = this.props;
        return _.find(fromTranslationText, (value, key) => key === id);  
    }

    createDataSource({ children }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        
        const array = _.map(children, (value, key) => {
            return { 
                from: this.getFrom(key),
                to: value
            };
        });
    
        this.dataSource = ds.cloneWithRows(array);
    }

    renderRow(translationRow) {
        return (
            <Card>
                <TranslationItem 
                    data={translationRow}
                    toIconUri={this.props.toIconUri}
                    fromIconUri={this.props.fromIconUri}
                />
            </Card>
        );
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
            />  
        );
    }
}

export default TranslationCard;
