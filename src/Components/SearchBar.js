import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=({term, setTerm, onTermSubmit})=>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={30} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={changedText=>setTerm(changedText)}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={()=>onTermSubmit()}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#EEEEEF',
        marginHorizontal: 15,
        marginVertical: 15, 
        borderRadius: 5,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle:{
        flex: 1,
        marginLeft: 10,
        height: 30,
        fontSize: 18,
    }
})

export default SearchBar;
