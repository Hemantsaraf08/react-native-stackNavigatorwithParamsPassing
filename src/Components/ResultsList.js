import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';

const ResultsList=({results, title, navigation})=>{
    //note that the navigation received in props is not from parent i.e. screen component, but from withNavigation HOC
    if(!results) return <></>
    return(
        <View style={styles.container}>
            <Text style={styles.headingStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=>result.id}
                renderItem={({item})=>{
                   return (
                       <TouchableOpacity 
                        onPress={()=>navigation.navigate('SingleResultScreen', {
                            id: item.id
                        })}
                       >
                           <ResultDetail result={item}/>
                       </TouchableOpacity>
                   )
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    headingStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 5
    }
    
})

export default withNavigation(ResultsList);
