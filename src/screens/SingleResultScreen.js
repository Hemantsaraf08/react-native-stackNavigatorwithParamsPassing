import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp';

const SingleResultScreen=({navigation})=>{
    const id=navigation.getParam('id')
    const [result, setResult]=useState(null)
    console.log(id);
    const getDetails=async (id)=>{
        const response=await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(()=>{
        getDetails(id)
    }, [id])

    return <>
        <Text>Single Screen</Text>
        {
            result?<FlatList
                showsVerticalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(item)=>item}
                renderItem={
                    ({item})=>(<Image style={styles.img}
                        source={{uri: item}}
                    />)
                }
            />:null
        }
        
    </>
}

const styles=StyleSheet.create({
    img:{
        width: 250,
        height: 350,
        borderRadius: 4,
        margin: 10

    }
})

export default SingleResultScreen;