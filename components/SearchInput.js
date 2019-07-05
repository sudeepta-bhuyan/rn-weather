import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default class SearchInput extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='white'
                    clearButtonMode='always'
                    style={styles.textInput}/>
            </View>
        );
    }
}

const styles  = StyleSheet.create({
    container: {
        height: 40,
        width: 300,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        color: 'white',
        alignSelf: 'center'
    },
});