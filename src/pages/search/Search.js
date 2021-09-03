import React, {useState} from 'react';
import {Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles'


const Search = ()=>{

    const [textSearch, setTextSearch] = useState('')


    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.inputMain}>
                    <TextInput style={styles.inputText} placeholder={'Busque lo que desee...'} keyboardType={'web-search'}></TextInput>
                </View>

            </View>
        </View>
    );
}

export default Search
