import React, {useState, useEffect} from "react";
import {View, ScrollView,  Text, StyleSheet} from 'react-native';
import SearchBar from "../Components/SearchBar";
import ResultsList from "../Components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen=()=>{
    const [term, setTerm]=useState("")
    const [searchApi, results, errMsg]=useResults()
    const filterByPrice=(price)=>{
        return results.filter(item=>item.price===price)
    }
    return (
        <>
            <SearchBar 
                term={term} 
                setTerm={setTerm}
                onTermSubmit={()=>searchApi(term)}/>
            {errMsg?<Text>{errMsg}</Text>:null}
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultsList results={filterByPrice('$')}title="Cost Effective"/>
                <ResultsList results={filterByPrice('$$')}title="Bit Pricier"/>
                <ResultsList results={filterByPrice('$$$')}title="Big Spendor"/>
            </ScrollView>
        </>
    )
}

const styles=StyleSheet.create({

})

export default SearchScreen;
