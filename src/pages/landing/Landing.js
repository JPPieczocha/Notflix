import React, {useState, useRef} from 'react'
import { View, Text, ImageBackground,Platform, TouchableOpacity, Image, Animated, Dimensions, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from './Styles'
import Colors from '../../constants/colors';
import LoadingPage from '../../components/loadingPage/LoadingPage';

const Landing = ({navigation}) => {

    const {height, width} = Dimensions.get('window')

    const [loginStatus, setLogInStatus] = useState(false);
    const [registerStatus, setregisterStatus] = useState(false);
    const [registerPackage, setregisterPackage] = useState(false);
    const [registerCard, setregisterCard] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const yScrollLogo = useRef(new Animated.Value(0)).current;
    const yScrollButtons = useRef(new Animated.Value((height.valueOf())-(height.valueOf()*0.8))).current;
    const yScrollTest = useRef(new Animated.Value(height.valueOf())).current; //El animation del login
    const yScrollTestRegister = useRef(new Animated.Value(height.valueOf()+200)).current; //El animation del registro
    const yScrollTestPackage = useRef(new Animated.Value(height.valueOf()+200)).current; //El animation del paquetes
    const yScrollTestCard = useRef(new Animated.Value(height.valueOf()+200)).current; //El animation del tarjeta



    const handleShowLogin = () =>{
        Animated.parallel([
            Animated.timing(yScrollLogo, {
                toValue: loginStatus ? 0 : -50,
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollButtons, {
                toValue: loginStatus ? ((height.valueOf())-(height.valueOf()*0.8)) : -1000,
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollTest, {
                toValue: loginStatus ? height.valueOf() : height.valueOf()*0.35 , 
                duration: 700,
                useNativeDriver: false
            }).start(),
        ]).start(() => {
            // callback
            setLogInStatus(!loginStatus);
        });
    }

    const handleShowRegister = () =>{
        Animated.parallel([
            Animated.timing(yScrollLogo, {
                toValue: registerStatus ? 0 : -50,
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollButtons, {
                toValue: registerStatus ? ((height.valueOf())-(height.valueOf()*0.8)) : -1000,
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollTestRegister, {
                toValue: registerStatus ? height.valueOf()+200 : height.valueOf()*0.35 , 
                duration: 700,
                useNativeDriver: false
            }).start(),
        ]).start(() => {
            // callback
            setregisterStatus(!registerStatus);
            // setregisterPackage(!registerPackage);

        });
    }

    const handleShowPackage = () =>{
        Animated.parallel([
            Animated.timing(yScrollTestRegister, {
                toValue: registerPackage ? height.valueOf()*0.35 : height.valueOf()+200, 
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollTestPackage, {
                toValue: registerPackage ? height.valueOf()+200 : height.valueOf()*0.35 , 
                duration: 700,
                useNativeDriver: false
            }).start(),
        ]).start(() => {
            // callback
            // setregisterStatus(!registerStatus);
            setregisterPackage(!registerPackage);
            console.log('REGISTRO PAQUETE');
        });
    }

    const handleShowCard = () =>{
        Animated.parallel([
            Animated.timing(yScrollTestPackage, {
                toValue: registerCard ? height.valueOf()*0.35 : height.valueOf()+200, 
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollTestCard, {
                toValue: registerCard ? height.valueOf()+200 : height.valueOf()*0.35 , 
                duration: 700,
                useNativeDriver: false
            }).start(),
        ]).start(() => {
            // callback
            // setregisterStatus(!registerStatus);
            setregisterCard(!registerCard);
            console.log('REGISTRO TARJETA');
        });
    }

    const login = ()=>{
            return(
                <Animated.View style={{width:'100%', height:'65%',  position: 'absolute', top: yScrollTest, Index: 100}}>
                    <BlurView  intensity={80} tint="dark" style={{width: '100%', height: '100%',justifyContent:'space-around', alignItems:'center'}}>
                        <View style={styles.inputWrapper}>
                            <TextInput placeholder={'Mail'} style={styles.input} keyboardType={'ascii-capable'}></TextInput>
                            <TextInput placeholder={'Contraseña'} style={styles.input} keyboardType={'ascii-capable'}></TextInput>
                        </View>
                        <View style={styles.buttonsWrapper}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Iniciar Sesión</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonSignUp} onPress={()=>handleShowLogin()}>
                                <Text style={styles.buttonText}>Atrás</Text>
                            </TouchableOpacity>
                        </View>
                </BlurView>
                </Animated.View>
            )
    }

    const register = ()=>{
        return(
            <Animated.View style={{width:'100%', height:'65%',  position: 'absolute', top: yScrollTestRegister, Index: 100}}>
                <BlurView  intensity={80} tint="dark" style={{width: '100%', height: '100%', justifyContent:'space-evenly', alignItems:'center'}}>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder={'Nombre'} style={styles.input} keyboardType={'ascii-capable'} onChangeText={(text)=>setName(text)}></TextInput>
                        <TextInput placeholder={'Apellido'} style={styles.input} keyboardType={'ascii-capable'} onChangeText={(text)=>setSurname(text)}></TextInput>
                        {/* <TextInput placeholder={'Fecha de nacimiento'} style={styles.input} keyboardType={'default'} onChangeText={(text)=>setDate(text)}></TextInput> */}
                        <TextInput placeholder={'Correo electrónico'} style={styles.input} keyboardType={'ascii-capable'} onChangeText={(text)=>setEmail(text)}></TextInput>
                        <TextInput placeholder={'Contraseña'} style={styles.input} keyboardType={'visible-password'} onChangeText={(text)=>setPassword(text)}></TextInput>
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity style={styles.button} onPress={()=>handleShowPackage()}>
                            <Text style={styles.buttonText}>Siguiente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSignUp} onPress={()=>handleShowRegister()}>
                            <Text style={styles.buttonText}>Atrás</Text>
                        </TouchableOpacity>
                    </View>
            </BlurView>
            </Animated.View>
        )
    }

    const packageSelector = ()=>{
        return(
            <Animated.View style={{width:'100%', height:'65%',  position: 'absolute', top: yScrollTestPackage, Index: 100}}>
                <BlurView  intensity={80} tint="dark" style={{width: '100%', height: '100%', justifyContent:'space-evenly', alignItems:'center'}}>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder={'Nombre'} style={styles.input} keyboardType={'ascii-capable'} onChangeText={(text)=>setName(text)}></TextInput>
                        {/* <TextInput placeholder={'Apellido'} style={styles.input} keyboardType={'ascii-capable'} onChangeText={(text)=>setSurname(text)}></TextInput>
                        <TextInput placeholder={'Fecha de nacimiento'} style={styles.input} keyboardType={'default'} onChangeText={(text)=>setDate(text)}></TextInput> */}
                        <TextInput placeholder={'Correo electrónico'} style={styles.input} keyboardType={'ascii-capable'} onChangeText={(text)=>setEmail(text)}></TextInput>
                        <TextInput placeholder={'Contraseña'} style={styles.input} keyboardType={'visible-password'} onChangeText={(text)=>setPassword(text)}></TextInput>
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity style={styles.button} onPress={()=>handleShowCard()}>
                            <Text style={styles.buttonText}>Siguiente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSignUp} onPress={()=>handleShowPackage()}>
                            <Text style={styles.buttonText}>Atrás</Text>
                        </TouchableOpacity>
                    </View>
            </BlurView>
            </Animated.View>
        )
    }

    const cardDeclarer = ()=>{
        return(
            <Animated.View style={{width:'100%', height:'65%',  position: 'absolute', top: yScrollTestCard, Index: 100}}>
                <BlurView  intensity={80} tint="dark" style={{width: '100%', height: '100%', justifyContent:'space-evenly', alignItems:'center'}}>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder={'Nombre'} style={styles.input} keyboardType={'ascii-capable'} onChangeText={(text)=>setName(text)}></TextInput>
                        {/* <TextInput placeholder={'Apellido'} style={styles.input} keyboardType={'ascii-capable'} onChangeText={(text)=>setSurname(text)}></TextInput>
                        <TextInput placeholder={'Fecha de nacimiento'} style={styles.input} keyboardType={'default'} onChangeText={(text)=>setDate(text)}></TextInput> */}
                        {/* <TextInput placeholder={'Correo electrónico'} style={styles.input} keyboardType={'ascii-capable'} onChangeText={(text)=>setEmail(text)}></TextInput> */}
                        <TextInput placeholder={'Contraseña'} style={styles.input} keyboardType={'visible-password'} onChangeText={(text)=>setPassword(text)}></TextInput>
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity style={styles.button} onPress={()=>console.log('REGISTRO FINAL!!')}>
                            <Text style={styles.buttonText}>Registrarse</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSignUp} onPress={()=>handleShowCard()}>
                            <Text style={styles.buttonText}>Atrás</Text>
                        </TouchableOpacity>
                    </View>
            </BlurView>
            </Animated.View>
        )
    }


    return(
        <View style={styles.container}>
            <ImageBackground
            source={require('../../assets/landing/fondov2.png')}
            style={{width:'100%', height:'100%', backgroundColor: Colors.primaryv3, alignItems:'center'}}
            resizeMode={'cover'}
            >
            <View style={styles.logoWrapper}>
                <Animated.Image
                source={require('../../assets/landing/Logo_final.png')}
                resizeMode={'contain'}
                style={{width:'70%',position: 'relative',height:150,top: yScrollLogo}}>
                </Animated.Image>
            </View>
            {login()}
            {register()}
            {packageSelector()}
            {cardDeclarer()}
            <Animated.View style={{
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                position: 'absolute',
                bottom: yScrollButtons,
                zIndex: 10
            }}>
                <TouchableOpacity style={styles.button} onPress={()=>handleShowLogin()}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSignUp} onPress={()=>handleShowRegister()}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </Animated.View> 
            </ImageBackground>   
        </View>
    )
}

export default Landing;