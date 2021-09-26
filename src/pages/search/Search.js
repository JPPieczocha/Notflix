import React, {useState} from 'react';
import {Text, View, TextInput,Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles'


const Search = ()=>{

    const [textSearch, setTextSearch] = useState('')


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={styles.main}>
                <View style={styles.inputMain}>
                    <TextInput style={styles.inputText} 
                    placeholder={'Busque lo que desee...'} 
                    keyboardType={'web-search'} 
                    onSubmitEditing={(event)=>{
                        console.log(event.nativeEvent.text);
                        setTextSearch(event.nativeEvent.text)
                    }}></TextInput>
                </View>
            </View>
            </TouchableWithoutFeedback>

        </View>
    );
}

export default Search
